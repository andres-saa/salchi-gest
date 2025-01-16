<template>
  <div style="display: flex; justify-content: center; align-items: center; min-height: 50vh;">
    <Button
      style="width: 20rem; height: 5rem; font-size: 1.5rem;"
      size="small"
      class="p-4 mx-4"
      severity="help"
      @click="exportCSV"
      label="Descargar reporte"
      icon="pi pi-download text-5xl"
    >
    </Button>

    <img
      src="/images/excel.png"
      style="position: fixed; z-index: -1; opacity: .2; width: 100vw; height: 40vh;filter: blur(3px); object-fit: cover;"
      alt=""
    />

    <OrderDialog />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReportesStore } from '@/store/reportes.js'
import OrderDialog from '@/components/orderDialog.vue'
import { URI } from '../../../service/conection'

// Store global
const store = useReportesStore()

/**
 * Realiza la consulta GET al endpoint de reporte de ventas,
 * luego realiza POST a la API de create-excel y finalmente
 * descarga el archivo Excel.
 */
 const exportCSV = async () => {
  try {
    if (store.selectedSites.length < 1) {
      await store.getSites()
    }

    const formattedStartDate = store.formatDate(store.dateRange.startDate)
    const formattedEndDate = store.formatDate(store.dateRange.endDate)

    if (formattedStartDate > formattedEndDate) {
      alert('La fecha de inicio debe ser anterior o igual a la fecha final.')
      return
    }

    const siteIds = store.selectedSites.map(site => site.site_id).join(',')

    const queryParams = new URLSearchParams({
      site_ids: siteIds,
      status: store.order_status,
      start_date: formattedStartDate,
      end_date: formattedEndDate
    })

    const url = `${URI}/sales_report?${queryParams.toString()}`
    store.setLoading(true, 'cargando reporte')

    // 1) Primer fetch: obtener la data (ya con la forma { "hojas": [...] })
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json() 
    // data = {
    //   hojas: [
    //     { hoja: 'BRETAÑA', title: ..., column_widths: {...}, data: [...] },
    //     ...
    //   ]
    // }

    // 2) Segundo fetch: mandar tal cual a create-excel
    // OJO: notar que AQUI enviamos data completo, SIN envolverlo de nuevo
    const excelResponse = await fetch('https://excel-creator.salchimonster.com/crear-excel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data.total_sales) // aquí va 'data'
    })
    if (!excelResponse.ok) {
      throw new Error(`HTTP error! status: ${excelResponse.status}`)
    }

    // 3) Descargar el archivo Excel
    const blob = await excelResponse.blob()
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.setAttribute('download', 'reporte_de_ventas.xlsx')
    document.body.appendChild(link)
    link.click()
    link.remove()
  } catch (error) {
    console.error('Fetch error:', error)
  } finally {
    store.setLoading(false, 'cargando reporte')
  }
}

</script>

<style scoped>
* {
  transition: all ease 0.3s;
}
</style>
