<template>

          <!-- Encabezado compacto -->
          <header class="topbar" style=" background:
      radial-gradient(1200px 500px at 10% -10%, rgba(0, 4, 255, 0.1), transparent 60%),
      radial-gradient(1200px 500px at 90% -10%, rgba(0, 255, 170, 0.1), transparent 60%),
      linear-gradient(180deg, #f8fafc, #f9fafb);">
        <div class="topbar-text" style="padding: 1rem;">
          <h1 class="title" >PQRS</h1>
          <p  class="blurb">peticiones, quejas, reclamos o sugerencias.</p>
        </div>
      </header>
  
    <!-- ===== DIALOGO HISTORIAL ===== -->
    <Dialog
      class="mx-2"
      v-model:visible="showHistoryDialog"
      modal
      :header="`Historial de la PQR · ID ${currentOrderHistory?.pqr_request_id ?? ''}`"
      :style="{ width: '40rem' }"
    >
      <Timeline :value="currentOrderHistory?.status_history || []">
        <template #opposite="{ item }">
          <div style="display:flex;flex-direction:column;">
            <p class="p-text-secondary m-0 p-0" style="min-width:max-content">
              {{ splitDate(item?.timestamp).fecha }}
            </p>
            <p class="p-text-secondary m-0 p-0" style="min-width:max-content">
              {{ splitDate(item?.timestamp).hora }}
            </p>
          </div>
        </template>
  
        <template #content="{ item }">
          <Tag :style="`background-color:${item?.color || '#64748b'}`">
            <p class="m-0"><b>{{ item?.status || '—' }}</b></p>
          </Tag>
  
          <p v-if="item?.responsible_name" class="m-0" style="text-transform:capitalize">
            <b>Responsable:</b> {{ (item?.responsible_name || '').toLowerCase() }}
          </p>
  
          <p class="m-0" v-if="item?.value != null">
            Le costó a la empresa <b>{{ formatToColombianPeso(item.value) }}</b>
          </p>
  
          <p class="m-0" v-if="item?.order_id">Orden entregada <b>{{ item.order_id }}</b></p>
  
          <p v-if="item?.notes">
            <b>Notas</b> {{ item.notes }}
          </p>
          <br />
        </template>
      </Timeline>
    </Dialog>
  
    <!-- ===== DIALOGO GESTION ===== -->
    <Dialog
      class="mx-2"
      v-model:visible="showPqrGest"
      modal
      :header="`Gestión de la PQR · ID ${currentPqrGest?.pqr_request_id ?? ''}`"
      :style="{ width: '50rem' }"
    >
      <div style="display:flex;flex-direction:column;">
        <h6 class="mx-0 my-0"><b>TIPO</b></h6>
        <p style="display:flex;align-items:center;gap:1rem">{{ currentPqrGest?.request_type }}</p>
  
        <h6 class="mx-0 my-0"><b>CANAL</b></h6>
        <p class="m-0 p-0" style="display:flex;align-items:center;gap:1rem">{{ currentPqrGest?.channel }}</p>
  
        <h6 class="mt-3 mb-2"><b>CONTEXTO</b></h6>
        <div style="display:flex;gap:1rem">
          <div
            style="width:.4rem;max-width:.4rem;border-radius:45rem"
            :style="`background-color:${currentPqrGest?.channel_color || '#64748b'}`"
          />
          <div style="display:flex;flex-direction:column">
            <p>{{ currentPqrGest?.request_content }}</p>
          </div>
        </div>
  
        <h6 class="mt-3 mb-3" v-if="currentPqrGest?.user_name || currentPqrGest?.user_phone">
          <b>DATOS DEL CLIENTE</b>
        </h6>
        <div style="display:flex;gap:1rem">
          <div
            style="width:.4rem;max-width:.4rem;border-radius:45rem"
            :style="`background-color:${currentPqrGest?.channel_color || '#64748b'}`"
          />
          <div style="display:flex;flex-direction:column">
            <span v-if="currentPqrGest?.user_name"><b>Nombre: </b>{{ currentPqrGest.user_name }}</span>
            <span v-if="currentPqrGest?.user_phone"><b>Teléfono: </b>{{ currentPqrGest.user_phone }}</span>
            <span v-if="currentPqrGest?.user_address"><b>Dirección: </b>{{ currentPqrGest.user_address }}</span>
            <span v-if="currentPqrGest?.order_id"><b>Orden: </b>{{ currentPqrGest.order_id }}</span>
          </div>
        </div>
  
        <h6 class="mt-3"><b>HISTORIAL</b></h6>
        <div style="display:flex;gap:1rem">
          <div
            style="width:.4rem;max-width:.4rem;border-radius:45rem"
            :style="`background-color:${(currentPqrGest?.status_history?.[0]?.color) || '#64748b'}`"
          />
          <div style="display:flex;flex-direction:column">
            <Timeline :value="currentPqrGest?.status_history || []">
              <template #opposite="{ item }">
                <div style="display:flex;flex-direction:column;">
                  <p class="p-text-secondary m-0 p-0" style="min-width:max-content">
                    {{ splitDate(item?.timestamp).fecha }}
                  </p>
                  <p class="p-text-secondary m-0 p-0" style="min-width:max-content">
                    {{ splitDate(item?.timestamp).hora }}
                  </p>
                </div>
              </template>
  
              <template #content="{ item }">
                <Tag :style="`background-color:${item?.color || '#64748b'}`">
                  <p class="m-0"><b>{{ item?.status || '—' }}</b></p>
                </Tag>
  
                <p v-if="item?.responsible_name" class="m-0" style="text-transform:capitalize">
                  <b>Responsable:</b> {{ (item?.responsible_name || '').toLowerCase() }}
                </p>
  
                <p class="m-0" v-if="item?.value != null">
                  Le costó a la empresa <b>{{ formatToColombianPeso(item.value) }}</b>
                </p>
  
                <p class="m-0" v-if="item?.order_id">Orden entregada <b>{{ item.order_id }}</b></p>
  
                <p v-if="item?.notes"><b>Notas</b> {{ item.notes }}</p>
                <br />
              </template>
            </Timeline>
          </div>
        </div>
  
        <h6 class="mt-3"><b>¿Cómo desea proceder?</b></h6>
  
        <Dropdown
          v-model="selecte_status_update"
          :options="allStatus.filter(d => d.id !== 2)"
          optionLabel="name"
          optionValue="id"
          placeholder="Selecciona un estado"
          style="max-width:20rem"
        />
  
        <div v-if="selecte_status_update" class="mt-3" style="display:flex;flex-direction:column;gap:1rem">
          <div style="display:flex;justify-content:space-between" v-if="requiresCompensation">
            <h6 class="m-0">¿Se dio cortesía del 100%?</h6>
            <Checkbox binary v-model="costo" />
          </div>
  
          <div style="display:flex;justify-content:space-between" v-if="requiresCompensation">
            <h6 class="m-0">¿Se entregó bono de descuento?</h6>
            <Checkbox binary v-model="order" />
          </div>
  
          <div v-if="requiresCompensation && order">
            <h6 class="m-0 my-1">Porcentaje de descuento</h6>
            <InputNumber v-model="descuento" :min="0" :max="100" suffix=" %" style="width:100%" />
          </div>
  
          <div v-if="requiresCompensation && (costo || order)">
            <h6 class="m-0 my-1">Valor de la orden</h6>
            <InputNumber v-model="costovalue" mode="currency" currency="COP" locale="es-CO" :min="0" style="width:100%" />
          </div>
  
          <div v-if="requiresCompensation && (costo || order)">
            <h6 class="m-0 my-1">ID de la orden</h6>
            <InputText v-model="inputOrder" style="width:100%" />
          </div>
  
          <div>
            <h6 class="m-0 my-1">Detalles</h6>
            <Textarea v-model="notes" rows="5" style="resize:none;width:100%" />
          </div>
  
          <h6 style="background-color:#ff00002e" class="p-3">
            Recuerde que está firmando como <b>{{ login.rawUserData.name }}</b>. No preste sus credenciales.
          </h6>
        </div>
      </div>
  
      <template #footer>
        <div style="display:flex;justify-content:end;gap:.5rem">
          <Button label="Cancelar" text @click="showPqrGest=false" />
          <Button label="Enviar" severity="help" :disabled="!canSubmit" @click="sendPqrUpdate" />
        </div>
      </template>
    </Dialog>
  
    <!-- ===== CONTENIDO PRINCIPAL ===== -->
    <div>
      <!-- Barra de estados -->
      <nav class="nav_bar shadow-2 p-0 my-0 mx-3" style="position: sticky; top: 3rem; max-width: 96vw; left: 0; background-color: white; z-index: 99;">
        <ul class="nav_bar--buttons p-0 m-1">
          <li
            v-for="button in nav_buttons"
            :key="button.id"
            style="display:flex;align-items:center"
          >
            <Tag :style="`background-color:${button.color}`" style="height:1.3rem; aspect-ratio:1/1; border-radius:50%;" />
            <Button
              @click="() => { active_button_nav = button; login.currentSection_pqr = options[0] }"
              class="nav_bar--buttons-button p-2"
              :class="button.id === active_button_nav.id ? 'nav_bar--buttons-button-selected' : ''"
              :label="button.name"
            />
          </li>
  
          <!-- Botón Filtradas -->
          <li style="display:flex;align-items:center">
            <Tag :style="`background-color:#c55a11`" style="height:1.3rem; aspect-ratio:1/1; border-radius:50%;" />
            <Button
              @click="() => {
                active_button_nav = { id: 60, name: 'Filtradas', color: '#c55a11', exist: true };
                login.currentSection_pqr = options[0];
              }"
              class="nav_bar--buttons-button p-2"
              :class="60 === active_button_nav.id ? 'nav_bar--buttons-button-selected' : ''"
              label="Filtradas"
            />
          </li>
        </ul>
      </nav>
  
      <!-- Controles de fecha / sedes / modo / acciones -->
      <div style="display:flex; justify-content:center; flex-direction:column; width:100%; max-width:96vw; align-items:center; gap:1rem;" class="mt-0 px-1">
        <div
          class="my-0 px-0"
          v-if="login.currentSection_pqr.x !== 0"
          :style="login.currentSection_pqr.x !== 0 ? 'opacity:1' : 'opacity:0'"
          style="display:flex; transition: all ease .5s; align-items:end; gap:1rem"
        >
          <h6><b>Desde</b></h6>
          <Calendar style="max-width:7.5rem" v-model="temp_start_date" dateFormat="dd-mm-yy" />
  
          <h6><b>Hasta</b></h6>
          <Calendar style="max-width:7.5rem" :disabled="!temp_start_date" v-model="temp_end_data" dateFormat="dd-mm-yy" />
  
          <template v-if="login.currentSection_pqr.x === -200">
            <h6><b>Sedes</b></h6>
            <MultiSelect
              style="max-width:17rem; min-width:15rem"
              :options="sites.filter(s => s.show_on_web || s.site_id === 17 || s.site_id === 18)"
              optionLabel="site_name"
              v-model="selected_sites"
              placeholder="SEDES"
            />
          </template>
  
          <Button
            style="min-width:max-content"
            :disabled="!temp_start_date || !temp_end_data"
            @click="obtain_pqr_report(temp_start_date, temp_end_data)"
            severity="help"
            label="Buscar"
            icon="pi pi-search"
          />
        </div>
  
        <div style="display:flex;align-items:center;gap:1rem;">
          <h6 class="m-0"><b>MODOS</b></h6>
          <div>
            <Dropdown style="width:10rem" optionLabel="name" placeholder="Avanzado" v-model="login.currentSection_pqr" :options="options" />
          </div>
  
          <Button @click="store.visible_add_pqr = true" icon="pi pi-plus" label="Nueva PQR" severity="help"></Button>
          <div style="text-align:right; margin:1rem;">
            <Button
              @click="downloadPQRExcel"
              label="Descargar PQRs como Excel"
              icon="pi pi-file-excel"
              severity="success"
              class="p-button-sm"
            />
          </div>
        </div>
      </div>
  
      <div class="px-0 mt-2" style="display:flex; width:100%; align-items:center; justify-content:end; gap:1rem; max-width:96vw;"></div>
  
      <!-- ===== SECCIONES DESLIZABLES ===== -->
      <div class="scroll-container" style="margin:0 auto;">
        <div style="display:flex; max-width:96vw; overflow:hidden; align-items:start; margin:0 auto;">
          <!-- ===== LISTADO PRINCIPAL ===== -->
          <DataTable
            :style="`transform:translateX(${ login.currentSection_pqr.x }%);transition:.5s all ease;`"
            :paginator="true"
            :rows="15"
            style="width:100%"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} solicitudes"
            :rowsPerPageOptions="[5,10,25,100]"
            scrollable
            showGridlines
            stripedRows
            class="col-12 p-2"
            :value="tableRows"
            tableStyle="min-width:50rem"
            :filters="filters"
          >
            <template #header>
              <div class="grid p-3" style="align-items:center; justify-content:space-between; display:flex; gap:1rem;">
                <h4 class="px-2">
                  <i class="fa-regular fa-bars-progress"></i>
                  <b style="text-transform:uppercase">PQRS <b>{{ route.params.section }}</b></b>
                </h4>
                <div style="display:flex;gap:1rem">
                  <InputText v-model="filters['global'].value" placeholder="Buscar Solicitud..." />
                </div>
              </div>
            </template>
  
            <!-- Columnas dinámicas -->
            <Column
              v-for="column in dataColumns"
              :key="column.columnValue"
              :field="column.columnValue"
              :header="column.columnName"
              :style="`min-width:${column.size}`"
            >
              <template #body="{ data: row }">
                <h6 v-if="column.columnType === 'date'" class="m-0 p-0" style="min-width:max-content">
                  {{ (row[column.columnValue] || '---------').split('-').reverse().join('-') }}
                </h6>
  
                <h6 v-else-if="column.columnType === 'responsible_name'" class="m-0 p-0" style="min-width:max-content">
                  {{ row?.status_history?.[0]?.responsible_name || 'No se ha interactuado' }}
                </h6>
  
                <h6 v-else-if="column.columnType === 'max-content'" class="m-0 p-0" style="min-width:max-content">
                  {{ row[column.columnValue] || '---------' }}
                </h6>
  
                <h6 v-else-if="column.columnType === 'order_id'" class="m-0 p-0" style="text-align:justify;min-width:max-content">
                  {{ row[column.columnValue] || '---------' }}
                </h6>
  
                <h6 v-else-if="column.columnType === 'other'" class="m-0 p-0" style="text-align:justify">
                  {{ row[column.columnValue] || '---------' }}
                </h6>
  
                <h6 v-else-if="column.columnType === 'rating'" class="m-0 p-0">
                  <Rating v-if="row[column.columnValue] > 0" :cancel="false" readonly v-model="row[column.columnValue]" />
                  <span v-else>------------</span>
                </h6>
  
                <h6 v-else-if="column.columnType === 'money'" class="m-0 p-0" style="min-width:max-content">
                  {{ row[column.columnValue] != null ? formatToColombianPeso(row[column.columnValue]) : '---------' }}
                </h6>
  
                <!-- Status -->
                <div v-else-if="column.columnValue === 'current_status'" class="p-2" style="display:flex;gap:.1rem;flex-direction:column;align-items:center;">
                  <Tag style="color:white;text-align:center" :style="`background-color:${row?.current_status?.color || '#64748b'}`">
                    {{ row?.current_status?.status || '---------' }}
                  </Tag>
                  <b>{{ row?.current_status?.timestamp || '---------' }}</b>
                </div>
  
                <!-- Canal -->
                <div v-else-if="column.columnValue === 'channel'" class="p-2" style="display:flex;gap:.1rem;flex-direction:column;align-items:center;">
                  <Tag style="color:white;text-align:center" :style="`background-color:${row?.channel_color || '#64748b'}`">
                    {{ row?.channel || '---------' }}
                  </Tag>
                </div>
  
                <!-- Clasificación -->
                <div v-else-if="column.columnValue === 'tag_name'" class="p-2" style="display:flex;gap:.1rem;flex-direction:column;align-items:center;">
                  <Tag style="color:white;text-align:center" :style="`background-color:${row?.tag_color || '#64748b'}`">
                    {{ row?.tag_name || '---------' }}
                  </Tag>
                </div>
  
                <!-- Restaurante -->
                <div v-else-if="column.columnValue === 'restaurant'" class="p-2" style="display:flex;gap:.1rem;flex-direction:column;align-items:start;">
                  <Tag style="color:white" :style="`background-color:${row?.restaurant_color || '#64748b'}`">
                    {{ row?.restaurant || '---------' }}
                  </Tag>
                </div>
  
                <span v-else>{{ row[column.columnValue] ?? '---------' }}</span>
              </template>
            </Column>
  
            <!-- Acciones -->
            <Column frozen alignFrozen="right" header="Interactuar" class="my-0 py-0 px-0 mx-0">
              <template #body="{ data: row }">
                <div style="display:flex;gap:.4rem;justify-content:center" class="px-2">
                  <Button @click="chargePqr(row)" label="Gestionar" severity="help" icon="pi pi-check p-0" class="my-0 py-2" />
                </div>
              </template>
            </Column>
          </DataTable>
  
          <!-- ===== REPORTES POR ESTADO ===== -->
          <div :style="`transform:translateX(${ login.currentSection_pqr.x }%);transition:.5s all ease;`" style="min-width:100%; overflow:auto; margin:0 auto; height:min-content;">
            <div style="max-width:1366px;" class="m-auto my-6">
              <h4 class="m-0 px-0">
                <b>
                  REPORTE POR ESTADO {{ formatearFechaLocal(startDate).split('-').reverse().join('-') }}
                  <i class="pi pi-arrow-right"></i>
                  {{ formatearFechaLocal(endDate).split('-').reverse().join('-') }}
                </b>
              </h4>
  
              <DataTable
                :rows="15"
                style="max-width:96vw; box-shadow:0 0 1rem #00000030; border-radius:.5rem;"
                scrollable
                showGridlines
                stripedRows
                class="col-12 m-auto my-4"
                :value="report"
                tableStyle="min-width:50rem"
                :filters="filters"
              >
                <Column
                  v-for="column in report_keys"
                  :key="column"
                  class="p-0 py-1 text-center"
                  style="max-width:min-content; text-transform:uppercase;"
                  :header="column"
                >
                  <template #body="{ data }">
                    <div>
                      <h6
                        @click="setFilters(data[column]['pqrs'])"
                        class="m-0 py-1 px-2 text-xl valor2"
                        v-if="data.sede?.valor === 'total'"
                        style="text-align:center; background-color:var(--blue-100);"
                        :style="column !== 'sede' ? 'justify-content:center;' : 'justify-content:start;'"
                      >
                        <b style="cursor:pointer">{{ data[column]['valor'] }}</b>
                      </h6>
  
                      <h6
                        @click="setFilters(data[column]['pqrs'])"
                        v-else
                        class="m-0 py-1 px-2 valor"
                        style="justify-content:center; cursor:pointer;"
                        :style="column !== 'sede' ? 'justify-content:start;' : 'justify-content:start;'"
                      >
                        {{ data[column]['valor'] }}
                      </h6>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>
  
            <!-- ===== REPORTES POR RESPONSABLE ===== -->
            <div style="max-width:1366px;" class="mx-auto my-6">
              <h4 class="m-0 px-0">
                <b>
                  REPORTE POR RESPONSABLES {{ formatearFechaLocal(startDate).split('-').reverse().join('-') }}
                  <i class="pi pi-arrow-right"></i>
                  {{ formatearFechaLocal(endDate).split('-').reverse().join('-') }}
                </b>
              </h4>
  
              <DataTable
                :rows="15"
                style="max-width:96vw; box-shadow:0 0 1rem #00000030; border-radius:.5rem;"
                scrollable
                showGridlines
                stripedRows
                class="col-12 m-auto my-4"
                :value="report_responsible"
                tableStyle="min-width:50rem"
                :filters="filters"
              >
                <Column
                  v-for="column in report_keys_responsible"
                  :key="column"
                  class="p-1 text-center"
                  style="max-width:min-content; text-transform:uppercase;"
                  :header="column"
                >
                  <template #body="{ data }">
                    <div>
                      <h6
                        @click="setFilters(data[column]['pqrs'])"
                        class="m-0 py-1 px-2 text-xl valor2"
                        v-if="data.responsible_name === 'total'"
                        style="display:flex; text-align:center; background-color:var(--blue-100);"
                        :style="column !== 'responsible_name' ? 'justify-content:center;' : 'justify-content:start;'"
                      >
                        <b>{{ data[column]['valor'] }}</b>
                      </h6>
  
                      <h6
                        @click="setFilters(data[column]['pqrs'])"
                        class="m-0 py-1 px-2 valor"
                        v-else-if="data.responsible_name === 'pendiente'"
                        style="display:flex; text-align:center; color:var(--red-900); background-color:var(--red-100);"
                        :style="column !== 'responsible_name' ? 'justify-content:center;' : 'justify-content:start;'"
                      >
                        <b>{{ data[column]['valor'] }}</b>
                      </h6>
  
                      <h6
                        @click="setFilters(data[column]['pqrs'])"
                        v-else
                        class="m-0 py-1 px-2 valor"
                        style="display:flex; text-align:start;"
                        :style="column !== 'responsible_name' ? 'justify-content:center;' : 'justify-content:start;'"
                      >
                        {{ data[column]['valor'] }}
                      </h6>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>
  
            <!-- ===== REPORTES POR TIPO ===== -->
            <div style="max-width:1366px;" class="mx-auto my-3">
              <h4 class="m-0 px-0">
                <b>
                  REPORTE POR TIPOS {{ formatearFechaLocal(startDate).split('-').reverse().join('-') }}
                  <i class="pi pi-arrow-right"></i>
                  {{ formatearFechaLocal(endDate).split('-').reverse().join('-') }}
                </b>
              </h4>
  
              <DataTable
                :rows="15"
                style="max-width:96vw; box-shadow:0 0 1rem #00000030; border-radius:.2rem; background-color:white;"
                scrollable
                showGridlines
                stripedRows
                class="col-12 m-auto my-4"
                :value="report_type"
                tableStyle="min-width:50rem"
                :filters="filters"
              >
                <Column
                  v-for="column in report_keys_type"
                  :key="column"
                  class="p-0 text-center"
                  style="max-width:min-content; text-transform:uppercase;"
                  :header="column"
                >
                  <template #body="{ data }">
                    <div>
                      <h6
                        @click="setFilters(data[column]['pqrs'])"
                        class="m-0 py-1 px-2 text-xl valor2"
                        v-if="data.sede?.valor === 'total'"
                        style="text-align:center; background-color:var(--blue-100);"
                        :style="column !== 'sede' ? 'justify-content:center;' : 'justify-content:start;'"
                      >
                        <b style="cursor:pointer">{{ data[column]['valor'] }}</b>
                      </h6>
  
                      <h6
                        @click="setFilters(data[column]['pqrs'])"
                        v-else
                        class="m-0 py-1 px-2 valor"
                        style="justify-content:center; cursor:pointer;"
                        :style="column !== 'sede' ? 'justify-content:start;' : 'justify-content:start;'"
                      >
                        {{ data[column]['valor'] }}
                      </h6>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>
          </div>
  
          <!-- ===== GRAFICAS ===== -->
          <div class="p-3" :style="`transform:translateX(${ login.currentSection_pqr.x }%);transition:.5s all ease;`" style="min-width:100%; overflow:auto; height:min-content; margin:0 auto;">
            <div style="display:flex; width:100%; margin:0 auto; max-width:1200px; gap:1rem; align-items:center;" class="my-4">
              <h6 class="m-0"><b>Tipo de gráfica</b></h6>
              <Dropdown v-model="type_graph" :options="tipos_graficas" optionLabel="name" />
            </div>
  
            <Chart :type="type_graph.value" :data="data_graphics" class="h-[10rem] p-2 h-50"
                   style="width:100%; margin:0 auto; max-width:1200px; box-shadow:0 0 10px rgba(0,0,0,.2); border-radius:.5rem;" />
          </div>
        </div>
      </div>
  
      <pqrUser @reload="update()" />
    </div>
  </template>
  
  <script setup>
  import { onBeforeMount, onMounted, ref, watch, computed } from 'vue'
  import { pqrsService } from '../../../service/pqrs/pqrsService'
  import router from '../../../router'
  import { useRoute } from 'vue-router'
  import { fetchService } from '../../../service/utils/fetchService'
  import { URI } from '../../../service/conection'
  import { FilterMatchMode } from 'primevue/api'
  import { loginStore } from '../../../store/user'
  import { formatToColombianPeso } from '../../../service/valoresReactivosCompartidos'
  import { saveAs } from 'file-saver'
  import axios from 'axios'
  import { PathService } from '@/service/pathService'
  import pqrUser from './pqrUser.vue'
  
  /* ===== Estado base ===== */
  const filtros = ref([])
  
      
  import { useReportesStore } from '@/store/reportes';
        const store = useReportesStore()
    

  const tipos_graficas = [
    { name: 'Líneas', value: 'line' },
    { name: 'Barras', value: 'bar' }
  ]
  
  const sites = ref([])
  const selected_sites = ref([])
  const type_graph = ref({ name: 'Barras', value: 'bar' })
  const data_graphics = ref([])
  
  const notes = ref('')
  const endDate = ref()
  const startDate = ref()
  const temp_start_date = ref()
  const temp_end_data = ref()
  
  const report = ref([])
  const report_keys = ref([])
  
  const report_type = ref([])
  const report_keys_type = ref([])
  
  const report_responsible = ref([])
  const report_keys_responsible = ref([])
  
  const options = ref([
    { name: 'Basico', x: 0 },
    { name: 'Reportes Generales', x: -100 },
    { name: 'Reportes Graficados', x: -200 }
  ])
  
  const inputOrder = ref()
  const isActive = PathService.isActiveRoute
  const route = useRoute()
  
  const nav_buttons = ref([])
  
  const active_button_nav = ref({
    id: 2,
    name: 'Generada',
    description: 'Estado inicial de la pqr',
    exist: true,
    color: '#3498DB'
  })
  
  const login = loginStore()
  const allStatus = ref([])
  const selecte_status_update = ref(null)
  
  const currentOrderHistory = ref([])
  const currentPqrGest = ref([])
  const showHistoryDialog = ref(false)
  const showPqrGest = ref(false)
  
  const filters = ref(null)
  const pqrsUser = ref([{}])
  
  const costo = ref(false)       // cortesía 100%
  const costovalue = ref(null)   // valor de la orden
  const order = ref(false)       // bono
  const descuento = ref(null)    // porcentaje descuento
  
  /* ===== Helpers y computed ===== */
  
  // dividir timestamp "dd-mm-yyyy HH:mm ..." en partes
  const splitDate = (ts) => {
    if (!ts || typeof ts !== 'string') return { fecha: '—', hora: '—' }
    const [fecha, ...rest] = ts.split(' ')
    return { fecha: fecha || '—', hora: rest.join(' ') || '—' }
  }
  
  // estados que implican compensación
  const requiresCompensation = computed(() => [4, 7].includes(Number(selecte_status_update.value)))
  
  // habilitar botón Enviar
  const canSubmit = computed(() => {
    if (selecte_status_update.value == null) return false
    if (requiresCompensation.value) {
      // sin cortesía ni bono: permitido con solo estado y notas (opcionales)
      if (!costo.value && !order.value) return true
      // si hay cortesía o bono, exigir valor e id de orden
      if ((costo.value || order.value) && (!costovalue.value || !inputOrder.value)) return false
      // si hay bono, exigir porcentaje válido
      if (order.value && (descuento.value == null || descuento.value < 0 || descuento.value > 100)) return false
    }
    return true
  })
  
  // fuente única para la tabla
  const tableRows = computed(() => {
    const base = pqrsUser.value ?? []
    if (active_button_nav?.value?.name === 'Filtradas') {
      return base.filter(p => filtros.value.includes(p.pqr_request_id))
    }
    return base.filter(p => p?.current_status?.status === active_button_nav?.value?.name)
  })
  
  /* ===== Excel ===== */
  const prepareExcelData = () => {
    if (!pqrsUser.value || pqrsUser.value.length === 0) {
      alert('No hay PQRs disponibles para descargar.')
      return null
    }
  
    const formatDate = (date) => {
      const d = new Date(date)
      if (isNaN(d)) return null
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }
  
    const startDateFormatted = formatDate(temp_start_date.value)
    const endDateFormatted = formatDate(temp_end_data.value)
    if (!startDateFormatted || !endDateFormatted) {
      alert('Selecciona un rango de fechas válido.')
      return null
    }
  
    const filteredByDatePqrs = pqrsUser.value.filter(pqr => {
      const ts = pqr?.current_status?.timestamp
      if (!ts) return false
      const [day, month, year] = ts.split(' ')[0]?.split('-') || []
      if (!year) return false
      const pqrDateFormatted = `${year}-${month}-${day}`
      return pqrDateFormatted >= startDateFormatted && pqrDateFormatted <= endDateFormatted
    })
  
    if (filteredByDatePqrs.length === 0) {
      alert('No hay PQRs en el rango de fechas seleccionado.')
      return null
    }
  
    const filteredPqrs = filteredByDatePqrs.filter(pqr => pqr.tag_name && pqr.tag_name.toUpperCase() !== 'CORTESÍAS')
  
    const groupedBySede = filteredPqrs.reduce((acc, pqr) => {
      const sede = pqr.site_name || 'Sin Sede'
      if (!acc[sede]) acc[sede] = []
      acc[sede].push(pqr)
      return acc
    }, {})
  
    const hojas = Object.keys(groupedBySede).map(sede => ({
      hoja: sede,
      title: `Reporte de PQRs - Sede: ${sede}`,
      column_widths: {
        ID: 15,
        Clasificacion: 30,
        Descripción: 60,
        Fecha: 15,
        Hora: 10,
        Estado: 45,
        'Observación del estado': 50,
        Responsable: 50
      },
      data: groupedBySede[sede]
        .sort((a, b) => (a.tag_name || '').localeCompare(b.tag_name || ''))
        .map(pqr => {
          let fecha = '--------'
          let hora = '--------'
          if (pqr?.current_status?.timestamp) {
            const parts = pqr.current_status.timestamp.split(' ')
            if (parts.length >= 2) {
              fecha = parts[0]
              hora = parts.slice(1).join(' ')
            } else {
              fecha = pqr.current_status.timestamp
            }
          }
          return {
            ID: pqr.pqr_request_id,
            Clasificacion: pqr.tag_name || 'Sin Clasificación',
            Descripción: pqr.request_content,
            Fecha: fecha,
            Hora: hora,
            Estado: pqr.current_status?.status || 'N/A',
            'Observación del estado': pqr.current_status?.notes || '--------',
            Responsable: pqr.current_status?.responsible_name?.toUpperCase() || '--------'
          }
        })
    }))
  
    return { hojas }
  }
  
  const downloadPQRExcel = async () => {
    try {
      const payload = prepareExcelData()
      if (!payload) return
      const response = await axios.post('https://excel-creator.salchimonster.com/crear-excel', payload, {
        responseType: 'blob'
      })
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      saveAs(blob, 'Reporte_PQRs.xlsx')
    } catch (error) {
      console.error('Error al descargar el Excel:', error)
      alert('Ocurrió un error al intentar descargar el archivo Excel.')
    }
  }
  
  /* ===== Utilidades ===== */
  function formatearFechaLocal(fechaInput) {
    const fecha = new Date(fechaInput)
    if (isNaN(fecha)) return '—'
    const year = fecha.getFullYear()
    const month = String(fecha.getMonth() + 1).padStart(2, '0')
    const day = String(fecha.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  
  const isValidRange = (start, end) => start instanceof Date && end instanceof Date && !isNaN(start) && !isNaN(end)
  
  /* ===== Acciones ===== */
  const chargeHistory = async (historial) => {
    showHistoryDialog.value = true
    currentOrderHistory.value = historial
  }
  
  const chargePqr = async (historial) => {
    showPqrGest.value = true
    currentPqrGest.value = historial
  }
  
  const initFilters = () => {
    filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    }
  }
  
  onBeforeMount(() => {
    initFilters()
    endDate.value = new Date()
    const fifteenDaysAgo = new Date()
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15)
    startDate.value = fifteenDaysAgo
    temp_start_date.value = startDate.value
    temp_end_data.value = endDate.value
  })
  
  const update = async () => {
    pqrsUser.value = await fetchService.get(`${URI}/get-all-pqrs`)
    const status = await fetchService.get(`${URI}/get-all-pqrs-status`)
    allStatus.value = status
    nav_buttons.value = status
  }
  
  const deletePqrs = async (id) => {
    await pqrsService.deletePqrs(id)
    update()
  }
  
  const obtain_pqr_report = async (start, end) => {
    if (!start || !end) {
      alert('Por favor, proporciona tanto la fecha de inicio como la fecha de fin.')
      return
    }
    await getReports(start, end)
    startDate.value = start
    endDate.value = end
  }
  
  const getReports = async (starD, endD) => {
    if (!isValidRange(starD, endD)) return
  
    const start = formatearFechaLocal(starD)
    const end = formatearFechaLocal(endD)
  
    const reports = await fetchService.get(`${URI}/get-pqrs-by-date-range/${start}/${end}`)
    const reports_types = await fetchService.get(`${URI}/get-pqrs-by-date-range-types/${start}/${end}`)
    const reports_types_responsible = await fetchService.get(`${URI}/get_pqrs_by_responsible_and_state/${start}/${end}`)
  
    report.value = reports || []
    report_keys.value = reports?.[0] ? Object.keys(reports[0]) : []
  
    report_type.value = reports_types || []
    report_keys_type.value = reports_types?.[0] ? Object.keys(reports_types[0]) : []
  
    report_responsible.value = reports_types_responsible || []
    report_keys_responsible.value = reports_types_responsible?.[0] ? Object.keys(reports_types_responsible[0]) : []
  
    data_graphics.value = await fetchService.post(
      `${URI}/get_daily_pqrs_report/${start}/${end}`,
      { ids: selected_sites.value.map(s => s.site_id) }
    )
  }
  
  onMounted(async () => {
    await update()
    const allSites = await fetchService.get(`${URI}/sites`)
    sites.value = Array.isArray(allSites) ? allSites : []
    await getReports(startDate.value, endDate.value)
  })
  
  watch(selecte_status_update, () => {
    resetPqrForm()
  })
  
  const resetPqrForm = () => {
    costovalue.value = null
    notes.value = ''
    inputOrder.value = null
    costo.value = false
    order.value = false
    descuento.value = null
  }
  
  const sendPqrUpdate = async () => {
    // Calcular el valor a enviar según cortesía/bono
    let valueToSend = null
    if (requiresCompensation.value) {
      if (costo.value) {
        valueToSend = 0
      } else if (order.value && costovalue.value != null) {
        const base = Number(costovalue.value) || 0
        const pct = Number(descuento.value) || 0
        valueToSend = Math.max(0, base - (base * pct / 100))
      } else if (!order.value && costovalue.value != null) {
        valueToSend = Number(costovalue.value)
      }
    }
  
    const dataToSend = {
      pqr_request_id: currentPqrGest.value.pqr_request_id,
      status_id: selecte_status_update.value,
      responsible_id: login.rawUserData.id,
      value: valueToSend,
      notes: notes.value,
      order_id: inputOrder.value || null
    }
  
    try {
      await fetchService.post(`${URI}/change-pqr-status`, dataToSend)
      await update()
      showPqrGest.value = false
      resetPqrForm()
    } catch (error) {
      console.error('Error al enviar la actualización de la PQR:', error)
    }
  }

    
  
  watch(() => route.params.section_id, () => {
    update()
  }, { deep: true })
  
  const createNewPqrs = async () => {
    // (si lo necesitas)
  }
  
  /* ===== Columnas ===== */
  const dataColumns = ref([
    { columnName: 'Id',            columnValue: 'pqr_request_id', columnType: 'other',           size: '1rem',  vif: true },
    { columnName: 'Estado',        columnValue: 'current_status', columnType: 'status',          size: '15rem', vif: true },
    { columnName: 'Tipo',          columnValue: 'request_type',   columnType: 'other',           size: '15rem', vif: true },
    { columnName: 'Clasificacion', columnValue: 'tag_name',       columnType: 'tag',             size: '1rem',  vif: true },
    { columnName: 'Restaurante',   columnValue: 'restaurant',     columnType: 'restaurant',      size: '1rem',  vif: true },
    { columnName: 'Id orden',      columnValue: 'order_id',       columnType: 'order_id',        size: '1rem',  vif: true },
    { columnName: 'Canal',         columnValue: 'channel',        columnType: 'tag',             size: '4rem',  vif: true },
    { columnName: 'Sede',          columnValue: 'site_name',      columnType: 'other',           size: '4rem',  vif: true },
    { columnName: 'Red',           columnValue: 'red',            columnType: 'other',           size: '4rem',  vif: true },
    { columnName: 'Comentarios',   columnValue: 'request_content',columnType: 'other',           size: '40rem', vif: true },
    { columnName: 'Responsable',   columnValue: 'responsible_name', columnType: 'responsible_name', size: '20rem', vif: false }
  ])
  </script>
  
  <style scoped>
  .pqrs {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 900px;
  }
  
  .pqrs-element {
    border-radius: .3rem;
  }
  
  .bar {
    max-width: 900px;
    display: flex;
    justify-content: end;
  }
  
  .container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
  }
  
  @keyframes an_show_actions {
    0% { opacity: 0; transform: translateX(20px); }
    100% { opacity: 1; }
  }
  .h { transform: translateX(100%); }
  
  .valor { transition: all ease .1s; cursor: pointer; }
  .valor2 { transition: all ease .1s; }
  
  .valor:hover {
    transform: scale(1.5) rotate(5deg);
    font-weight: bold;
    color: var(--primary-color);
  }
  
  .valor2:hover {
    font-weight: bold;
    color: var(--primary-color);
  }
  
  @keyframes an_show_actions_2 {
    100% { opacity: 0; transform: translateX(20px); }
    0% { opacity: 1; }
  }
  
  .button-visible { animation: an_show_actions .3s ease; }
  .button-hide { animation: an_show_actions .3s ease; }
  
  /* Fade */
  .fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
  .fade-enter, .fade-leave-to { opacity: 0; }
  
  /* Nav estados */
  .nav_bar {
    width: 100%;
    display: flex;
    justify-content: start;
    border-radius: 0 0 1rem 1rem;
    overflow: auto;
  }
  
  .nav_bar--buttons {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
  
  .nav_bar--buttons-button {
    background-color: transparent;
    padding: .3rem 1rem;
    border-radius: 0;
    min-width: max-content;
  }
  
  .nav_bar--buttons-button-selected {
    box-shadow: 0 .3rem 0px var(--primary-color);
  }
  </style>
  