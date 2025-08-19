<template>
    <!-- Fondo difuminado -->

    <div class="layout">
      <!-- Sidebar -->
      <aside class="sidebar shadow-2">
        <div class="sidebar-top">
          <div class="brand">
            <i class="fa-solid fa-store"></i>
            <b>Panel de sede</b>
          </div>
  
          <Dropdown
            v-model="store.currentSite"
            :options="sites?.filter(s => s.show_on_web)"
            optionLabel="site_name"
            placeholder="Selecciona una sede"
            class="w-full"
          />
  
          <div class="open-row">
            <span>Abierto</span>
            <InputSwitch v-model="is_open" binary />
          </div>
  
          <Button
            label="Actualizar info"
            severity="help"
            class="w-full"
            icon="fa-solid fa-pen-to-square"
            @click="isUpdateDialogVisible = true"
          />
        </div>
  
        <div class="menu">
          <Button text class="w-full" icon="fa-solid fa-circle-info" label="Información básica" @click="scrollTo('basic')" />
          <Button text class="w-full" icon="fa-solid fa-wifi" label="WiFi" @click="scrollTo('wifi')" />
          <Button text class="w-full" icon="fa-regular fa-credit-card" label="Datáfonos" @click="scrollTo('dataphones')" />
          <Button text class="w-full" icon="fa-solid fa-paper-plane" label="Páginas web" @click="scrollTo('web')" />
          <Button text class="w-full" icon="fa-brands fa-app-store-ios" label="Aplicaciones" @click="scrollTo('apps')" />
          <Button text class="w-full" icon="fa-solid fa-clock" label="Horario" @click="scrollTo('schedule')" />
        </div>
      </aside>
  
      <!-- Contenido -->
      <main class="content">
        <!-- Hero -->
        <section class="card hero-card">
          <div class="hero-grid">
            <div class="hero-info">
              <h2 class="title"><b>{{ store.currentSite?.site_name || 'Sede' }}</b></h2>
              <p class="muted">Administra datos clave, accesos y horarios de tu sede.</p>
              <div class="hero-actions">
                <Button
                  severity="help"
                  icon="fa-solid fa-camera"
                  label="Cambiar imagen"
                  @click="$refs.fileInput.click()"
                />
                <input ref="fileInput" type="file" accept="image/*" @change="handleFileChange" style="display:none" />
                <Button
                  v-if="file"
                  text
                  icon="fa-solid fa-rotate-right"
                  label="Revertir"
                  @click="resetPreview"
                />
                <Button
                  v-if="file"
                  severity="success"
                  icon="fa-solid fa-floppy-disk"
                  label="Guardar"
                  @click="uploadUsersite_photo(file, store.currentSite.site_id)"
                />
              </div>
            </div>
  
            <div class="hero-image-wrap">
              <img
                class="hero-image"
                :src="urlsite_photo ? urlsite_photo : `${URI}/read-product-image/600/site-${store.currentSite.site_id}`"
                alt="Imagen sede"
              />
            </div>
          </div>
        </section>
  
        <!-- Información básica -->
        <section class="card section" id="basic">
          <header class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-circle-info"></i>
              <span><b>Información básica</b></span>
            </div>
            <Button size="small" severity="help" icon="fa-solid fa-pen-to-square" label="Editar" @click="isUpdateDialogVisible = true" />
          </header>
  
          <div class="info-grid">
            <div v-for="(item, idx) in infoItems" :key="idx" class="info-row">
              <div class="info-label">{{ item.label }}</div>
              <div class="info-value" v-if="!item.isLink">{{ store.currentSite[item.value] || '-' }}</div>
              <a class="info-value link" v-else :href="store.currentSite[item.value]" target="_blank" rel="noopener">
                {{ store.currentSite[item.value] || '-' }}
              </a>
            </div>
          </div>
        </section>
  
        <!-- Wifi -->
        <section class="card section accent-green" id="wifi">
          <header class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-wifi"></i>
              <span><b>WiFi</b></span>
              <Tag class="ml-2">{{ directories.wifi_networks?.length || 0 }}</Tag>
            </div>
            <Button class="round" severity="help" icon="fa-solid fa-plus" @click="isWifiDialogVisible = true" />
          </header>
  
          <div v-if="(directories.wifi_networks?.length || 0) === 0" class="empty">Sin redes registradas.</div>
          <div v-else class="list">
            <div v-for="(item, index) in directories.wifi_networks" :key="index" class="list-row">
              <div class="fields">
                <div><b>Nombre:</b> <span>{{ item.username }}</span></div>
                <div><b>Clave:</b> <span>{{ item.password }}</span></div>
              </div>
              <Button text severity="danger" class="icon-only" icon="fa-solid fa-trash-can" @click="confirmDeleteWifi(item.wifi_id)" />
            </div>
          </div>
        </section>
  
        <!-- Datáfonos -->
        <section class="card section accent-violet" id="dataphones">
          <header class="section-header">
            <div class="section-title">
              <i class="fa-regular fa-credit-card"></i>
              <span><b>Datáfonos</b></span>
              <Tag class="ml-2">{{ directories.dataphones?.length || 0 }}</Tag>
            </div>
            <Button class="round" severity="help" icon="fa-solid fa-plus" @click="isDataphoneDialogVisible = true" />
          </header>
  
          <div v-if="(directories.dataphones?.length || 0) === 0" class="empty">Sin datáfonos registrados.</div>
          <div v-else class="list">
            <div v-for="(item, index) in directories.dataphones" :key="index" class="list-row">
              <div class="fields">
                <div><b>Código único:</b> <span>{{ item.unique_code }}</span></div>
                <div><b>Código externo:</b> <span>{{ item.external_code }}</span></div>
              </div>
              <Button text severity="danger" class="icon-only" icon="fa-solid fa-trash-can" @click="confirmDeleteDataphone(item.dataphone_id)" />
            </div>
          </div>
        </section>
  
        <!-- Páginas Web -->
        <section class="card section accent-orange" id="web">
          <header class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-paper-plane"></i>
              <span><b>Páginas web</b></span>
              <Tag class="ml-2">{{ directories.web_pages?.length || 0 }}</Tag>
            </div>
            <Button class="round" severity="help" icon="fa-solid fa-plus" @click="isWebPageDialogVisible = true" />
          </header>
  
          <div v-if="(directories.web_pages?.length || 0) === 0" class="empty">Sin páginas registradas.</div>
          <div v-else class="list">
            <div v-for="(item, index) in directories.web_pages" :key="index" class="list-row">
              <div class="fields">
                <div><b>Nombre:</b> <span>{{ item.page }}</span></div>
                <div><b>Usuario:</b> <span>{{ item.username }}</span></div>
                <div><b>Clave:</b> <span>{{ item.password }}</span></div>
              </div>
              <Button text severity="danger" class="icon-only" icon="fa-solid fa-trash-can" @click="confirmDeleteWebPage(item.web_page_id)" />
            </div>
          </div>
        </section>
  
        <!-- Aplicaciones -->
        <section class="card section accent-slate" id="apps">
          <header class="section-header">
            <div class="section-title">
              <i class="fa-brands fa-app-store-ios"></i>
              <span><b>Aplicaciones</b></span>
              <Tag class="ml-2">{{ directories.applications?.length || 0 }}</Tag>
            </div>
            <Button class="round" severity="help" icon="fa-solid fa-plus" @click="isApplicationDialogVisible = true" />
          </header>
  
          <div v-if="(directories.applications?.length || 0) === 0" class="empty">Sin aplicaciones registradas.</div>
          <div v-else class="list">
            <div v-for="(item, index) in directories.applications" :key="index" class="list-row">
              <div class="fields">
                <div><b>Nombre:</b> <span>{{ item.name }}</span></div>
                <div><b>Usuario:</b> <span>{{ item.username }}</span></div>
                <div><b>Clave:</b> <span>{{ item.password }}</span></div>
              </div>
              <Button text severity="danger" class="icon-only" icon="fa-solid fa-trash-can" @click="confirmDeleteApplication(item.application_id)" />
            </div>
          </div>
        </section>
  
        <!-- Horario -->
        <section class="card section" id="schedule">
          <header class="section-header">
            <div class="section-title">
              <i class="fa-solid fa-clock"></i>
              <span><b>Horario</b></span>
            </div>
          </header>
          <horarios />
        </section>
      </main>
    </div>
  
    <!-- DIALOGS -->
    <Dialog class="mx-2" header="Actualizar datos de la sede" v-model:visible="isUpdateDialogVisible" :modal="true" :style="{ width: '500px' }">
      <div class="form-vstack">
        <div class="field">
          <label for="siteName">Nombre de la sede</label>
          <InputText id="siteName" v-model="updateData.site_name" class="w-full" />
        </div>
        <div class="field">
          <label for="siteAddress">Dirección</label>
          <InputText id="siteAddress" v-model="updateData.site_address" class="w-full" />
        </div>
        <div class="field">
          <label for="sitePhone">Teléfono</label>
          <InputText id="sitePhone" v-model="updateData.site_phone" class="w-full" />
        </div>
        <div class="field">
          <label for="emailAddress">Correo electrónico</label>
          <InputText id="emailAddress" v-model="updateData.email_address" class="w-full" />
        </div>
        <div class="field">
          <label for="whatsappLink">Enlace de WhatsApp</label>
          <InputText id="whatsappLink" v-model="updateData.wsp_link" class="w-full" />
        </div>
        <div class="field">
          <label for="mapsLink">Enlace de Maps</label>
          <InputText id="mapsLink" v-model="updateData.maps" class="w-full" />
        </div>
        <div class="dialog-footer">
          <Button label="Guardar cambios" icon="fa-solid fa-floppy-disk" @click="updateSite" severity="success" />
        </div>
      </div>
    </Dialog>
  
    <Dialog header="Agregar nueva aplicación" v-model:visible="isApplicationDialogVisible" modal :style="{ width: '450px' }">
      <div class="form-vstack">
        <div class="field">
          <label for="appName">Nombre de la aplicación</label>
          <InputText id="appName" v-model="applicationData.name" class="w-full" />
        </div>
        <div class="field">
          <label for="appUsername">Nombre de usuario</label>
          <InputText id="appUsername" v-model="applicationData.username" class="w-full" />
        </div>
        <div class="field">
          <label for="appPassword">Contraseña</label>
          <InputText id="appPassword" type="password" v-model="applicationData.password" class="w-full" />
        </div>
        <Button
          label="Agregar"
          icon="fa-solid fa-plus"
          severity="success"
          :disabled="!applicationData.name || !applicationData.username || !applicationData.password"
          @click="addApplication"
        />
      </div>
    </Dialog>
  
    <Dialog header="Agregar nueva página web" v-model:visible="isWebPageDialogVisible" modal :style="{ width: '450px' }">
      <div class="form-vstack">
        <div class="field">
          <label for="pageName">Nombre de la página</label>
          <InputText id="pageName" v-model="webPageData.page" class="w-full" />
        </div>
        <div class="field">
          <label for="pageUsername">Nombre de usuario</label>
          <InputText id="pageUsername" v-model="webPageData.username" class="w-full" />
        </div>
        <div class="field">
          <label for="pagePassword">Contraseña</label>
          <InputText id="pagePassword" type="password" v-model="webPageData.password" class="w-full" />
        </div>
        <Button
          label="Agregar"
          icon="fa-solid fa-plus"
          severity="success"
          :disabled="!webPageData.page || !webPageData.username || !webPageData.password"
          @click="addWebPage"
        />
      </div>
    </Dialog>
  
    <Dialog header="Agregar nuevo datáfono" v-model:visible="isDataphoneDialogVisible" modal :style="{ width: '450px' }">
      <div class="form-vstack">
        <div class="field">
          <label for="uniqueCode">Código único</label>
          <InputText id="uniqueCode" v-model="dataphoneData.unique_code" class="w-full" />
        </div>
        <div class="field">
          <label for="externalCode">Código externo</label>
          <InputText id="externalCode" v-model="dataphoneData.external_code" class="w-full" />
        </div>
        <Button
          label="Agregar"
          icon="fa-solid fa-plus"
          severity="success"
          :disabled="!dataphoneData.value?.unique_code && !dataphoneData.unique_code"
          @click="addDataphone"
        />
      </div>
    </Dialog>
  
    <Dialog header="Agregar nueva red WiFi" v-model:visible="isWifiDialogVisible" modal :style="{ width: '450px' }">
      <div class="form-vstack">
        <div class="field">
          <label for="wifiUsername">Nombre</label>
          <InputText id="wifiUsername" v-model="wifiData.username" class="w-full" />
        </div>
        <div class="field">
          <label for="wifiPassword">Contraseña</label>
          <InputText id="wifiPassword" v-model="wifiData.password" type="password" class="w-full" />
        </div>
        <Button
          label="Agregar"
          icon="fa-solid fa-plus"
          severity="success"
          :disabled="!wifiData.username || !wifiData.password"
          @click="addWifiNetwork"
        />
      </div>
    </Dialog>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { URI } from '../../service/conection'
  import horarios from './horarios.vue'
  import { siteService } from '@/service/siteService.js'
  import { useDirectoryStore } from '../../store/directorio'
  import { useReportesStore } from '../../store/reportes'
  import { fetchService } from '../../service/utils/fetchService'
  import axios from 'axios'
  
  const store = useDirectoryStore()
  const store2 = useReportesStore()
  
  const sites = ref([])
  const directories = ref({})
  
  const isUpdateDialogVisible = ref(false)
  const isApplicationDialogVisible = ref(false)
  const isWebPageDialogVisible = ref(false)
  const isDataphoneDialogVisible = ref(false)
  const isWifiDialogVisible = ref(false)
  
  const updateData = ref({
    site_name: '',
    site_address: '',
    site_phone: '',
    email_address: '',
    wsp_link: '',
    maps: ''
  })
  
  const infoItems = [
    { label: 'Nombre', value: 'site_name' },
    { label: 'Dirección', value: 'site_address' },
    { label: 'Teléfono', value: 'site_phone' },
    { label: 'Correo', value: 'email_address' },
    { label: 'Link de WhatsApp', value: 'wsp_link', isLink: true },
    { label: 'Link de Maps', value: 'maps', isLink: true }
  ]
  
  const applicationData = ref({ name: '', username: '', password: '' })
  const webPageData = ref({ page: '', username: '', password: '' })
  const dataphoneData = ref({ unique_code: '', external_code: '' })
  const wifiData = ref({ username: '', password: '' })
  
  const file = ref(null)
  const urlsite_photo = ref('')
  const is_open = ref(false)
  
  /* Scroll helper */
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  
  /* Init */
  onMounted(async () => {
    await siteService.getSites().then(data => (sites.value = data))
    if (!store.currentSite && sites.value?.length) {
      store.setSite(sites.value[0])
    }
    await refreshDirectory()
    urlsite_photo.value = `${URI}/read-product-image/600/site-${store.currentSite.site_id}`
    file.value = ''
    if (store?.currentSite?.site_id) {
      is_open.value = await fetchService.get(`${URI}/is-open-status/${store.currentSite.site_id}`)
    }
    updateData.value = { ...store.currentSite }
  })
  
  /* Watchers */
  watch(
    () => store.currentSite,
    async newSite => {
      if (!newSite) return
      store2.setLoading(true, `cargando información de ${newSite.site_name}`)
      updateData.value = { ...newSite }
      urlsite_photo.value = `${URI}/read-product-image/600/${'site-' + newSite.site_id}`
      file.value = ''
      await refreshDirectory()
      if (newSite?.site_id) {
        is_open.value = await fetchService.get(`${URI}/is-open-status/${newSite.site_id}`)
      }
      store2.setLoading(false)
    },
    { deep: true }
  )
  
  watch(is_open, async val => {
    if (store?.currentSite?.site_id != null) {
      await fetchService.put(`${URI}/open-close-site/site/${store?.currentSite?.site_id}/status/${val}`)
    }
  })
  
  /* Directory refresh */
  const refreshDirectory = async () => {
    if (!store?.currentSite?.site_id) return
    const data = await siteService.siteDirectory(store.currentSite.site_id)
    directories.value = data || {}
  }
  
  /* Image */
  const handleFileChange = e => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return
    file.value = selectedFile
    urlsite_photo.value = URL.createObjectURL(selectedFile)
  }
  const resetPreview = () => {
    urlsite_photo.value = `${URI}/read-product-image/600/site-${store.currentSite.site_id}`
    file.value = ''
  }
  
  /* Update site */
  const updateSite = () => {
    const apiUrl = `${URI}/site/${store.currentSite.site_id}`
    axios
      .put(apiUrl, updateData.value)
      .then(() => {
        isUpdateDialogVisible.value = false
        store.currentSite = { ...updateData.value }
      })
      .catch(err => console.error('Error en la actualización:', err?.response?.data || err))
  }
  
  /* Upload photo */
  function uploadUsersite_photo(site_photo, id) {
    const serverURL = `${URI}/upload-product-image/site-${id}`
    store2.setLoading(true, 'subiendo imagen')
    const formData = new FormData()
    formData.append('file', site_photo)
    fetch(serverURL, { method: 'POST', body: formData })
      .then(r => {
        if (!r.ok) console.error('Error al cargar foto:', r.status, r.statusText)
        file.value = ''
      })
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'subiendo imagen'))
  }
  
  /* WIFI */
  const confirmDeleteWifi = wifiId => confirm('¿Eliminar esta red Wi-Fi?') && deleteWifi(wifiId)
  const deleteWifi = wifiId => {
    store2.setLoading(true, 'borrando')
    fetch(`${URI}/site/${store.currentSite.site_id}/wifi-network/${wifiId}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(refreshDirectory)
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'borrando'))
  }
  const addWifiNetwork = () => {
    if (!wifiData.value.username || !wifiData.value.password) return
    store2.setLoading(true, 'enviando')
    fetch(`${URI}/site/wifi-network`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site_id: store.currentSite.site_id, ...wifiData.value })
    })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(() => {
        isWifiDialogVisible.value = false
        wifiData.value = { username: '', password: '' }
        return refreshDirectory()
      })
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'enviando'))
  }
  
  /* Datáfonos */
  const confirmDeleteDataphone = id => confirm('¿Eliminar este datáfono?') && deleteDataphone(id)
  const deleteDataphone = id => {
    store2.setLoading(true, 'borrando')
    fetch(`${URI}/site/${store.currentSite.site_id}/dataphone/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(refreshDirectory)
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'borrando'))
  }
  const addDataphone = () => {
    if (!dataphoneData.value.unique_code) return
    store2.setLoading(true, 'enviando')
    fetch(`${URI}/site/dataphone`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site_id: store.currentSite.site_id, ...dataphoneData.value })
    })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(() => {
        isDataphoneDialogVisible.value = false
        dataphoneData.value = { unique_code: '', external_code: '' }
        return refreshDirectory()
      })
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'enviando'))
  }
  
  /* Web pages */
  const confirmDeleteWebPage = id => confirm('¿Eliminar esta página web?') && deleteWebPage(id)
  const deleteWebPage = id => {
    store2.setLoading(true, 'borrando')
    fetch(`${URI}/site/${store.currentSite.site_id}/web-page/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(refreshDirectory)
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'borrando'))
  }
  const addWebPage = () => {
    if (!webPageData.value.page || !webPageData.value.username || !webPageData.value.password) return
    store2.setLoading(true, 'enviando')
    // Mantengo tu endpoint como lo tenías:
    fetch(`${URI}/siteweb-page`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site_id: store.currentSite.site_id, ...webPageData.value })
    })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(() => {
        isWebPageDialogVisible.value = false
        webPageData.value = { page: '', username: '', password: '' }
        return refreshDirectory()
      })
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'enviando'))
  }
  
  /* Apps */
  const confirmDeleteApplication = id => confirm('¿Eliminar esta aplicación?') && deleteApplication(id)
  const deleteApplication = id => {
    store2.setLoading(true, 'borrando')
    fetch(`${URI}/site/${store.currentSite.site_id}/application/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(refreshDirectory)
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'borrando'))
  }
  const addApplication = () => {
    if (!applicationData.value.name || !applicationData.value.username || !applicationData.value.password) return
    store2.setLoading(true, 'enviando')
    fetch(`${URI}/site/application`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site_id: store.currentSite.site_id, ...applicationData.value })
    })
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(() => {
        isApplicationDialogVisible.value = false
        applicationData.value = { name: '', username: '', password: '' }
        return refreshDirectory()
      })
      .catch(console.error)
      .finally(() => store2.setLoading(false, 'enviando'))
  }
  </script>
  
  <style scoped>
  /* Paleta sobria */
  :root {
    --bg: #0b1220;
    --card: #ffffff;
    --line: #e5e7eb;
    --text: #0f172a;
    --muted: #475569;
    --accent: #0ea5e9;
    --green: #84cc16;
    --orange: #f59e0b;
    --violet: #8b5cf6;
    --slate: #64748b;
  }
  
  /* Fondo */
  .bg-hero {
    width: 100%;
    height: 120%;
    position: fixed;
    inset: 0;
    object-fit: cover;
    filter: blur(10px) brightness(0.55);
    z-index: -1;
  }
  
  /* Layout */
  .layout {
    display: grid;
    grid-template-columns: 18rem 1fr;
    gap: 1rem;
    background-color: rgb(255, 255, 255);
    max-width: 1200px;
    margin: 3.5rem auto 4rem;
    padding: 0 1rem;
  }
  @media (max-width: 992px) {
    .layout { grid-template-columns: 1fr; }
  }
  
  /* Sidebar */
  .sidebar {
    background: white;
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 1rem;
    position: sticky;
    top: 4rem;
    z-index:10 ;
    height: min-content;
  }
  .sidebar-top { display: grid; gap: .75rem; }
  .brand {
    display: flex; gap: .5rem; align-items: center;
    color: var(--text); font-size: 1.05rem;
  }
  .open-row { display: flex; justify-content: space-between; align-items: center; color: var(--muted); }
  .menu { margin-top: .5rem; display: grid; gap: .25rem; }
  
  /* Contenido */
  .content { display: grid; gap: 0rem; }
  
  /* Cards */
  .card {
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 1rem;
  }
  
  /* Hero */
  .hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 1rem;
    align-items: center;
  }
  @media (max-width: 992px) {
    .hero-grid { grid-template-columns: 1fr; }
    .menu { display: none; }
    .sidebar{    top: 3rem;}
  
  }
  .title { color: var(--text); margin: .25rem 0 .5rem; }
  .muted { color: var(--muted); }
  .hero-actions { display: flex; flex-wrap: wrap; gap: .5rem; }
  .hero-image-wrap { position: relative; }
  .hero-image {
    width: 100%; aspect-ratio: 4/2; object-fit: cover;
    border-radius: 12px; border: 1px solid var(--line);
    background: #eef6ff;
  }
  
  /* Secciones */
  .section { display: grid; gap: .75rem; }
  .section-header {
    display: flex; justify-content: space-between; align-items: center;
    padding-bottom: .5rem; border-bottom: 1px dashed var(--line);
  }
  .section-title { display: flex; align-items: center; gap: .6rem; color: var(--text); }
  .section-title i { color: var(--accent); }
  .accent-green .section-title i { color: var(--green); }
  .accent-orange .section-title i { color: var(--orange); }
  .accent-violet .section-title i { color: var(--violet); }
  .accent-slate .section-title i { color: var(--slate); }
  
  /* Info básica */
  .info-grid { display: grid; gap: .5rem; }
  .info-row {
    display: grid; grid-template-columns: 12rem 1fr; gap: 1rem;
    padding: .45rem 0; border-bottom: 1px dotted var(--line);
  }
  .info-row:last-child { border-bottom: 0; }
  .info-label { color: var(--muted); font-weight: 700; }
  .info-value { color: var(--text); word-break: break-word; }
  .info-value.link { color: var(--accent); text-decoration: none; }
  
  /* Listas */
  .list { display: grid; gap: .75rem; }
  .list-row {
    display: grid; grid-template-columns: 1fr auto; gap: .75rem;
    padding: .8rem; border: 1px solid var(--line);
    border-radius: 12px; background: #fafafa;
  }
  .fields { display: grid; gap: .25rem; color: var(--text); }
  .icon-only { width: 2.5rem; height: 2.5rem; border-radius: 10px; }
  .empty { color: var(--muted); font-style: italic; padding: .5rem; }
  
  /* Diálogos */
  .form-vstack { display: grid; gap: .75rem; }
  .field label { display: block; color: var(--muted); font-weight: 600; margin-bottom: .25rem; }
  .dialog-footer { display: flex; justify-content: flex-end; margin-top: .5rem; }
  
  /* Botones circulares */
  .round {
     /* border-radius: 12px; */
  }
  
  /* Transiciones */
  * { transition: all .2s ease; }
  </style>
  