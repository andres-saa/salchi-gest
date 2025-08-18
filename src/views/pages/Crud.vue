<script setup>
/* =================== IMPORTS (SIN CAMBIAR LÓGICA) =================== */
import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { ref, onMounted, onBeforeMount, computed, watch } from 'vue';
import { useToast } from 'primevue/usetoast';
import { departamentos, findByDepartament } from '@/service/CountryService.js'
import { jsPDF } from "jspdf";
import { roles, obtenerRolesYActualizar, getRoles } from '@/service/roles';
import { formatoPesosColombianos } from '../../service/formatoPesos.js' 
import { uploadUserPhotoProfile } from '@/service/sendFileService'
import {
  sitesDropValues,
  GenderDropValues,
  PositionDropValues,
  maritalStatusDropValues,
  epsDropValues,
  educationLevelDropValues,
  employmentContractTypeDropValues,
  pantSizesDropValues,
  shirtSizesDropValues,
  bloodTypesDropValues,
  housingTypesDropValues,
  statusDropValues,
  vehicleTypesDropValues,
  findSiteById,
  findSiteByName,
  getSites
} from '@/service/dropDownAux';
import { getUsers } from '@/service/userServices'
import { URI } from "@/service/conection.js"
import { getUserRole } from '@/service/valoresReactivosCompartidos.js'
import * as XLSX from 'xlsx';
import Loading from '../../components/Loading.vue';

const toast = useToast();

/* =================== STATE ORIGINAL =================== */
const users = ref([]);
const allUsers = ref([]);
const visible_disabled = ref(false);

const adding = ref(false);
const productDialog = ref(false);
const currentUser = ref(null);
const selectedProducts = ref(null);
const dt = ref(null);
const filters = ref(null);
const submitted = ref(false);

const GenderDropValue = ref(null);
const PositionDropValue = ref([]);
const statusDropValue = ref({ name: 'activo', code: 'active' });
const SiteDropValue = ref(null);
const swithHasVehicle = ref(false)
const switchHasChildren = ref(false)
const switchFoodHandlingCertificate = ref(false)
const SwitchAuthorizationData = ref(false)
const maritalStatusDropValue = ref(null);
const educationLevelDropValue = ref(null);
const employmentContractTypeDropValue = ref(null);
const pantSizesDropValue = ref(null);
const shirtSizesDropValue = ref(null);
const bloodTypesDropValue = ref(null);
const epsDropValue = ref(null)
const housingTypesDropValue = ref(null)
const vehicleTypeDropValue = ref(null)
const serverResponse = ref('')

const departamentDropValue = ref([])
const cityDropValue = ref([])

const excelData = ref(null);
const imageUrlUserAdd = ref("file:///home/ludi/Downloads/9aa6397c673a5906ed994997df3a66bdc3e4f68dr1-194-259v2_00.jpg")
const op = ref(null);
const op2 = ref(null);
const file = ref(null)
const urlPhotoProfile = ref("")
const currentBoss = ref({})

/* =================== FUNCIONES ORIGINALES (SIN CAMBIOS DE LÓGICA) =================== */
const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data, { type: 'array' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  excelData.value = jsonData;
  const json = JSON.parse(JSON.stringify(excelData.value))
  processAndSendData(json);
};

const obtenerDatosFiltrados = () => {
  if (!filters.value.global.value) return users.value;
  const filtroGlobal = filters.value.global.value.trim().toLowerCase();
  return users.value.filter(user =>
    Object.values(user).some(value =>
      value && value.toString().trim().toLowerCase().includes(filtroGlobal)
    )
  );
};

const onImageError = (gender, event) => {
  const genders = {
    masculino: '/images/male-avatar.png',
    femenino: '/images/female-avatar.png',
    default: '/images/who.png'
  }
  if (!gender || gender == '' || gender == 'N/A') {
    event.target.src = genders.default
  } else event.target.src = genders[gender.trim().toLowerCase()]
}

function normalizarCedula(cedula) { return cedula.toString().replace(/[.,\s]/g, ''); }

function validarCargo(cargo) {
  const cargoLowerCase = cargo.toString().trim().toLowerCase();
  for (let i = 0; i < PositionDropValues.value.length; i++) {
    let valorLista = PositionDropValues.value[i].trim().toLowerCase();
    if (valorLista === cargoLowerCase) return PositionDropValues.value[i];
  }
  return null;
}

function validar_marital_status(marital_status) {
  const Marital_lowecase = marital_status?.toString()?.trim()?.toLowerCase();
  for (let i = 0; i < maritalStatusDropValues.value.length; i++) {
    let valorLista = maritalStatusDropValues.value[i].trim().toLowerCase();
    if (valorLista === Marital_lowecase) return maritalStatusDropValues.value[i];
  }
  return maritalStatusDropValues.value[0];
}

function normalizarCadena(cadena) { return cadena.trim().toLowerCase(); }
function encontrarCoincidenciaMasCercana(valor, valoresPosibles) {
  let mejorCoincidencia = ''; let mejorPuntaje = 0;
  valoresPosibles.forEach(opcion => {
    let puntajeActual = calcularPuntajeDeSimilitud(valor, opcion);
    if (puntajeActual > mejorPuntaje) { mejorPuntaje = puntajeActual; mejorCoincidencia = opcion; }
  });
  return mejorCoincidencia;
}

const processAndSendData = async (data) => {
  const reporte = []
  let sites = await getSites()
  const nombresSedesDisponibles = sites.map(item => item.site_name).join(", ");

  for (let employer of data) {
    if (!employer.Documento || normalizarCedula(employer.Documento) === '' || normalizarCedula(employer.Documento) === 'null') {
      reporte.push(`El usuario con nombre ${employer.Nombre} no tiene cédula y no se puede registrar.`);
      continue;
    }
    const cargoValidado = validarCargo(employer.Cargo);
    if (cargoValidado === null) {
      reporte.push(`El cargo del usuario con nombre ${employer.Nombre} ( ${employer.Cargo} ) no es válido y no se puede registrar, la lista de cargos validos es ${PositionDropValues.value}`);
      continue;
    }
    const marital_status_valido = validar_marital_status(employer['Estado Civil']);
    const sedeEncontrada = sites.find(item => item.site_name?.trim().toLowerCase().includes(employer.Sede.trim().toLowerCase()));
    if (!sedeEncontrada) {
      reporte.push(`No se pudo encontrar la sede para el usuario con nombre ${employer.Nombre}. Las sedes disponibles son: ${nombresSedesDisponibles}.`);
      continue;
    }
    const estadoNormalizado = employer.Estado ? employer.Estado.trim().toLowerCase() : '';
    const status = (estadoNormalizado === 'activo' || estadoNormalizado === 'inactivo') ? estadoNormalizado : 'inactivo';
    const generosValidos = ['masculino', 'femenino'];
    const generoNormalizado = employer.Género ? employer.Género.trim().toLowerCase() : '';
    const gender = generosValidos.includes(generoNormalizado) ? generoNormalizado : '';

    if (!isValidDate(employer["Fecha de Nacimiento"])) {
      reporte.push(`La fecha de nacimiento del usuario con nombre ${employer.Nombre} (${employer["Fecha de Nacimiento"]}) no es válida. Se sugiere revisar y corregir. formato permitido AAAA-MM-DD`);
      continue;
    }
    const birth_date = typeof employer["Fecha de Nacimiento"] === 'string'
      ? employer["Fecha de Nacimiento"] : excelDateToDate(employer["Fecha de Nacimiento"]);

    if (!isValidDate(employer["Fecha de Ingreso"])) {
      reporte.push(`La fecha de ingreso del usuario con nombre ${employer.Nombre} (${employer["Fecha de Ingreso"]}) no es válida. Se sugiere revisar y corregir. formato permitido AAAA-MM-DD`);
      continue;
    }
    const entry_date = typeof employer["Fecha de Ingreso"] === 'string'
      ? employer["Fecha de Ingreso"] : excelDateToDate(employer["Fecha de Ingreso"]);

    const exit_date = isValidDate(employer["Fecha de Salida"])
      ? (typeof employer["Fecha de Salida"] === 'string' ? employer["Fecha de Salida"] : excelDateToDate(employer["Fecha de Salida"])) : null;

    const transformedEmployer = {
      name: employer.Nombre || 'SIN NOMBRE',
      dni: employer.Documento ? normalizarCedula(employer.Documento) : '',
      address: employer?.Direccion?.toString()?.trim()?.toLowerCase() || 'N/A',
      position: validarCargo(employer.Cargo) || '',
      site_id: sites.find(item => item.site_name?.trim().toLowerCase().includes(employer.Sede.trim().toLowerCase()))?.site_id || 12,
      rol_id: PositionDropValue.value.id,
      status: status, gender: gender,
      birth_date, entry_date, exit_date,
      phone: employer.Teléfono ? employer.Teléfono.toString() : '  ',
      email: employer["Correo Electrónico"] || null,
      exit_reason: employer["Motivo de Salida"] || null,
      comments_notes: "", authorization_data: true,
      birth_country: employer["País de Nacimiento"] || null,
      birth_department: employer["Departamento de Nacimiento"] || null,
      birth_city: employer["Ciudad de Nacimiento"] || null,
      blood_type: employer["Tipo de Sangre"] || null,
      marital_status: marital_status_valido || 'soltero/a',
      education_level: employer["Nivel de Educación"] || null,
      contract_type: employer["Tipo de Contrato"] || null,
      eps: employer.EPS || null,
      pension_fund: employer["Fondo de Pensión"] || null,
      severance_fund: employer["Fondo de Cesantías"] || null,
      has_children: employer["Tiene Hijos"]?.trim().toLowerCase() == 'sí' || employer["Tiene Hijos"]?.trim().toLowerCase() == 'si',
      housing_type: employer["Tipo de Vivienda"] || null,
      has_vehicle: employer["Tiene Vehiculo"]?.trim().toLowerCase() == 'sí' || employer["Tiene Vehiculo"]?.trim().toLowerCase() == 'si',
      vehicle_type: employer["Tipo de Vehiculo"] || null,
      household_size: employer["Tamaño del Hogar"] ? parseInt(employer["Tamaño del Hogar"], 10) : 0,
      emergency_contact: employer["Contacto de Emergencia"] ? employer["Contacto de Emergencia"].toString() : '  ',
      shirt_size: employer["Talla de Camisa"] ? employer["Talla de Camisa"].toString() : '  ',
      jeans_sweater_size: employer["Talla de Pantalón"] ? employer["Talla de Pantalón"].toString() : '  ',
      food_handling_certificate: employer["Certificado de Manejo de Alimentos"]?.trim().toLowerCase() === 'sí' || employer["Certificado de Manejo de Alimentos"]?.trim().toLowerCase() === 'si',
      food_handling_certificate_number: employer["Número de Certificado de Manejo de Alimentos"] || "",
      salary: employer.Salario ? parseFloat(employer.Salario) : 0
    };

    try {
      const response = await fetch(`${URI}/employer`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedEmployer),
      });
      if (!response.ok) throw new Error(`Error en el envío del empleado: ${employer.Nombre}`);
      const responseData = await response.json();
      toast.add({ severity: 'success', summary: `Usuario ${employer.Nombre} registrado`, detail: 'Hecho', life: 3000 });
    } catch (error) { console.error('Error al enviar los datos:', error); }
  }

  if (reporte.length <= 0) { reporte.push(`Enhorabuena, todo se ha cargado con exito`) }
  generatePDF(reporte)
  getUsers().then(data => users.value = data)
};

const generatePDF = (reporte) => {
  const doc = new jsPDF();
  let y = 10; const fontSize = 11; const interlineSpacing = 0.5;
  const lineHeight = fontSize * interlineSpacing; const pageHeight = doc.internal.pageSize.height; const margin = 10;
  doc.setFont("Helvetica"); doc.setFontSize(fontSize);
  reporte.forEach((mensaje, index) => {
    if (index > 0) { y += lineHeight; if (y > pageHeight - margin) { doc.addPage(); y = 10; } }
    const lines = doc.splitTextToSize(mensaje, 180);
    lines.forEach((line) => {
      if (y + lineHeight > pageHeight - margin) { doc.addPage(); y = 10; }
      doc.text(line, 10, y); y += lineHeight;
    });
  });
  doc.save('reporte.pdf');
};

function isValidDate(dateStr) {
  if (!dateStr) return false;
  const date = (typeof dateStr === 'string') ? new Date(dateStr) : excelDateToDate(dateStr);
  return date instanceof Date && !isNaN(date);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) { return null; }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

onBeforeMount(() => { initFilters(); getSites() });

const cambiar = (event) => { op.value.toggle(event); };
const cambiar2 = (event) => { op2.value.toggle(event); };

onMounted(async () => {
  getUsers().then(data => { allUsers.value = data; users.value = data.filter(u => u.status == 'activo') })
  getRoles().then(data => PositionDropValues.value = data)
});

const seeDisableUsers = (status) => { users.value = status ? [...allUsers.value] : [...allUsers.value.filter(u => u.status == 'activo')] }

const resetValuesNewEntry = () => {
  statusDropValue.value = {}
  GenderDropValue.value = {}
  PositionDropValue.value = {}
  SiteDropValue.value = {}
  maritalStatusDropValue.value = {}
  educationLevelDropValue.value = {}
  employmentContractTypeDropValue.value = {}
  pantSizesDropValue.value = {}
  shirtSizesDropValue.value = {}
  bloodTypesDropValue.value = {}
  epsDropValue.value = {}
  housingTypesDropValue.value = {}
  vehicleTypeDropValue.value = {}
  swithHasVehicle.value = false
  switchHasChildren.value = false
  switchFoodHandlingCertificate.value = false
  SwitchAuthorizationData.value = false
  currentUser.value = {};
}

const openNew = () => {
  resetValuesNewEntry()
  submitted.value = false; productDialog.value = true; adding.value = true
  file.value = null; urlPhotoProfile.value = null
};

function excelDateToDate(excelDateNum) {
  const baseDate = new Date(1900, 0, 1);
  const dayOffset = excelDateNum > 60 ? -2 : -1;
  const date = new Date(baseDate.getTime());
  date.setDate(baseDate.getDate() + excelDateNum + dayOffset);
  return date;
}

const asignDropValueToEdit = (user) => {
  SiteDropValue.value = findSiteById(user.site_id)
  departamentDropValue.value = user.birth_department
  cityDropValue.value = user.birth_city
  statusDropValue.value = user.status
  PositionDropValue.value = PositionDropValues.value.filter(rol => rol.title?.trim().toLowerCase() == user.position?.trim().toLowerCase())[0] || {}
  currentBoss.value = users.value.filter(u => (u.id == user.boss_id))[0] || {}
  console.log(user)
}

const deleteUser = async (userId) => {
  const confirmation = confirm("¿Estás seguro de que quieres eliminar este usuario?");
  if (confirmation) {
    try {
      const response = await fetch(`${URI}/employer/${userId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error(`Error al eliminar el usuario: ${response.statusText}`);
      toast.add({ severity: 'success', summary: 'Usuario eliminado', detail: 'El usuario ha sido eliminado con éxito.', life: 3000 });
      getUsers().then(data => users.value = data);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      toast.add({ severity: 'error', summary: 'Error al eliminar', detail: 'Hubo un problema al eliminar el usuario. es posible que sea un jefe', life: 3000 });
    }
  }
};

const editProduct = (editUser) => {
  asignDropValueToEdit(editUser)
  urlPhotoProfile.value = null
  currentUser.value = { ...editUser };
  productDialog.value = true; adding.value = false
};

const hideDialog = () => {
  productDialog.value = false; submitted.value = false; adding.value = false
  resetValuesNewEntry(); currentUser.value = {};
};

const asingDataToSave = () => {
  const { ...data } = currentUser.value;
  data.site_id = SiteDropValue.value.site_id
  data.food_handling_certificate_number = 1;
  data.birth_department = departamentDropValue.value
  data.birth_city = cityDropValue.value
  data.boss_id = currentBoss.value.id
  data.position = PositionDropValue.value.title
  data.rol_id = PositionDropValue.value.id,
  data.exit_date = (data.status === "activo") ? null : data.exit_date;
  data.exit_reason = (data.exit_date === null) ? null : data.exit_reason;

  if (adding.value) {
    data.vehicle_type = data.vehicle_type ?? null;
    data.gender = data.gender ?? null;
    data.position = data.position ?? null;
    data.site_id = data.site_id ?? null;
    data.has_children = data.has_children ?? null;
    data.has_vehicle = data.has_vehicle ?? null;
    data.food_handling_certificate = data.food_handling_certificate ?? null;
    data.authorization_data = data.authorization_data ?? null;
    data.marital_status = data.marital_status ?? null;
    data.eps = data.eps ?? null;
    data.blood_type = data.blood_type ?? null;
    data.education_level = data.education_level ?? null;
    data.contract_type = 'none';
    data.shirt_size = data.shirt_size ?? null;
    data.jeans_sweater_size = data.jeans_sweater_size ?? null;
    data.housing_type = data.housing_type ?? null;
    data.status = data.status ?? null;
    data.exit_date = null; data.exit_reason = null; data.comments_notes = data.comments_notes ?? ''
  }
  currentUser.value = { ...data }
  return data
}

const saveProduct = async () => {
  let Method = "", queryUrl = ""
  const data = asingDataToSave()
  adding.value ? Method = "POST" : Method = "PUT"
  adding.value ? queryUrl = `${URI}/employer` : queryUrl = `${URI}/employer/${currentUser.value.id}`

  const requestOptions = {
    method: Method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  };

  await fetch(queryUrl, requestOptions)
    .then(response => {
      if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
      file.value ? uploadUserPhotoProfile(file.value, data.dni) : ''
      adding.value
        ? toast.add({ severity: 'success', summary: 'Usuario registrado', detail: 'Hecho', life: 3000 })
        : toast.add({ severity: 'success', summary: 'Usuario actualizado', detail: 'Hecho', life: 3000 })
      hideDialog()
      return response.json();
    })
    .then(data => { serverResponse.value = data; })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      toast.add({ severity: 'error', summary: 'llene todos los campos', detail: '', life: 3000 })
    });

  getUsers().then(data => users.value = data)
  submitted.value = true
}
const toggle = (event) => { op.value.toggle(event); };

const exportCSV = () => {
  const datosFiltrados = obtenerDatosFiltrados();
  const data = datosFiltrados.map(user => ({
    "Id": user.id,
    "Nombre": user.name,
    "Jefe inmediato": user.boss_name,
    "Documento": user.dni,
    "Direccion": user.address,
    "Cargo": user.position,
    "Sede": user.site_name,
    "Estado": user.status,
    "Género": user.gender,
    "Fecha de Nacimiento": user.birth_date?.toString() || '',
    "Teléfono": user.phone,
    "Correo Electrónico": user.email,
    "Fecha de Ingreso": user.entry_date?.toString() || '',
    "Fecha de Salida": user.exit_date?.toString() || '',
    "Motivo de Salida": user.exit_reason,
    "Autorización de Datos": user.authorization_data == true ? 'si' : 'no',
    "País de Nacimiento": user.birth_country,
    "Departamento de Nacimiento": user.birth_department,
    "Ciudad de Nacimiento": user.birth_city,
    "Tipo de Sangre": user.blood_type,
    "Estado Civil": user.marital_status,
    "Nivel de Educación": user.education_level,
    "Tipo de Contrato": user.contract_type,
    "EPS": user.eps,
    "Fondo de Pensión": user.pension_fund,
    "Fondo de Cesantías": user.severance_fund,
    "Tiene Hijos": user.has_children == true ? 'si' : 'no',
    "Tipo de Vivienda": user.housing_type,
    "Tiene Vehiculo": user.has_vehicle == true ? 'si' : 'no',
    "Tipo de Vehiculo": user.vehicle_type,
    "Tamaño del Hogar": user.household_size,
    "Contacto de Emergencia": user.emergency_contact,
    "Talla de Camisa": user.shirt_size,
    "Talla de Pantalón": user.jeans_sweater_size,
    "Certificado de Manejo de Alimentos": user.food_handling_certificate == true ? 'si' : 'no',
    "Número de Certificado de Manejo de Alimentos": user.food_handling_certificate_number,
    "Salario": user.salary,
    "Comentarios/Notas": user.comments_notes
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  worksheet["!cols"] = [
    { wch: Math.max(8, "Id".length) },
    { wch: Math.max(40, "Nombre".length) },
    { wch: Math.max(40, "Jefe inmediato".length) },
    { wch: Math.max(12, "Documento".length) },
    { wch: Math.max(20, "Direccion".length) },
    { wch: Math.max(20, "Cargo".length) },
    { wch: Math.max(10, "Sede".length) },
    { wch: Math.max(10, "Estado".length) },
    { wch: Math.max(8, "Género".length) },
    { wch: Math.max(20, "Fecha de Nacimiento".length) },
    { wch: Math.max(12, "Teléfono".length) },
    { wch: Math.max(25, "Correo Electrónico".length) },
    { wch: Math.max(15, "Fecha de Ingreso".length) },
    { wch: Math.max(15, "Fecha de Salida".length) },
    { wch: Math.max(18, "Motivo de Salida".length) },
    { wch: Math.max(25, "Autorización de Datos".length) },
    { wch: Math.max(20, "País de Nacimiento".length) },
    { wch: Math.max(25, "Departamento de Nacimiento".length) },
    { wch: Math.max(20, "Ciudad de Nacimiento".length) },
    { wch: Math.max(15, "Tipo de Sangre".length) },
    { wch: Math.max(15, "Estado Civil".length) },
    { wch: Math.max(20, "Nivel de Educación".length) },
    { wch: Math.max(18, "Tipo de Contrato".length) },
    { wch: Math.max(20, "EPS".length) },
    { wch: Math.max(18, "Fondo de Pensión".length) },
    { wch: Math.max(18, "Fondo de Cesantías".length) },
    { wch: Math.max(12, "Tiene Hijos".length) },
    { wch: Math.max(18, "Tipo de Vivienda".length) },
    { wch: Math.max(16, "Tiene Vehiculo".length) },
    { wch: Math.max(18, "Tipo de Vehiculo".length) },
    { wch: Math.max(18, "Tamaño del Hogar".length) },
    { wch: Math.max(22, "Contacto de Emergencia".length) },
    { wch: Math.max(15, "Talla de Camisa".length) },
    { wch: Math.max(18, "Talla de Pantalón".length) },
    { wch: Math.max(35, "Certificado de Manejo de Alimentos".length) },
    { wch: Math.max(40, "Número de Certificado de Manejo de Alimentos".length) },
    { wch: Math.max(10, "Salario".length) },
    { wch: Math.max(20, "Comentarios/Notas".length) }
  ]
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
  XLSX.writeFile(workbook, "Base de datos empleados Salchimonster.xlsx");
};

const exportDotacion = () => {
  const datosFiltrados = obtenerDatosFiltrados();
  const data = datosFiltrados.map(user => ({
    "Id": user.id, "Nombre": user.name, "Sede": user.site_name, "Estado": user.status,
    "Talla de Camisa": user.shirt_size, "Talla de Pantalón": user.jeans_sweater_size,
  }));
  const worksheet = XLSX.utils.json_to_sheet(data);
  worksheet["!cols"] = [{ wch: 6 },{ wch: 40 },{ wch: 10 },{ wch: 8 },{ wch: 15 },{ wch: 15 }];
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
  XLSX.writeFile(workbook, "Base de datos empleados Salchimonster.xlsx");
};

const downloadEmptyTemplate = () => {
  const headers = [{
    "Id": '', "Nombre": '', "Documento": '', "Direccion": '', "Cargo": '', "Sede": '', "Estado": '',
    "Género": '', "Fecha de Nacimiento": '', "Teléfono": '', "Correo Electrónico": '', "Fecha de Ingreso": '',
    "Fecha de Salida": '', "Motivo de Salida": '', "Autorización de Datos": '', "País de Nacimiento": '',
    "Departamento de Nacimiento": '', "Ciudad de Nacimiento": '', "Tipo de Sangre": '', "Estado Civil": '',
    "Nivel de Educación": '', "Tipo de Contrato": '', "EPS": '', "Fondo de Pensión": '', "Fondo de Cesantías": '',
    "Tiene Hijos": '', "Tipo de Vivienda": '', "Tiene Vehiculo": '', "Tipo de Vehiculo": '', "Tamaño del Hogar": '',
    "Contacto de Emergencia": '', "Talla de Camisa": '', "Talla de Pantalón": '', "Certificado de Manejo de Alimentos": '',
    "Número de Certificado de Manejo de Alimentos": '', "Salario": '', "Comentarios/Notas": ''
  }];
  const worksheet = XLSX.utils.json_to_sheet(headers);
  worksheet["!cols"] = [
    { wch: 8 },{ wch: 40 },{ wch: 12 },{ wch: 20 },{ wch: 20 },{ wch: 10 },{ wch: 10 },{ wch: 8 },{ wch: 20 },
    { wch: 12 },{ wch: 25 },{ wch: 15 },{ wch: 15 },{ wch: 18 },{ wch: 25 },{ wch: 20 },{ wch: 25 },{ wch: 20 },
    { wch: 15 },{ wch: 15 },{ wch: 20 },{ wch: 18 },{ wch: 20 },{ wch: 18 },{ wch: 18 },{ wch: 12 },{ wch: 18 },
    { wch: 16 },{ wch: 18 },{ wch: 18 },{ wch: 22 },{ wch: 15 },{ wch: 18 },{ wch: 35 },{ wch: 40 },{ wch: 10 },{ wch: 20 }
  ]
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Plantilla");
  XLSX.writeFile(workbook, "Plantilla_Empleados_Salchimonster.xlsx");
};

const initFilters = () => {
  filters.value = { global: { value: null, matchMode: FilterMatchMode.CONTAINS } };
};

const onUpload = (event) => {
  if (event.files.length > 0) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.onload = () => { imageUrlUserAdd.value = reader.result; };
    reader.readAsDataURL(file);
  } else { imageUrlUserAdd.value = null; }
};

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile
    urlPhotoProfile.value = URL.createObjectURL(selectedFile);
  }
}

const charging = ref(true)
const visibleImage = ref(false)
const bigImage = ref('/images/male-avatar.png')
const verIMagen = (dni) => {
  visibleImage.value = true
  bigImage.value = `${URI}/read-product-image/600/employer-${dni}`
}
</script>

<template>
  <div class="page theme-bw">
    <ConfirmDialog />

    <!-- ============= DIALOGO FOTO PERFIL ============= -->
    <Dialog v-model:visible="visibleImage" modal header="Foto de Perfil" class="dialog-photo"
            :style="{ width: '32rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <img class="photo-full" :src="bigImage" alt="" />
    </Dialog>

    <!-- ============= TITULO ============= -->
    <header class="page-head">
      <h2 class="title my-6"><i class="fa-solid fa-users"></i> GESTIÓN DEL PERSONAL</h2>
    </header>

    <!-- ============= TOOLBAR ACCIONES ============= -->
    <section class="toolbar">
      <input ref="cargarExcel" type="file" class="hidden" @change="handleFileUpload" />
      <div class="toolbar-actions">
        <Button text severity="info" class="bw-btn" label="REGISTRAR USUARIO" icon="pi pi-plus" @click="openNew" />
        <Button text class="bw-btn" label="EXPORTAR EXCEL" icon="pi pi-upload" @click="exportCSV($event)" />
        <Button text class="bw-btn" label="EXPORTAR DOTACIÓN" icon="pi pi-upload" @click="exportDotacion()" />
      </div>

      <div class="toolbar-filters">
        <div class="switch-line">
          <b>Ver inactivos</b>
          <inputSwitch v-model="visible_disabled" @change="seeDisableUsers(visible_disabled)" />
        </div>
        <span class="search">
          <i class="pi pi-search" />
          <InputText v-model="filters['global'].value" placeholder="Buscar empleado..." />
        </span>
      </div>
    </section>

    <!-- ============= TABLA ============= -->
    <DataTable
      ref="dt"
      :value="users"
      v-model:selection="selectedProducts"
      dataKey="id"
      :paginator="true"
      :rows="10"
      :filters="filters"
      stripedRows
      showGridlines
      responsiveLayout="scroll"
      scrollable
      class="fancy-table"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5,10,15,25,100]"
      currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} empleados"
    >
      <template #header>
        <div class="table-head">
          <h5><b>Empleados</b></h5>
        </div>
      </template>

      <Column selectionMode="multiple" headerStyle="width:3rem;" class="py-2" />

      <Column field="id" header="Id" :sortable="true" headerStyle="width:min-content; min-width:min-content;">
        <template #body="user"><h6>{{ user.data.id }}</h6></template>
      </Column>

      <Column header="Foto" headerStyle="width:5%; min-width:3rem;">
        <template #body="user">
          <img @click="verIMagen(user.data.dni)"
               :src="`${URI}/read-product-image/96/employer-${user.data.dni}`"
               @error="onImageError(user.data.gender, $event)"
               class="avatar"
          />
        </template>
      </Column>

      <Column field="name" header="Nombre" :sortable="true" headerStyle="width:20%; min-width:20rem;">
        <template #body="user"><h6 class="ucase">{{ user.data.name }}</h6></template>
      </Column>

      <Column field="boss_id" header="Id del jefe" :sortable="true" headerStyle="width:5%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data?.boss_id || 'No asignado' }}</h6></template>
      </Column>

      <Column field="dni" header="Documento" :sortable="true" headerStyle="width:14%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.dni }}</h6></template>
      </Column>

      <Column field="address" header="Direccion" :sortable="true" headerStyle="width:14%; min-width:15rem;">
        <template #body="user"><h6>{{ user.data.address }}</h6></template>
      </Column>

      <Column field="position" header="Cargo" :sortable="true" headerStyle="width:14%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.position }}</h6></template>
      </Column>

      <Column field="site_name" header="Sede" :sortable="true" headerStyle="width:14%; min-width:5rem;">
        <template #body="user"><h6>{{ user.data.site_name }}</h6></template>
      </Column>

      <Column field="status" header="Estado" :sortable="true" headerStyle="width:14%; min-width:5rem;">
        <template #body="user">
          <Tag class="status-tag" :severity="user.data.status == 'activo' ? 'success' : 'danger'">
            {{ user.data.status?.toLowerCase() }}
          </Tag>
        </template>
      </Column>

      <Column field="gender" header="Género" :sortable="true" headerStyle="width:10%; min-width:8rem;">
        <template #body="user"><h6>{{ user.data.gender || 'N/A' }}</h6></template>
      </Column>

      <Column field="birth_date" header="Fecha de Nacimiento" :sortable="true" headerStyle="width:12%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.birth_date }}</h6></template>
      </Column>

      <Column field="phone" header="Teléfono" :sortable="true" headerStyle="width:12%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.phone }}</h6></template>
      </Column>

      <Column field="email" header="Correo Electrónico" :sortable="true" headerStyle="width:10%; min-width:5rem;">
        <template #body="user"><h6>{{ user.data.email || 'No proporcionado' }}</h6></template>
      </Column>

      <Column field="entry_date" header="Fecha de Ingreso" :sortable="true" headerStyle="width:12%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.entry_date }}</h6></template>
      </Column>

      <Column field="exit_date" header="Fecha de Salida" :sortable="true" headerStyle="width:12%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.exit_date || '.........................' }}</h6></template>
      </Column>

      <Column field="exit_reason" header="Motivo de Salida" :sortable="true" headerStyle="width:14%; min-width:15rem;">
        <template #body="user"><h6>{{ user.data.exit_reason || '..............................................' }}</h6></template>
      </Column>

      <Column field="birth_country" header="País de Nacimiento" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.birth_country || 'N/a' }}</h6></template>
      </Column>

      <Column field="birth_department" header="Departamento de Nacimiento" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.birth_department || 'N/a' }}</h6></template>
      </Column>

      <Column field="birth_city" header="Ciudad de Nacimiento" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.birth_city || 'N/a' }}</h6></template>
      </Column>

      <Column field="blood_type" header="Tipo de Sangre" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.blood_type || '...............' }}</h6></template>
      </Column>

      <Column field="marital_status" header="Estado Civil" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.marital_status || 'N/a' }}</h6></template>
      </Column>

      <Column field="education_level" header="Nivel de Educación" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.education_level || '............................' }}</h6></template>
      </Column>

      <Column field="contract_type" header="Tipo de Contrato" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.contract_type_name || 'N/a' }}</h6></template>
      </Column>

      <Column field="eps" header="EPS" :sortable="true" headerStyle="width:18%; min-width:15rem;">
        <template #body="user"><h6>{{ user.data.eps || 'N/a' }}</h6></template>
      </Column>

      <Column field="pension_fund" header="Fondo de Pensión" :sortable="true" headerStyle="width:18%; min-width:15rem;">
        <template #body="user"><h6>{{ user.data.pension_fund || 'N/a' }}</h6></template>
      </Column>

      <Column field="severance_fund" header="Fondo de Cesantías" :sortable="true" headerStyle="width:18%; min-width:15rem;">
        <template #body="user"><h6>{{ user.data.severance_fund || 'N/a' }}</h6></template>
      </Column>

      <Column field="has_children" header="Tiene Hijos" :sortable="true" headerStyle="width:18%; min-width:15rem;">
        <template #body="user"><h6>{{ user.data.has_children == 1 ? 'si' : 'no' }}</h6></template>
      </Column>

      <Column field="housing_type" header="Tipo de Vivienda" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.housing_type || '..............................' }}</h6></template>
      </Column>

      <Column field="has_vehicle" header="Tiene Vehiculo" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.has_vehicle == 1 ? "si" : "no" }}</h6></template>
      </Column>

      <Column field="vehicle_type" header="Tipo de Vehiculo" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.vehicle_type || 'N/a' }}</h6></template>
      </Column>

      <Column field="household_size" header="Tamaño del Hogar" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.household_size }}</h6></template>
      </Column>

      <Column field="emergency_contact" header="Contacto de Emergencia" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.emergency_contact || 'No proporcionado' }}</h6></template>
      </Column>

      <Column field="shirt_size" header="Talla de Camisa" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.shirt_size || 'N/a' }}</h6></template>
      </Column>

      <Column field="jeans_sweater_size" header="Talla de Pantalón" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.jeans_sweater_size || 'N/a' }}</h6></template>
      </Column>

      <Column field="food_handling_certificate" header="Cert. Man. de Alimentos" :sortable="true" headerStyle="width:30rem; min-width:10rem;">
        <template #body="user"><h6>{{ user.data.food_handling_certificate == 1 ? 'si' : 'no' }}</h6></template>
      </Column>

      <Column field="salary" header="Salario" :sortable="true" headerStyle="width:18%; min-width:10rem;">
        <template #body="user"><h6>{{ formatoPesosColombianos(user.data.salary) }}</h6></template>
      </Column>

      <Column field="comments_notes" header="Comentarios/Notas" :sortable="false" headerStyle="width:500px; min-width:15rem;">
        <template #body="user"><h6>{{ user.data.comments_notes }}</h6></template>
      </Column>

      <Column header="Acciones" headerStyle="min-width:5rem;" frozen alignFrozen="right">
        <template #body="user">
          <div class="row-actions">
            <Button icon="pi pi-pencil" class="icon-btn bw-solid" @click="editProduct(user.data)" />
            <Button icon="pi pi-trash" class="icon-btn bw-solid" @click="deleteUser(user.data.id)" />
          </div>
        </template>
      </Column>
    </DataTable>

    <!-- ============= DIALOGO REGISTRO/EDICION ============= -->
    <Dialog v-model:visible="productDialog" header="Registrar un Usuario" :modal="true" class="p-fluid form-dialog" :style="{ width: '90vw', 'max-width':'60rem' }">
      <div class="photo-uploader">
        <img class="profile-preview" :src="adding || (!adding && urlPhotoProfile) ? urlPhotoProfile : `${URI}/read-product-image/600/employer-${currentUser.dni}`" alt="">
        <div class="upload-ctrl">
          <input ref="fileInput" type="file" accept="image/*" @change="handleFileChange" class="hidden">
          <Button icon="fa-solid fa-camera" severity="info" class="icon-btn bw-solid" @click="$refs.fileInput.click()">
            
          </Button>
        </div>
      </div>

      <!-- GRID DE CAMPOS (MISMA LÓGICA, SOLO UI) -->
      <div class="form-grid">
        <div class="field">
          <label for="name">Nombre</label>
          <InputText id="name" v-model.trim="currentUser.name" :class="{ 'p-invalid': submitted && !currentUser.name }" />
          <small class="p-invalid" v-if="submitted && !currentUser.name">name is required.</small>
        </div>

        <div class="field">
          <label for="dni">Identificación</label>
          <InputText id="dni" v-model.trim="currentUser.dni" :class="{ 'p-invalid': submitted && !currentUser.dni }" />
          <small class="p-invalid" v-if="submitted && !currentUser.dni">La identificación es requerida.</small>
        </div>

        <div class="field">
          <label for="address">Dirección</label>
          <InputText id="address" v-model.trim="currentUser.address" :class="{ 'p-invalid': submitted && !currentUser.address }" />
          <small class="p-invalid" v-if="submitted && !currentUser.address">La dirección es requerida.</small>
        </div>

        <div class="field">
          <label for="position">Cargo</label>
          <Dropdown optionLabel="title" filter v-model.trim="PositionDropValue" :options="PositionDropValues"
                    :class="{ 'p-invalid': submitted && !currentUser.position }" />
          <small class="p-invalid" v-if="submitted && !currentUser.position">el cargo es obligatorio</small>
        </div>

        <div class="field">
          <label for="position">Jefe inmediato</label>
          <Dropdown filter v-model.trim="currentBoss" :options="users" optionLabel="name"
                    :class="{ 'p-invalid': submitted && !currentUser.position }">
            <template #value="user">
              <div class="opt-user" v-if="user?.value">
                <img :src="`${URI}/read-product-image/96/employer-${user?.value?.dni}`" @error="onImageError(user?.value?.gender, $event)" class="avatar" />
                {{ user?.value?.name }}
              </div>
            </template>
            <template #option="user">
              <div class="opt-user">
                <img :src="`${URI}/read-product-image/96/employer-${user.option.dni}`" @error="onImageError(user.option.gender, $event)" class="avatar" />
                {{ user?.option?.name }}
              </div>
            </template>
          </Dropdown>
          <small class="p-invalid" v-if="submitted && !currentUser.position">el cargo es obligatorio</small>
        </div>

        <div class="field">
          <label for="site_id">Sede</label>
          <Dropdown filter v-model="SiteDropValue" :options="sitesDropValues" optionLabel="site_name" :class="{ 'p-invalid': submitted && !currentUser.site_id }" />
          <small class="p-invalid" v-if="submitted && !currentUser.site_id">La sede es obligatoria</small>
        </div>

        <div class="field">
          <label for="gender">Género</label>
          <Dropdown v-model="currentUser.gender" :options="GenderDropValues" :class="{ 'p-invalid': submitted && !currentUser.gender }" />
          <small class="p-invalid" v-if="submitted && !currentUser.gender">el genero es obligatorio</small>
        </div>

        <div class="field">
          <label for="birth_date">Fecha de Nacimiento</label>
          <Calendar id="birth_date" v-model="currentUser.birth_date" :class="{ 'p-invalid': submitted && !currentUser.birth_date }" />
          <small class="p-invalid" v-if="submitted && !currentUser.birth_date">fecha de nacimiento es obligatoria</small>
        </div>

        <div class="field">
          <label for="birth_country">Pais de Nacimiento</label>
          <InputText id="birth_country" v-model="currentUser.birth_country" :class="{ 'p-invalid': submitted && !currentUser.birth_country }" />
          <small class="p-invalid" v-if="submitted && !currentUser.birth_country">País de nacimiento es obligatorio.</small>
        </div>

        <div class="field">
          <label for="birth_department">Departamento de Nacimiento</label>
          <InputText v-model="departamentDropValue" :class="{ 'p-invalid': submitted && !currentUser.gender }" />
          <small class="p-invalid" v-if="submitted && !currentUser.gender">el genero es obligatorio</small>
        </div>

        <div class="field">
          <label for="birth_city">Ciudad de Nacimiento</label>
          <InputText v-model="cityDropValue" :class="{ 'p-invalid': submitted && !currentUser.gender }" />
          <small class="p-invalid" v-if="submitted && !currentUser.gender">el genero es obligatorio</small>
        </div>

        <div class="field">
          <label for="blood_type">Tipo de sangre</label>
          <Dropdown v-model="currentUser.blood_type" :options="bloodTypesDropValues" :class="{ 'p-invalid': submitted && !currentUser.blood_type }" />
          <small class="p-invalid" v-if="submitted && !currentUser.blood_type">Tipo de sangre es obligatorio.</small>
        </div>

        <div class="field">
          <label for="phone">Teléfono</label>
          <InputText id="phone" v-model.trim="currentUser.phone" :class="{ 'p-invalid': submitted && !currentUser.phone }" />
          <small class="p-invalid" v-if="submitted && !currentUser.phone">El teléfono es requerido.</small>
        </div>

        <div class="field">
          <label for="email">Correo Electrónico</label>
          <InputText id="email" v-model.trim="currentUser.email" :class="{ 'p-invalid': submitted && !currentUser.email }" />
          <small class="p-invalid" v-if="submitted && !currentUser.email">El correo electrónico es requerido.</small>
        </div>

        <div class="field">
          <label for="entry_date">Fecha de Ingreso</label>
          <Calendar id="entry_date" v-model="currentUser.entry_date" :class="{ 'p-invalid': submitted && !currentUser.entry_date }" />
          <small class="p-invalid" v-if="submitted && !currentUser.entry_date">Fecha de ingreso es obligatoria.</small>
        </div>

        <div class="field">
          <label for="marital_status">Estado civil</label>
          <Dropdown v-model="currentUser.marital_status" :options="maritalStatusDropValues" :class="{ 'p-invalid': submitted && !currentUser.marital_status }" />
          <small class="p-invalid" v-if="submitted && !currentUser.marital_status">Estado civil es obligatorio.</small>
        </div>

        <div class="field">
          <label for="education_level">Nivel de Educación</label>
          <Dropdown v-model="currentUser.education_level" :options="educationLevelDropValues" :class="{ 'p-invalid': submitted && !currentUser.education_level }" />
          <small class="p-invalid" v-if="submitted && !currentUser.education_level">Nivel de Educación es obligatorio.</small>
        </div>

        <div class="field">
          <label for="eps">EPS</label>
          <Dropdown filter v-model="currentUser.eps" :options="epsDropValues" :class="{ 'p-invalid': submitted && !currentUser.eps }" />
          <small class="p-invalid" v-if="submitted && !currentUser.eps">EPS es obligatorio.</small>
        </div>

        <div class="field">
          <label for="pension_fund">Fondo de Pensión</label>
          <InputText id="pension_fund" v-model.trim="currentUser.pension_fund" :class="{ 'p-invalid': submitted && !currentUser.pension_fund }" />
          <small class="p-invalid" v-if="submitted && !currentUser.pension_fund">Fondo de Pensión es obligatorio.</small>
        </div>

        <div class="field">
          <label for="severance_fund">Fondo de Cesantías</label>
          <InputText id="severance_fund" v-model.trim="currentUser.severance_fund" :class="{ 'p-invalid': submitted && !currentUser.severance_fund }" />
          <small class="p-invalid" v-if="submitted && !currentUser.severance_fund">Fondo de Cesantías es obligatorio.</small>
        </div>

        <div class="field inputSwith">
          <label for="has_children">Tiene Hijos</label>
          <InputSwitch id="has_children" v-model="currentUser.has_children" />
        </div>

        <div class="field">
          <label for="housing_type">Tipo de Vivienda</label>
          <Dropdown v-model="currentUser.housing_type" :options="housingTypesDropValues" :class="{ 'p-invalid': submitted && !currentUser.housing_type }" />
          <small class="p-invalid" v-if="submitted && !currentUser.housing_type">Tipo de vivienda es obligatorio.</small>
        </div>

        <div class="field inputSwith">
          <label for="has_vehicle">Tiene Vehiculo</label>
          <InputSwitch id="has_vehicle" v-model="currentUser.has_vehicle" />
        </div>

        <div class="field" v-show="currentUser.has_vehicle">
          <label for="vehicle_type">Tipo de Vehiculo</label>
          <Dropdown v-model="currentUser.vehicle_type" :options="vehicleTypesDropValues" :class="{ 'p-invalid': submitted && !currentUser.vehicle_type }" />
          <small class="p-invalid" v-if="submitted && !currentUser.vehicle_type">Tipo de Vehiculo es obligatorio.</small>
        </div>

        <div class="field">
          <label for="household_size">Tamaño del Hogar</label>
          <InputNumber id="household_size" v-model.number="currentUser.household_size" :class="{ 'p-invalid': submitted && !currentUser.household_size }" />
          <small class="p-invalid" v-if="submitted && !currentUser.household_size">Tamaño del hogar es obligatorio.</small>
        </div>

        <div class="field">
          <label for="emergency_contact">Contacto de Emergencia</label>
          <InputText id="emergency_contact" v-model.trim="currentUser.emergency_contact" :class="{ 'p-invalid': submitted && !currentUser.emergency_contact }" />
          <small class="p-invalid" v-if="submitted && !currentUser.emergency_contact">Contacto de emergencia es obligatorio.</small>
        </div>

        <div class="field">
          <label for="shirt_size">Talla de Camisa</label>
          <Dropdown v-model="currentUser.shirt_size" :options="shirtSizesDropValues" :class="{ 'p-invalid': submitted && !currentUser.shirt_size }" />
          <small class="p-invalid" v-if="submitted && !currentUser.shirt_size">Talla de camisa es obligatoria.</small>
        </div>

        <div class="field">
          <label for="jeans_sweater_size">Talla de Pantalón</label>
          <Dropdown v-model="currentUser.jeans_sweater_size" :options="pantSizesDropValues" :class="{ 'p-invalid': submitted && !currentUser.jeans_sweater_size }" />
          <small class="p-invalid" v-if="submitted && !currentUser.jeans_sweater_size">Talla de pantalón es obligatoria.</small>
        </div>

        <div class="field inputSwith">
          <label for="food_handling_certificate">Certificado de Manejo de Alimentos</label>
          <InputSwitch id="food_handling_certificate" v-model="currentUser.food_handling_certificate" />
        </div>

        <div class="field">
          <label for="description">Comentarios</label>
          <Textarea id="description" v-model="currentUser.comments_notes" rows="5" cols="20" style="resize: none;" />
        </div>

        <div class="field">
          <label for="status">Estado</label>
          <Dropdown v-model="currentUser.status" :options="statusDropValues" :class="{ 'p-invalid': submitted && !currentUser.status }" />
          <small class="p-invalid" v-if="submitted && !currentUser.status">Estado es obligatorio.</small>
        </div>

        <div class="field" v-show="currentUser.entry_date && currentUser.status == 'inactivo'">
          <label for="exit_date">Fecha de Salida</label>
          <Calendar id="exit_date" v-model="currentUser.exit_date" />
        </div>

        <div class="field" v-show="currentUser.exit_date && currentUser.entry_date && currentUser.status == 'inactivo'">
          <label for="exit_reason">Motivo de Salida</label>
          <InputText id="exit_reason" v-model.trim="currentUser.exit_reason" />
          <small class="p-invalid" v-if="submitted && !currentUser.exit_reason">El motivo de salida es requerido.</small>
        </div>

        <div class="field">
          <label for="password">Clave</label>
          <Password toggleMask id="password" v-model.trim="currentUser.password" />
          <small class="p-invalid" v-if="submitted && !currentUser.password">la clave del usuario es obligatoria</small>
        </div>
      </div>

      <template #footer>
        <Button label="Salir" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
        <Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
      </template>
    </Dialog>
  </div>
</template>

<style scoped lang="scss">
/* =================== PALETA BLANCO Y NEGRO + FULL WIDTH =================== */
.theme-bw{
  --bg: #fafafa;
  --panel: #ffffff;
  --line: #e8e8e8;
  --text: #111;
  --muted: #7b7b7b;
  --shadow: rgba(0,0,0,.06);
  --shadow-strong: rgba(0,0,0,.12);
}
.page{
  width:100vw; max-width:100vw; padding: 1rem 2vw 2rem; background: var(--bg); color: var(--text);
}
.page-head{ display:flex; justify-content:center; margin-top:2rem; }
.title{ font-weight:800; letter-spacing:.5px; text-transform:uppercase; display:flex; gap:.6rem; align-items:center; }

/* =================== TOOLBAR =================== */
.toolbar{
  display:grid; gap:.75rem; margin:1rem auto 1.25rem; max-width:1600px;
  grid-template-columns: 1fr auto;
}
.toolbar-actions{ display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
.toolbar-filters{ display:flex; align-items:center; gap:1rem; justify-content:flex-end; flex-wrap:wrap; }
.switch-line{ display:flex; align-items:center; gap:.5rem; }
.hidden{ display:none; }

.search{ position:relative; display:inline-flex; align-items:center; }
.search i{ position:absolute; left:.6rem; color:var(--muted); font-size:.9rem; }
.search :deep(.p-inputtext){ padding-left:2rem; height:2.25rem; border-radius:999px; border:1px solid var(--line); background:var(--panel); }

.bw-btn{
  border-radius:999px;
  background:#f3f3f3 !important; border:1px solid var(--line) !important; color:#111 !important;
}
.bw-btn:hover{ background:#e9e9e9 !important; }

/* =================== TABLA =================== */
.fancy-table :deep(.p-datatable){
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: 0 10px 24px var(--shadow);
}
.table-head{ padding:.25rem .5rem; }
.fancy-table :deep(.p-datatable-thead > tr > th){
  background:#f3f3f3; border-color:var(--line); font-weight:700;
}
.fancy-table :deep(.p-datatable-tbody > tr){ transition: background .12s ease; }
.fancy-table :deep(.p-datatable-tbody > tr:hover){ background:#f6f6f6; }

/* =================== CELDAS =================== */
h6{ margin:0; padding:0; text-transform:lowercase; }
h6::first-letter{ text-transform:uppercase; }
.ucase{ text-transform:uppercase !important; }
.avatar{
  height:2rem; width:2rem; object-fit:cover; border-radius:50%; border:none; box-shadow:0 4px 10px var(--shadow);
  cursor: zoom-in;
}
.status-tag{
//   filter: grayscale(1) contrast(1.05);
  border:0 !important; padding:.25rem .6rem; border-radius:.4rem;
}

/* =================== DIALOG FOTO PERFIL =================== */
.dialog-photo{ padding:0; }
.photo-full{ width:100%; height:auto; object-fit:contain; display:block; }

/* =================== DIALOG FORM =================== */
.form-dialog :deep(.p-dialog-content){ padding-top:0 !important; }
.photo-uploader{
  position:relative; margin: .5rem 0 1rem;max-width: 30rem;margin: auto;
  border-radius:1rem; overflow:hidden; box-shadow:0 10px 24px var(--shadow);
}
.profile-preview{ width:100%;aspect-ratio: 1 / 1;  height:auto; display:block; object-fit:cover; }
.upload-ctrl{
  position:absolute; bottom:.6rem; right:.6rem; display:flex; gap:.4rem;
}
.icon-btn{
  width:2.25rem; aspect-ratio:1/1; border-radius:.5rem; display:inline-grid; place-items:center;
}
.bw-solid{ background:#111 !important; color:#fff !important; border:1px solid #111 !important; }
.bw-solid:hover{ background:#000 !important; border-color:#000 !important; }

/* GRID CAMPOS */
.form-grid{
  display:grid; grid-template-columns:1fr; gap:.75rem;
}
.field{ display:flex; flex-direction:column; gap:.35rem; }
.inputSwith{ display:flex; justify-content:space-between; align-items:center; margin: .5rem 0; }

/* =================== ACCIONES POR FILA =================== */
.row-actions{ display:flex; gap:.5rem; justify-content:center; align-items:center; }

/* =================== RESPONSIVE =================== */
@media (min-width: 640px){
  .form-grid{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px){
  .toolbar{ grid-template-columns: 1fr; }
  .toolbar-filters{ justify-content:flex-start; }
}
@media (max-width: 576px){
  .icon-btn{ width:2rem; }
}
</style>
