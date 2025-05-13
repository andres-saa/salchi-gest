import { defineStore } from "pinia"
// import { URI } from "../service/conection"

export const useChatStore = defineStore('chates', {
  persist: {
    key: 'clientes',
    storage: localStorage,
    paths: ['user', 'last_messages', 'sidebars', 'current_user']
  },

  state: () => ({
    last_messages: {
      "3226892988": [
        {
          user_id: 10,
          nombre: "andres saa",
          fecha_ultimo_mensaje: "12/04/2025",
          hora_ultimo_mensaje: "08:01 PM",
          abreviatura: "hoy",
          mensaje_truncado: "nuevo mensaje brother",
          wa_id: "573226892988"
        },
        {
          user_id: 11,
          nombre: "Kathe 😉",
          fecha_ultimo_mensaje: "10/04/2025",
          hora_ultimo_mensaje: "08:41 PM",
          abreviatura: "anteayer",
          mensaje_truncado: "Mi amor precioso",
          wa_id: "573225958424"
        }
      ]
    },

    sidebars: {
      "1": [
        {
          id: 0,
          nombre: "andres",
          wa_id: "573226892988",
          fecha_ultimo_mensaje: "12/04/2025",
          hora_ultimo_mensaje: "08:01 PM",
          abreviatura: "hoy",
          mensaje_truncado: "nuevo mensaje brother",
          unreaded: 0
        }
      ],
      "7": [
        {
          id: 0,
          nombre: "andres",
          wa_id: "573226892988",
          fecha_ultimo_mensaje: "12/04/2025",
          hora_ultimo_mensaje: "08:01 PM",
          abreviatura: "hoy",
          mensaje_truncado: "nuevo mensaje brother",
          unreaded: 0
        }
      ]
    },

    current_user: {
      id: 0,
      nombre: "andres",
      wa_id: "573226892988",
      fecha_ultimo_mensaje: "12/04/2025",
      hora_ultimo_mensaje: "08:01 PM",
      abreviatura: "hoy",
      mensaje_truncado: "nuevo mensaje brother",
      unreaded: 0
    },

    sendig: false
  }),

  getters: {
    fucion: () => 0
  },

  actions: {
    /** Ejemplo anterior (sin cambios) */
    async func() {
      return func
    },

    /**
     * Marca como leídos (unreaded = 0) los mensajes de un chat
     * dentro de un sidebar concreto.
     *
     * @param {string|number} site_id     ID del sitio/restaurante
     * @param {string|number} sidebar_id  Identificador del chat (wa_id)
     */
    resetUnreadForSidebar(user_id, sidebar_id) {



        const list = this.sidebars[sidebar_id]

        const idx = list.findIndex(u => u.user_id == user_id)


        if (idx == -1) {
            return
        }

        list[idx].unreaded = 0

        
      }
    
  }
})
