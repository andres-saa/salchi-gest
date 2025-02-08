import { defineStore } from 'pinia'
import { URI } from '../service/conection'

export const usecartStore = defineStore('salchi_super_cart_web_salchiget_3', {
  persist: {
    key: 'salchi_super_cart_web_salchiget_3',
    storage: sessionStorage,
    paths: ['cart', 'last_order', 'menu'],
  },
  state: () => ({
    currentProduct: {},
    currentSection: {},
    currentVideoIndex: 0,
    currentVideoTime: 0,

    visibles: {
      currentProduct: false,
      addAdditionToCart: false,
      last_order: '',
    },

    cart: [],
    last_order: '',
    sending_order: false,
    was_reserva: false,
    menu:{}
  }),

  getters: {
    cartTotal(state) {
      return state.cart.reduce((acc, item) => acc + item.pedido_precio, 0)
    },
    // Getter para verificar si existe un producto por ID en el carrito
    isProductInCart: (state) => (productId) => {
      return state.cart.some((item) => {
        return item.pedido_productoid === productId
      })
    },

    // (Esta parecía repetida en tu código original)
    isProductInCart2: (state) => (productId) => {
      return state.cart.products?.some((product) => {
        return product.product.productogeneral_id === productId
      })
    },

    // Ejemplo de getter para calcular el total de un producto fuera de las actions
    getProductTotal: () => (product, additionalItems = [], quantity = 1) => {
      // Si el combo ya tiene su precio final, NO sumamos sus "sub-productos"
      // sino que solo usamos el precio general y los adicionales.


      let total = 0
      const productBasePrice = parseInt(product.productogeneral_precio) || 0
      total += productBasePrice * quantity

      // Adicionales (si aplica)
      if (additionalItems && additionalItems.length > 0) {
        additionalItems.forEach(ad => {
          const adPrice    = parseInt(ad.price) || 0
          const adQuantity = parseInt(ad.quantity) || 1
          total += adPrice * adQuantity
        })
      }



      return total
    },
  },

  actions: {
    setCurrentVideoIndex(index) {
      this.currentVideoIndex = index
    },
    setCurrentVideoTime(time) {
      this.currentVideoTime = time
    },

    setCurrentProduct(product) {
      this.currentProduct = product
    },
    setVisible(item, status) {
      this.visibles[item] = status
    },


    getProductId(product) {
      if (product.producto_id) {
        return product.producto_id
      } else if (
        product.lista_presentacion &&
        product.lista_presentacion.length > 0 &&
        product.lista_presentacion[0].producto_id
      ) {
        return product.lista_presentacion[0].producto_id
      } else {
        console.error('No valid product ID found for product:', product)
        return null
      }
    },

    getProductPrice(product) {
      // Si el combo ya está en productogeneral_precio, lo usamos directamente
      const generalPrice      = parseInt(product.productogeneral_precio)
      const presentationPrice = parseInt(product.lista_presentacion?.[0]?.producto_precio)
      return generalPrice || presentationPrice || 0
    },


    calculateTotalPrice(product, quantity, modificadores = []) {
      // 1. Precio base del producto (combo o no combo)
      const basePrice = this.getProductPrice(product)
      let total = basePrice

      // 2. Sumamos solamente modificadores (adicionales)
      modificadores.forEach((mod) => {
        const modPrice    = parseInt(mod.pedido_precio) || 0
        const modQuantity = parseInt(mod.modificadorseleccion_cantidad) || 0
        total += modPrice * modQuantity
      })

      return total * quantity
    },


    addProductToCart(product, quantity = 1, additionalItems = []) {
      const signatureObject = {
        productId: this.getProductId(product),
        additions: additionalItems.map(ad => ({
          group_id: ad.group_id,
          id: ad.id,
          quantity: ad.quantity
        }))
      }
      const signatureString = JSON.stringify(signatureObject)

      // Buscar si ya existe en el carrito
      const existingProductIndex = this.cart.findIndex(
        (item) => item.signature === signatureString
      )

      if (existingProductIndex !== -1) {
        // Ya existe: actualizar
        const existingItem = this.cart[existingProductIndex]
        existingItem.pedido_cantidad += quantity


        const recalculatedPrice = this.calculateTotalPrice(
          product,
          existingItem.pedido_cantidad,
          existingItem.modificadorseleccionList
        )
        existingItem.pedido_precio = recalculatedPrice


        this.cart[existingProductIndex] = existingItem
        console.log('Producto actualizado en el carrito:', existingItem)

      } else {
        // Nuevo producto
        const lista_productocombo = product.lista_productobase
          ? product.lista_productobase.map((comboItem) => ({
              pedido_productoid: parseInt(comboItem.producto_id),
              pedido_cantidad: parseInt(comboItem.productocombo_cantidad) || 1,
              pedido_precio: parseInt(comboItem.productocombo_precio) || 0,
              pedido_nombre: comboItem.producto_descripcion
            }))
          : []

        const modificadorseleccionList = additionalItems.map((ad) => ({
          modificadorseleccion_cantidad: parseInt(ad.quantity) || 1,
          pedido_precio: parseInt(ad.price) || 0,
          modificador_id: ad.group_id,
          modificadorseleccion_id: ad.id,
          modificador_nombre: ad.name,
          pedido_productoid: ad.parent_id,
        }))

        const pedidoCantidad = parseInt(quantity) || 1

        // Calculamos precio total (SIN sumar combo items manualmente)
        const totalPrice = this.calculateTotalPrice(
          product,
          pedidoCantidad,
          modificadorseleccionList
        )

        const pedido = {
          signature: signatureString,
          pedido_productoid: this.getProductId(product),
          pedido_cantidad: pedidoCantidad,
          pedido_precio: totalPrice,
          pedido_base_price: this.getProductPrice(product),
          pedido_escombo: product.productogeneral_escombo,
          productogeneral_urlimagen: product.productogeneral_urlimagen,
          pedido_nombre_producto: product.productogeneral_descripcion,
          lista_productocombo,
          modificadorseleccionList
        }

        this.cart.push(pedido)
        console.log('Producto agregado al carrito:', pedido)
      }
    },

    removeProductFromCart(signature) {
      const index = this.cart.findIndex(item => item.signature === signature)
      if (index !== -1) {
        this.cart.splice(index, 1)
        console.log(`Producto con signature ${signature} eliminado del carrito.`)
      } else {
        console.warn(`Producto con signature ${signature} no encontrado en el carrito.`)
      }
    },

    // Decrementar la cantidad de un producto
    decrementProduct(signature) {
      const itemIndex = this.cart.findIndex((item) => item.signature === signature)
      if (itemIndex === -1) return

      const currentItem = this.cart[itemIndex]
      if (currentItem.pedido_cantidad <= 1) {
        // Si bajamos a 0, lo sacamos del carrito
        this.cart.splice(itemIndex, 1)
        return
      }

      const oldQuantity = currentItem.pedido_cantidad
      currentItem.pedido_cantidad -= 1
      const parsedSignature = JSON.parse(currentItem.signature)
      let productToUse = this.currentProduct
      if (this.getProductId(productToUse) !== parsedSignature.productId) {
        console.warn('No coincide la ID del combo en currentProduct, precio podría no recalcularse bien.')
      }

      currentItem.pedido_precio = this.calculateTotalPrice(
        productToUse,
        currentItem.pedido_cantidad,
        currentItem.modificadorseleccionList
      )

      this.cart[itemIndex] = currentItem
    },

    incrementProduct(signature) {
      const itemIndex = this.cart.findIndex((item) => item.signature === signature)
      if (itemIndex === -1) return

      const currentItem = this.cart[itemIndex]
      const oldQuantity = currentItem.pedido_cantidad

      currentItem.pedido_cantidad += 1


      const parsedSignature = JSON.parse(currentItem.signature)
      let productToUse = this.currentProduct
      if (this.getProductId(productToUse) !== parsedSignature.productId) {
        console.warn('No coincide la ID en currentProduct, precio podría no recalcularse bien.')
      }

      currentItem.pedido_precio = this.calculateTotalPrice(
        productToUse,
        currentItem.pedido_cantidad,
        currentItem.modificadorseleccionList
      )

      this.cart[itemIndex] = currentItem
    },

    // Incrementar la cantidad de un adicional específico
    incrementAdditional(signature, additionalItem) {
      const itemIndex = this.cart.findIndex((item) => item.signature === signature)
      if (itemIndex === -1) return

      const currentItem = this.cart[itemIndex]

      // 1. Buscar el modificador
      const modIndex = currentItem.modificadorseleccionList.findIndex((mod) => mod === additionalItem)

      // 2. Ajustar la cantidad
      if (modIndex !== -1) {
        // Sumar 1
        currentItem.modificadorseleccionList[modIndex].modificadorseleccion_cantidad += 1
      } else {
        // Si no existe, lo creamos con 1
        currentItem.modificadorseleccionList.push({
          modificadorseleccion_cantidad: 1,
          pedido_precio: parseInt(additionalItem.price) || 0,
          modificador_id: additionalItem.group_id,
          modificadorseleccion_id: additionalItem.id,
          modificador_nombre: additionalItem.name,
          pedido_productoid: additionalItem.parent_id,
        })
      }

      // 3. Recalcular
      const parsedSignature = JSON.parse(currentItem.signature)
      let productToUse = this.currentProduct
      if (this.getProductId(productToUse) !== parsedSignature.productId) {
        console.warn('No coincide la ID en currentProduct, precio podría no recalcularse bien.')
      }

      currentItem.pedido_precio = this.calculateTotalPrice(
        productToUse,
        currentItem.pedido_cantidad,
        currentItem.modificadorseleccionList
      )

      this.cart[itemIndex] = currentItem
    },

    // Decrementar la cantidad de un adicional específico
    decrementAdditional(signature, additionalItem) {
      const itemIndex = this.cart.findIndex((item) => item.signature === signature)
      if (itemIndex === -1) return

      const currentItem = this.cart[itemIndex]

      const modIndex = currentItem.modificadorseleccionList.findIndex((mod) => mod === additionalItem)
      if (modIndex !== -1) {
        currentItem.modificadorseleccionList[modIndex].modificadorseleccion_cantidad -= 1

        if (currentItem.modificadorseleccionList[modIndex].modificadorseleccion_cantidad <= 0) {
          currentItem.modificadorseleccionList.splice(modIndex, 1)
        }
      }

      const parsedSignature = JSON.parse(currentItem.signature)
      let productToUse = this.currentProduct
      if (this.getProductId(productToUse) !== parsedSignature.productId) {
        console.warn('No coincide la ID en currentProduct, precio podría no recalcularse bien.')
      }

      currentItem.pedido_precio = this.calculateTotalPrice(
        productToUse,
        currentItem.pedido_cantidad,
        currentItem.modificadorseleccionList
      )

      this.cart[itemIndex] = currentItem
    },


  },
})
