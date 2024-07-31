<script setup>

import { FilterMatchMode, PrimeIcons } from 'primevue/api';
import { ref, onMounted, onBeforeMount, computed } from 'vue';
import { useToast } from 'primevue/usetoast';
import { departamentos, findByDepartament } from '@/service/CountryService.js'
import { jsPDF } from "jspdf";
import { roles, obtenerRolesYActualizar, getRoles } from '@/service/roles';
import {formatoPesosColombianos} from '../../service/formatoPesos.js' 
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
import { getUsers, } from '@/service/userServices'
import { URI } from "@/service/conection.js"
// import logo from '@/images/logo.png'
import { getUserRole } from '@/service/valoresReactivosCompartidos.js'
import * as XLSX from 'xlsx';
import Loading from '../../components/Loading.vue';
// import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
const toast = useToast();
const users = ref([]);
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


const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: 'array' });

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    excelData.value = jsonData;
    //   console.log(JSON.parse(JSON.stringify(excelData.value)));

    const json = JSON.parse(JSON.stringify(excelData.value))
    // Envía una copia no reactiva de los datos
    processAndSendData(json);
};

// console.log(await findSiteByName('prueba'))


const obtenerDatosFiltrados = () => {
    if (!filters.value.global.value) {
        return users.value;
    }
    const filtroGlobal = filters.value.global.value.trim().toLowerCase();
    return users.value.filter(user => {
        // Aquí asumimos que `user` es un objeto y comprobamos cada propiedad
        // Cambia esto según la estructura de tus datos
        return Object.values(user).some(value =>
            value && value.toString().trim().toLowerCase().includes(filtroGlobal)
        );
    });
};

const onImageError = (gender, event) => {


    const genders = {
        masculino: '/images/male-avatar.png',
        femenino: '/images/female-avatar.png',
        default: '/images/who.png'
    }


    if (!gender || gender == '' || gender == 'N/A') {
        event.target.src = genders.default
    } else
        event.target.src = genders[gender.trim().toLowerCase()]
}



function normalizarCedula(cedula) {
    // Reemplazar puntos, comas y espacios con una cadena vacía
    const cedulaNormalizada = cedula.toString().replace(/[.,\s]/g, '');

    return cedulaNormalizada;
}


function validarCargo(cargo) {
    // Convertir el cargo a minúsculas y eliminar espacios al inicio y al final para comparar de manera insensible a mayúsculas y minúsculas
    const cargoLowerCase = cargo.toString().trim().toLowerCase();

    // Recorrer la lista predefinida y comparar con cada elemento
    for (let i = 0; i < PositionDropValues.value.length; i++) {
        // Aplicar toLowerCase y trim al elemento actual de la lista
        let valorLista = PositionDropValues.value[i].trim().toLowerCase();

        // Verificar si el cargo está en la lista predefinida
        if (valorLista === cargoLowerCase) {
            // Si está en la lista, devuelve el valor original de la lista
            return PositionDropValues.value[i];
        }
    }

    // Si no está en la lista, devuelve un valor predeterminado o null
    return null; // O puedes devolver un mensaje de error, por ejemplo: "Cargo no válido"
}


function validar_marital_status(marital_status) {
    // Convertir el cargo a minúsculas y eliminar espacios al inicio y al final para comparar de manera insensible a mayúsculas y minúsculas
    const Marital_lowecase = marital_status?.toString()?.trim()?.toLowerCase();

    // Recorrer la lista predefinida y comparar con cada elemento
    for (let i = 0; i < maritalStatusDropValues.value.length; i++) {
        // Aplicar toLowerCase y trim al elemento actual de la lista
        let valorLista = maritalStatusDropValues.value[i].trim().toLowerCase();

        // Verificar si el cargo está en la lista predefinida
        if (valorLista === Marital_lowecase) {
            // Si está en la lista, devuelve el valor original de la lista
            return maritalStatusDropValues.value[i];
        }
    }

    // Si no está en la lista, devuelve un valor predeterminado o null
    return maritalStatusDropValues.value[0]; // O puedes devolver un mensaje de error, por ejemplo: "Cargo no válido"
}


function normalizarCadena(cadena) {
    return cadena.trim().toLowerCase();
}


function encontrarCoincidenciaMasCercana(valor, valoresPosibles) {
    let mejorCoincidencia = '';
    let mejorPuntaje = 0; // Puedes ajustar el umbral de coincidencia según sea necesario

    valoresPosibles.forEach(opcion => {
        // Aquí puedes implementar un algoritmo de comparación, como la distancia de Levenshtein
        let puntajeActual = calcularPuntajeDeSimilitud(valor, opcion);
        if (puntajeActual > mejorPuntaje) {
            mejorPuntaje = puntajeActual;
            mejorCoincidencia = opcion;
        }
    });

    return mejorCoincidencia;
}

const processAndSendData = async (data) => {


    const reporte = []
    let sites = await getSites()
    console.log(sites)

    const nombresSedesDisponibles = sites.map(item => item.site_name).join(", ");

    for (let employer of data) {
        // Transformar los datos del empleado



        if (!employer.Documento || normalizarCedula(employer.Documento) === '' || normalizarCedula(employer.Documento) === 'null') {
            // Agregar al reporte que el usuario no tiene cédula y no se puede registrar
            reporte.push(`El usuario con nombre ${employer.Nombre} no tiene cédula y no se puede registrar.`);
            continue; // Saltar al siguiente elemento en el bucle
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

        // Asignar género
        const generosValidos = ['masculino', 'femenino']; // Asegúrate de que esta lista contenga todos los géneros válidos
        const generoNormalizado = employer.Género ? employer.Género.trim().toLowerCase() : '';
        const gender = generosValidos.includes(generoNormalizado) ? generoNormalizado : '';



        if (!isValidDate(employer["Fecha de Nacimiento"])) {
            reporte.push(`La fecha de nacimiento del usuario con nombre ${employer.Nombre} (${employer["Fecha de Nacimiento"]}) no es válida. Se sugiere revisar y corregir. formato permitido AAAA-MM-DD`);
            continue; // Saltar al siguiente empleado
        }
        const birth_date = typeof employer["Fecha de Nacimiento"] === 'string'
            ? employer["Fecha de Nacimiento"]
            : excelDateToDate(employer["Fecha de Nacimiento"]);

        // Verificar y asignar fecha de ingreso
        if (!isValidDate(employer["Fecha de Ingreso"])) {
            reporte.push(`La fecha de ingreso del usuario con nombre ${employer.Nombre} (${employer["Fecha de Ingreso"]}) no es válida. Se sugiere revisar y corregir. formato permitido AAAA-MM-DD`);
            continue; // Saltar al siguiente empleado
        }
        const entry_date = typeof employer["Fecha de Ingreso"] === 'string'
            ? employer["Fecha de Ingreso"]
            : excelDateToDate(employer["Fecha de Ingreso"]);

        // Asignar fecha de salida
        const exit_date = isValidDate(employer["Fecha de Salida"])
            ? (typeof employer["Fecha de Salida"] === 'string'
                ? employer["Fecha de Salida"]
                : excelDateToDate(employer["Fecha de Salida"]))
            : null;



        const transformedEmployer = {


            name: employer.Nombre || 'SIN NOMBRE',
            dni: employer.Documento ? normalizarCedula(employer.Documento) : '',
            address: employer?.Direccion?.toString()?.trim()?.toLowerCase() || 'N/A',
            position: validarCargo(employer.Cargo) || '',
            site_id: sites.find(item => item.site_name?.trim().toLowerCase().includes(employer.Sede.trim().toLowerCase()))?.site_id || 12,


            status: status,
            gender: gender,

            birth_date: birth_date,
            entry_date: entry_date,
            exit_date: exit_date,


            phone: employer.Teléfono ? employer.Teléfono.toString() : '  ',
            email: employer["Correo Electrónico"] || null,
            exit_reason: employer["Motivo de Salida"] || null,
            comments_notes: "",
            authorization_data: true,

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
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transformedEmployer),
            });

            if (!response.ok) {
                throw new Error(`Error en el envío del empleado: ${employer.Nombre}`);
            }

            const responseData = await response.json();
            console.log(`Empleado ${employer.id} enviado con éxito:`, responseData);
            toast.add({ severity: 'success', summary: `Usuario ${employer.Nombre} registrado`, detail: 'Hecho', life: 3000 });
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    }

    console.log(reporte)

    getUsers().then(data => users.value = data)

    // const blob = new Blob([reporte.join("\n")], { type: 'text/plain' });

    // // Crear un enlace para descargar el archivo
    // const downloadLink = document.createElement("a");
    // const url = URL.createObjectURL(blob);
    // downloadLink.href = url;
    // downloadLink.download = "reporte.txt";

    // // Simular un click en el enlace para iniciar la descarga
    // document.body.appendChild(downloadLink);
    // downloadLink.click();

    // // Limpiar y remover el enlace
    // document.body.removeChild(downloadLink);
    // URL.revokeObjectURL(url);
    if (reporte.length <= 0) {
        reporte.push(`Enhorabuena, todo se ha cargado con exito`)
    }
    generatePDF(reporte)
};


const generatePDF = (reporte) => {
    const doc = new jsPDF();
    let y = 10; // Posición inicial en el eje Y para el texto

    const fontSize = 11; // Tamaño de la fuente
    const interlineSpacing = 0.5; // Factor de interlineado
    const lineHeight = fontSize * interlineSpacing; // Altura de la línea
    const pageHeight = doc.internal.pageSize.height; // Altura total de la página
    const margin = 10; // Margen inferior para evitar desbordamiento

    // Configurar la fuente a Helvetica (similar a Arial) y tamaño 11
    doc.setFont("Helvetica");
    doc.setFontSize(fontSize);

    reporte.forEach((mensaje, index) => {
        // Añadir un salto de línea entre mensajes, excepto antes del primero
        if (index > 0) {
            y += lineHeight;
            if (y > pageHeight - margin) {
                doc.addPage();
                y = 10;
            }
        }

        const lines = doc.splitTextToSize(mensaje, 180); // Ajustar el texto a la anchura de la página
        lines.forEach((line) => {
            if (y + lineHeight > pageHeight - margin) {
                doc.addPage();
                y = 10;
            }
            doc.text(line, 10, y);
            y += lineHeight;
        });
    });

    doc.save('reporte.pdf'); // Descargar el PDF
};





function isValidDate(dateStr) {
    if (!dateStr) return false;
    const date = (typeof dateStr === 'string') ? new Date(dateStr) : excelDateToDate(dateStr);
    return date instanceof Date && !isNaN(date);
}
function formatDate(dateString) {
    // Intenta parsear la fecha. El formato exacto dependerá de cómo
    // se vean las fechas en tus datos de Excel.
    const date = new Date(dateString);
    console.log(dateString)

    // Comprueba si la fecha es válida antes de intentar formatearla.
    if (isNaN(date.getTime())) {
        return null; // Retorna null si la fecha no es válida.
    }

    // Formatea la fecha al formato 'YYYY-MM-DD'.
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}




onBeforeMount(() => {
    initFilters();
    getSites()
});


const cambiar = (event) => {
    op.value.toggle(event);
};

const cambiar2 = (event) => {
    op2.value.toggle(event);
};

onMounted(async () => {
    getUsers().then(data => {
        users.value = data
        charging.value = false

    })

    getRoles().then(data => PositionDropValues.value = data)


});



// const formatCurrency = (value) => {
//     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// };

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
    // al agregar un nuevo usuario
    resetValuesNewEntry()
    submitted.value = false;
    productDialog.value = true;
    adding.value = true
    file.value = null
    urlPhotoProfile.value = null

};

function excelDateToDate(excelDateNum) {
    // Fecha base de Excel (1 de enero de 1900)
    const baseDate = new Date(1900, 0, 1);

    // Días a restar (ajuste por el error del año bisiesto en Excel)
    const dayOffset = excelDateNum > 60 ? -2 : -1;

    // Agregar la cantidad de días del número de Excel a la fecha base
    const date = new Date(baseDate.getTime());
    date.setDate(baseDate.getDate() + excelDateNum + dayOffset);

    return date;
}
const asignDropValueToEdit = (user) => {

    // statusDropValue.value = findByName(user.status, statusDropValues)
    // console.log(statusDropValue.value)
    // GenderDropValue.value = findByName(user.gender, GenderDropValues)
    // PositionDropValue.value = findByName(user.position, PositionDropValues)
    SiteDropValue.value = findSiteById(user.site_id)
    departamentDropValue.value = user.birth_department
    cityDropValue.value = user.birth_city
    statusDropValue.value = user.status
    PositionDropValue.value = PositionDropValues.value.filter(rol => rol.title?.trim().toLowerCase() == user.position?.trim().toLowerCase())[0] || {}
    currentBoss.value = users.value.filter(u => (u.id == user.boss_id))[0] || {}

    // bloodTypesDropValue.value = findByType(user.blood_type, bloodTypesDropValues)
    // maritalStatusDropValue.value = findByName(user.marital_status, maritalStatusDropValues)
    // educationLevelDropValue.value = findByName(user.education_level, educationLevelDropValues)
    // employmentContractTypeDropValue.value = findByName(user.contract_type, employmentContractTypeDropValues)
    // epsDropValue.value = findByName(user.eps, epsDropValues)
    // housingTypesDropValue.value = findByName(user.housing_type, housingTypesDropValues)
    // vehicleTypeDropValue.value = findByName(user.vehicle_type, vehicleTypesDropValues)
    // shirtSizesDropValue.value = findByName(user.shirt_size, shirtSizesDropValues)
    // pantSizesDropValue.value = findByName(user.jeans_sweater_size, pantSizesDropValues)


    // switchHasChildren.value = user.has_children?? false
    // swithHasVehicle.value = user.has_vehicle?? false
    // switchFoodHandlingCertificate.value  = user.food_handling_certificate?? false
    // SwitchAuthorizationData.value = user.authorization_data?? false


    // currentUseruser.food_handling_certificate_number = !switchFoodHandlingCertificate.value ? null:data.food_handling_certificate_number ;
    // currentUseruser.vehicle_type = !swithHasVehicle.value ? null : data.vehicle_type;
    // currentUseruser.has_vehicle = !swithHasVehicle.value ? null : data.has_vehicle;
    // // checkDates(user)

    console.log(user)
}



const deleteUser = async (userId) => {
    const confirmation = confirm("¿Estás seguro de que quieres eliminar este usuario?");
    if (confirmation) {
        try {
            const response = await fetch(`${URI}/employer/${userId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Error al eliminar el usuario: ${response.statusText}`);
            }
            toast.add({ severity: 'success', summary: 'Usuario eliminado', detail: 'El usuario ha sido eliminado con éxito.', life: 3000 });
            // Actualizar la lista de usuarios
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

    //valores booleanos que vienen de mysql son uno y cero

    // despues de alterar el edit user lo enviamos al valor del usuario actual
    currentUser.value = { ...editUser };
    productDialog.value = true;
    adding.value = false
};


const hideDialog = () => {
    productDialog.value = false;
    submitted.value = false;
    adding.value = false
    resetValuesNewEntry()
    currentUser.value = {};
};



const asingDataToSave = () => {
    const { ...data } = currentUser.value;

    // primero asignamos los epsDropValue
    //     data.gender = GenderDropValue.value.name
    //     // data.position = PositionDropValue.value.name

    //     data.marital_status = maritalStatusDropValue.value.name
    //     data.eps = epsDropValue.value.name
    //     data.blood_type = bloodTypesDropValue.value.type
    //     data.education_level = educationLevelDropValue.value.name
    //     data.contract_type = employmentContractTypeDropValue.value.name
    //     data.shirt_size = shirtSizesDropValue.value.name
    //     data.jeans_sweater_size = pantSizesDropValue.value.name
    //     data.housing_type = housingTypesDropValue.value.name
    //     data.status = statusDropValue.value.name
    // // Luego los swithees
    // data.food_handling_certificate = switchFoodHandlingCertificate.value
    // data.has_children = switchHasChildren.value
    // data.has_vehicle = switchHasChildren.value
    // data.authorization_data = SwitchAuthorizationData.value
    // y por ultimo las dependencias de las swithes

    // enviar el id de la sede en lugar del nombre de esta
    data.site_id = SiteDropValue.value.site_id
    data.food_handling_certificate_number = 1;
    // swithHasVehicle.value? data.vehicle_type = null:data.vehicle_type = vehicleTypeDropValue.value
    data.birth_department = departamentDropValue.value
    data.birth_city = cityDropValue.value
    data.boss_id = currentBoss.value.id
    data.position = PositionDropValue.value.title

    // data.status = currentUser.status
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
        data.exit_date = null
        data.exit_reason = null
        data.comments_notes = data.comments_notes ?? ''
    }

    currentUser.value = { ...data }
    return data

}

const saveProduct = async () => {
    let Method = ""
    let queryUrl = ""

    const data = asingDataToSave()

    adding.value ? Method = "POST" : Method = "PUT"

    adding.value ? queryUrl = `${URI}/employer` : queryUrl = `${URI}/employer/${currentUser.value.id}`


    // Configuración de la solicitud
    const requestOptions = {
        method: Method,
        headers: {
            'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido adecuado
        },
        body: JSON.stringify(data)
    };

    // Realizar la solicitud Fetch
    await fetch(queryUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            file.value ? uploadUserPhotoProfile(file.value, data.dni) : ''

            adding.value ? toast.add({ severity: 'success', summary: 'Usuario registrado', detail: 'Hecho', life: 3000 }) :
                toast.add({ severity: 'success', summary: 'Usuario actualizado', detail: 'Hecho', life: 3000 })

            hideDialog()

            return response.json();
        })
        .then(data => {
            // Aquí puedes trabajar con los datos actualizados
            console.log('Datos actualizados:', data);

            // Cambiar el valor de serverResponse de manera reactiva
            serverResponse.value = data;

            // Verificar si la respuesta del servidor es 'ok' y actualizar productDialog

        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            toast.add({ severity: 'error', summary: 'llene todos los campos', detail: '', life: 3000 })

        });


    console.log(currentUser.value)
    getUsers().then(data => users.value = data)
    console.log(data);
    console.log(serverResponse.value)
    submitted.value = true

}
const toggle = (event) => {
    op.value.toggle(event);
};


// const exportCSV = () => {
//     dt.value.exportCSV();
// };


const exportCSV = () => {



    const datosFiltrados = obtenerDatosFiltrados();
    const data = datosFiltrados.map(user => ({
        "Id": user.id,
        "Nombre": user.name,
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
        // Agrega aquí otros campos si es necesario
    }));


    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet["!cols"] = [
        { wch: Math.max(8, "Id".length) },
        { wch: Math.max(40, "Nombre".length) },
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
        { wch: Math.max(20, "Comentarios/Notas".length) }]




    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

    XLSX.writeFile(workbook, "Base de datos empleados Salchimonster.xlsx");







};


const exportDotacion = () => {
    const datosFiltrados = obtenerDatosFiltrados();
    const data = datosFiltrados.map(user => ({
        "Id": user.id,
        "Nombre": user.name,
        "Sede": user.site_name,
        "Estado": user.status,
        "Talla de Camisa": user.shirt_size,
        "Talla de Pantalón": user.jeans_sweater_size,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    // Establecer el ancho de las columnas
    worksheet["!cols"] = [
        { wch: 6 },  // 'Id' column
        { wch: 40 }, // 'Nombre' column
        { wch: 10 },  // 'Sede' column
        { wch: 8 },  // 'Estado' column
        { wch: 15 }, // 'Talla de Camisa' column
        { wch: 15 }  // 'Talla de Pantalón' column
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
    XLSX.writeFile(workbook, "Base de datos empleados Salchimonster.xlsx");
};
// const confirmDeleteSelected = () => {
//     deleteProductsDialog.value = true;
// };
// const deleteSelectedProducts = () => {
//     products.value = products.value.filter((val) => !selectedProducts.value.includes(val));
//     deleteProductsDialog.value = false;
//     selectedProducts.value = null;
//     toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
// };

const downloadEmptyTemplate = () => {
    // Define los encabezados de la plantilla
    const headers = [{
        "Id": '',
        "Nombre": '',
        "Documento": '',
        "Direccion": '',
        "Cargo": '',
        "Sede": '',
        "Estado": '',
        "Género": '',
        "Fecha de Nacimiento": '',
        "Teléfono": '',
        "Correo Electrónico": '',
        "Fecha de Ingreso": '',
        "Fecha de Salida": '',
        "Motivo de Salida": '',
        "Autorización de Datos": '',
        "País de Nacimiento": '',
        "Departamento de Nacimiento": '',
        "Ciudad de Nacimiento": '',
        "Tipo de Sangre": '',
        "Estado Civil": '',
        "Nivel de Educación": '',
        "Tipo de Contrato": '',
        "EPS": '',
        "Fondo de Pensión": '',
        "Fondo de Cesantías": '',
        "Tiene Hijos": '',
        "Tipo de Vivienda": '',
        "Tiene Vehiculo": '',
        "Tipo de Vehiculo": '',
        "Tamaño del Hogar": '',
        "Contacto de Emergencia": '',
        "Talla de Camisa": '',
        "Talla de Pantalón": '',
        "Certificado de Manejo de Alimentos": '',
        "Número de Certificado de Manejo de Alimentos": '',
        "Salario": '',
        "Comentarios/Notas": ''
        // Agrega aquí otros encabezados si es necesario
    }];

    // Crea una hoja de cálculo con solo los encabezados
    const worksheet = XLSX.utils.json_to_sheet(headers);


    worksheet["!cols"] = [
        { wch: Math.max(8, "Id".length) },
        { wch: Math.max(40, "Nombre".length) },
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
        { wch: Math.max(20, "Comentarios/Notas".length) }]


    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Plantilla");

    // Escribe el archivo Excel
    XLSX.writeFile(workbook, "Plantilla_Empleados_Salchimonster.xlsx");
};


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


// const onUpload = (event) => {
//   if (event.files.length > 0) {
//     const file = event.files[0];
//     // Crear una URL temporal para mostrar la imagen
//     imageUrlUserAdd.value = URL.createObjectURL(file);
//     console.log(URL.createObjectURL(file))
//   } else {
//     // Borrar la vista previa si no se selecciona ningún archivo
//     imageUrlUserAdd.value = null;
//   }


// };


const onUpload = (event) => {
    if (event.files.length > 0) {
        const file = event.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            // Cuando el archivo se ha leído, asigna la URL al imagePreview
            imageUrlUserAdd.value = reader.result;
        };

        reader.readAsDataURL(file);
    } else {
        // Borrar la vista previa si no se selecciona ningún archivo
        imageUrlUserAdd.value = null;
    }
};



const handleFileChange = (event) => {
    // Accede al archivo seleccionado a través del objeto de evento
    const selectedFile = event.target.files[0];


    if (selectedFile) {
        // Aquí puedes realizar acciones con el archivo seleccionado, como cargarlo al servidor
        console.log('Archivo seleccionado:', selectedFile);
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


    <div class="grid   mx-0 xl:mx-4 p-0 " style="margin-top: 3rem;">

        <ConfirmDialog></ConfirmDialog>

        <Dialog class="p-0 " v-model:visible="visibleImage" modal header="Foto de Perfil" :style="{ width: '30rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw', 'padding': 0 }">




            <img class="p-0 m-0" style="width: 100%;  ; object-fit: contain;" :src="bigImage" alt="" srcset="">


        </Dialog>

        <!-- {{ getUserRole() }} -->
        <div class="col-12 m-0 p-0 ">

            <p class="mb-2 text-2xl text-center " style="font-weight: bold;margin-top: 3rem;">
                                <i class="fa-solid fa-users"></i>
                               GESTION DEL PERSONAL
                            </p>
            <div class="col-12 p-0 m-0 ">
                <Toast />




                <div  class="shadow-2 my-4 p-1  " style="display: flex; overflow-x: auto;">


                    <input ref="cargarExcel" style="display:none" type="file" @change="handleFileUpload" />


                    <!-- <Button  text severity="success" style="height: 2.5rem;color: var(--text-color);" label="SUBIR EXCEL  " icon="pi pi-plus"
                        class="p-button-error    text-sm " @click="$refs.cargarExcel.click();" /> -->


                    <Button text severity="info" style="height: 2.5rem;color: var(--text-color);" label="REGISTRAR USUARIO" icon="pi pi-plus"
                        class="   text-sm " @click="openNew" />


                    <Button text style="height: 2.5rem;color: var(--text-color);" label="EXPORTAR EXCEL" icon="pi pi-upload"
                        class="p-button-help      text-sm " @click="exportCSV($event)" />


                    <Button text style="height: 2.5rem;color: var(--text-color);" label="EXPORTAR DOTACION" icon="pi pi-upload"
                        class="p-button-danger  text-sm  " @click="exportDotacion()" />


                </div>



                <DataTable ref="dt" :value="users" v-model:selection="selectedProducts" dataKey="id" :paginator="true"
                    :rows="10" :filters="filters" 
                    stripedRows showGridlines 
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5,10, 15, 25, 100]"
                    currentPageReportTemplate="Mostrando {first} to {last} de {totalRecords} empleados"
                    responsiveLayout="scroll" scrollable >
                    <template #header style="z-index:200">
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center"
                            style="background-color: ;">
                           <h5>
                            <b>
                                Empleados
                            </b>
          
                           </h5>

                            <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText class="" v-model="filters['global'].value"
                                    placeholder="Buscar empleado..." />
                            </span>
                        </div>
                    </template>

                    <Column class="py-2" selectionMode="multiple" headerStyle="width: 3rem; " ></Column>

                    <Column class="py-2" field="id" header="Id" :sortable="true"
                        headerStyle="width:min-content; min-width:min-content; ">
                        <template #body="user">
                           
                            <h6>{{ user.data.id }}</h6>
                        </template>
                    </Column>

                    <Column class="py-2" header="Foto" headerStyle="width:5%; min-width:3rem;">
                        <template #body="user">
                            <!-- <span class="p-column-title">Foto</span> -->


                            <img @click="verIMagen(user.data.dni)"
                                :src="`${URI}/read-product-image/96/employer-${user.data.dni}`"
                                @error="onImageError(user.data.gender, $event)" class="shadow-2 img-profile"
                                style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />


                            
                        </template>
                    </Column>




                    <Column class="py-2" field="name" header="Nombre" :sortable="true"
                        headerStyle="width:20%; min-width:20rem; ">
                        <template #body="user">
                            <h6 style="text-transform: uppercase;">{{ user.data.name }}</h6> 
                        </template>
                    </Column>

                    <Column class="py-2" field="boss_id" header="Id del jefe" :sortable="true"
                        headerStyle="width:5%; min-width:10rem; ">
                        <template #body="user">
                          <h6> {{ user.data?.boss_id || 'No asignado' }}</h6> 
                        </template>
                    </Column>


                    <Column class="py-2" field="dni" header="Documento" :sortable="true"
                        headerStyle="width:14%; min-width:10rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.dni }}
                            </h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="address" header="Direccion" :sortable="true"
                        headerStyle="width:14%; min-width:15rem;">
                        <template #body="user">
                         <h6>  {{ user.data.address }}</h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="position" header="Cargo" :sortable="true"
                        headerStyle="width:14%; min-width:10rem;">
                        <template #body="user">
                    
                           <h6> {{ user.data.position }}</h6>
                        </template>
                    </Column>

                    <Column class="py-2" field="site_name" header="Sede" :sortable="true"
                        headerStyle="width:14%; min-width:5rem;">
                        <template #body="user">
                   <h6>
                    {{ user.data.site_name }}
                   </h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="status" header="Estado" :sortable="true"
                        headerStyle="width:14%; min-width:5rem;">
                        <template #body="user">

                            <Tag class="px-4" :severity="user.data.status == 'activo'? 'success' : 'danger'">

                            {{ user.data.status?.toLowerCase() }}
                      
                            </Tag>
                          
                          
                        </template>
                    </Column>


                    <Column class="py-2" field="gender" header="Género" :sortable="true"
                        headerStyle="width:10%; min-width:8rem;">
                        <template #body="user">
              <h6>
                {{ user.data.gender || 'N/A' }}
              </h6>
                            
                        </template>
                    </Column>

                    <Column class="py-2" field="birth_date" header="Fecha de Nacimiento" :sortable="true"
                        headerStyle="width:12%; min-width:10rem;">
                        <template #body="user">
     
                            <h6>
                                {{ user.data.birth_date }}
                            </h6>
             
                        </template>
                    </Column>

                    <Column class="py-2" field="phone" header="Teléfono" :sortable="true"
                        headerStyle="width:12%; min-width:10rem;">
                        <template #body="user">
                  <h6>
                    {{ user.data.phone }}
                  </h6>
             
                        </template>
                    </Column>

                    <Column class="py-2" field="email" header="Correo Electrónico" :sortable="true"
                        headerStyle="width:10%; min-width:5rem;">
                        <template #body="user">
                         <h6>
                            {{ user.data.email || 'No proporcionado'}}
                         </h6>
                      
                        </template>
                    </Column>

                    <Column class="py-2" field="entry_date" header="Fecha de Ingreso" :sortable="true"
                        headerStyle="width:12%; min-width:10rem;">
                        <template #body="user">
          
                            <h6>
                                {{ user.data.entry_date }}
                            </h6>
                          
                        </template>
                    </Column>

                    <Column class="py-2" field="exit_date" header="Fecha de Salida" :sortable="true"
                        headerStyle="width:12%; min-width:10rem;">
                        <template #body="user">
          
                            <h6>
                                {{ user.data.exit_date || '.........................'}}
                            </h6>
                    
                        </template>
                    </Column>

                    <Column class="py-2" field="exit_reason" header="Motivo de Salida" :sortable="true"
                        headerStyle="width:14%; min-width:15rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.exit_reason || '..............................................'}}
                            </h6>
                           
                        </template>
                    </Column>

                   

                    <Column class="py-2" field="birth_country" header="País de Nacimiento" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.birth_country || 'N/a'}}
                            </h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="birth_department" header="Departamento de Nacimiento" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.birth_department || 'N/a'}}
                            </h6>
                          
                        </template>
                    </Column>

                    <Column class="py-2" field="birth_city" header="Ciudad de Nacimiento" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                            <h6> {{ user.data.birth_city || 'N/a'}} </h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="blood_type" header="Tipo de Sangre" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.blood_type || '...............'}}
                            </h6>
                            
                        </template>
                    </Column>

                    <Column class="py-2" field="marital_status" header="Estado Civil" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                          <h6>
                            {{ user.data.marital_status || 'N/a'}}
                          </h6>
                        
                        </template>
                    </Column>

                    <Column class="py-2" field="education_level" header="Nivel de Educación" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                           <h6>
                            {{ user.data.education_level || '............................'}}
                           </h6>
                         
                        </template>
                    </Column>
                    <Column class="py-2" field="contract_type" header="Tipo de Contrato" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                           <h6>
                            {{ user.data.contract_type_name || 'N/a'}}
                           </h6>
                         
                        </template>
                    </Column>

                    <Column class="py-2" field="eps" header="EPS" :sortable="true"
                        headerStyle="width:18%; min-width:15rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.eps || 'N/a'}}
                            </h6>
                        </template>
                    </Column>

                    <Column class="py-2" field="pension_fund" header="Fondo de Pensión" :sortable="true"
                        headerStyle="width:18%; min-width:15rem;">
                        <template #body="user">
                            <span class="p-column-title">Fondo de Pensión</span>
                           <h6>
                            {{ user.data.pension_fund || 'N/a' }}
                           </h6> 
                        </template>
                    </Column>

                    <Column class="py-2" field="severance_fund" header="Fondo de Cesantías" :sortable="true"
                        headerStyle="width:18%; min-width:15rem;">
                        <template #body="user">
                    <h6>
                        {{ user.data.severance_fund || 'N/a'}}
                    </h6>
                          
                        </template>
                    </Column>

                    <Column class="py-2" field="has_children" header="Tiene Hijos" :sortable="true"
                        headerStyle="width:18%; min-width:15rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.has_children == 1 ? 'si' : 'no' }}
                            </h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="housing_type" header="Tipo de Vivienda" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
             
                            <h6>
                                {{ user.data.housing_type || '..............................'}}
                            </h6>
             
                        </template>
                    </Column>

                    <Column class="py-2" field="has_vehicle" header="Tiene Vehiculo" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                            <h6>
                                {{ user.data.has_vehicle == 1 ? "si" : "no" }}
                            </h6>
                            
                        </template>
                    </Column>

                    <Column class="py-2" field="vehicle_type" header="Tipo de Vehiculo" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                         <h6>
                            {{ user.data.vehicle_type || 'N/a' }}
                         </h6>
                        
                        </template>
                    </Column>

                    <Column class="py-2" field="household_size" header="Tamaño del Hogar" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                         <h6>
                            {{ user.data.household_size }}
                         </h6>
                    
                        </template>
                    </Column>

                    <Column class="py-2" field="emergency_contact" header="Contacto de Emergencia" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                           <h6>
                            {{ user.data.emergency_contact || 'No proporcionado'}}
                           </h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="shirt_size" header="Talla de Camisa" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                  <h6>
                    {{ user.data.shirt_size || 'N/a'}}
                  </h6>
                           
                        </template>
                    </Column>

                    <Column class="py-2" field="jeans_sweater_size" header="Talla de Pantalón" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                         <h6>
                            {{ user.data.jeans_sweater_size || 'N/a'}}
                         </h6>
                       
                        </template>
                    </Column>

                    <Column class="py-2" field="food_handling_certificate" header="Cert. Man. de Alimentos"
                        :sortable="true" headerStyle="width:30rem; min-width:10rem;">
                        <template #body="user">
                                <h6>
                                    {{ user.data.food_handling_certificate == 1 ? 'si' : 'no' }}
                                </h6>
                                            
                        </template>
                    </Column>

                    <!-- <Column class="py-2" field="food_handling_certificate_number"
                        header="Número de Certificado de Manejo de Alimentos" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
                           
                            {{ user.data.food_handling_certificate_number }}
                        </template>
                    </Column> -->

                    <Column class="py-2" field="salary" header="Salario" :sortable="true"
                        headerStyle="width:18%; min-width:10rem;">
                        <template #body="user">
         
                           <h6>
                            {{ formatoPesosColombianos(user.data.contract_salary) }}
     
                           </h6> 
                        </template>
                    </Column>

                    <Column class="py-2" field="comments_notes" header="Comentarios/Notas" :sortable="false"
                        headerStyle="width:500px; min-width:15rem;">
                        <template #body="user">
<h6>
    {{ user.data.comments_notes }}
</h6>

                        </template>
                    </Column>

                    <Column class="py-2" headerStyle="min-width:5rem;" style="" header="Acciones" frozen
                        alignFrozen="right">
                        <template #body="user" style="margin: auto;">
                            <div style="width:auto; display: flex;gap:1rem; justify-content: center
                            ;">
                                <Button  style="width: 2rem; aspect-ratio: 1 / 1;margin: auto;"
                                    icon="pi pi-pencil" class=" p-button-warning " @click="editProduct(user.data)" />

                                    <Button style="width: 2rem; aspect-ratio: 1 / 1;margin: auto;"
        icon="pi pi-trash" class="p-button-danger" @click="deleteUser(user.data.id)" />

                            </div>


                        </template>

                    </Column>

                </DataTable>


                <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Registrar un Usuario"
                    :modal="true" class="p-fluid">

                    <!-- <img src="http://localhost:8000/read-site-cover/IMPERIO%20CANEY" :alt="currentUser.id"
                        v-if="currentUser.id" width="150" class="mt-0 mx-auto mb-5 block shadow-2" /> -->
                    <!-- <FileUpload /> -->

                    <!-- <img :src="imageUrlUserAdd.value" :alt="currentUser.id"
                         width="150" class="mt-0 mx-auto mb-5 block shadow-2"  id="imagePreview"/> -->



                    <!-- <FileUpload /> -->
                    <div class="mt-6 mb-5" style="position: relative;">
                        <img class="img-profile-add m-auto"
                            style="width: 100%;border-radius: 1rem; margin: auto; object-fit: cover;"
                            :src="adding || !adding && urlPhotoProfile ? urlPhotoProfile : `${URI}/read-product-image/600/employer-${currentUser.dni}` || urlPhotoProfile"
                            alt="">
                        <div class="field" style="position: absolute; bottom: 0; right: 1rem;">
                            <input ref="fileInput" type="file" accept="image/*" @change="handleFileChange"
                                style="display: none;">
                            <Button severity="info" class="" style="width: min-content;"
                                @click="$refs.fileInput.click();">
                                <i class="fa-solid fa-camera"></i>

                            </Button>

                        </div>
                    </div>


                    <div class="field">
                        <label for="name">Nombre</label>
                        <InputText id="name" v-model.trim="currentUser.name" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.name }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.name">name is required.</small>
                    </div>

                    <div class="field">
                        <label for="dni">Identificación</label>
                        <InputText id="dni" v-model.trim="currentUser.dni" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.dni }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.dni">La identificación es
                            requerida.</small>
                    </div>


                    <div class="field">
                        <label for="address">Dirección</label>
                        <InputText id="address" v-model.trim="currentUser.address" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.address }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.address">La dirección es
                            requerida.</small>
                    </div>


                    <div class="field">
                        <label for="position">Cargo</label>
                        <Dropdown optionLabel="title" filter v-model.trim="PositionDropValue"
                            :options="PositionDropValues" placeholder="" required="true"
                            :class="{ 'p-invalid': submitted && !currentUser.position }" />

                        <small class="p-invalid" v-if="submitted && !currentUser.position">el cargo es
                            obligatorio</small>

                    </div>

                    <div class="field">
                        <label for="position">Jefe inmediato</label>
                        <Dropdown filter v-model.trim="currentBoss" :options="users" placeholder="" optionLabel="name"
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.position }">

                            <template #value="user">


                                <div style="display: flex; align-items: center;gap: 1rem;">
                                    <img @click="verIMagen(user?.value?.dni)"
                                        :src="`${URI}/read-product-image/96/employer-${user?.value?.dni}`"
                                        @error="onImageError(user?.value?.gender, $event)" class="shadow-2 img-profile"
                                        style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />

                                    {{ user?.value?.name }}

                                </div>
                            </template>

                            <template #option="user">
                                <div style="display: flex; align-items: center;gap: 1rem;">
                                    <img @click="verIMagen(user.option.dni)"
                                        :src="`${URI}/read-product-image/96/employer-${user.option.dni}`"
                                        @error="onImageError(user.option.gender, $event)" class="shadow-2 img-profile"
                                        style="border:none; position:relative; height: 2rem; width:2rem; object-fit: cover; border-radius: 50%;" />

                                    {{ user?.option?.name }}
                                </div>

                            </template>




                        </Dropdown>

                        <small class="p-invalid" v-if="submitted && !currentUser.position">el cargo es
                            obligatorio</small>

                    </div>


                    <div class="field">
                        <label for="site_id">Sede</label>
                        <Dropdown filter v-model="SiteDropValue" :options="sitesDropValues" placeholder=""
                            optionLabel="site_name" required="true"
                            :class="{ 'p-invalid': submitted && !currentUser.site_id }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.site_id">La sede es obligatoria
                        </small>
                    </div>





                    <div class="field">
                        <label for="gender">Género</label>
                        <Dropdown v-model="currentUser.gender" :options="GenderDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.gender }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.gender">el genero es obligatorio
                        </small>
                    </div>


                    <div class="field">
                        <label for="birth_date">Fecha de Nacimiento</label>
                        <Calendar id="birth_date" v-model="currentUser.birth_date" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.birth_date }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.birth_date">fecha de nacimiento es
                            obligatoria</small>
                    </div>

                    <!-- <div class="field">
                        <label for="birth_date">Pais de Nacimiento</label>
                        <InputText id="birth_date" v-model="currentUser.birth_country" required="true" autofocus />
                    </div>

                    <div class="field">
                        <label for="birth_date">Departamento de Nacimiento</label>
                        <InputText id="birth_date" v-model="currentUser.birth_department" required="true" autofocus />
                    </div>

                    <div class="field">
                        <label for="birth_date">Ciudad de Nacimiento</label>
                        <InputText id="birth_date" v-model="currentUser.birth_city" required="true" autofocus />
                    </div>

                    <div class="field">
                        <label for="birth_date">Tipo de sangre</label>
                        <Dropdown v-model="currentUser.blood_type" :options="bloodTypesDropValues" 
                            placeholder="" required="true" />
                    </div>

                    <div class="field">
                        <label for="phone">Teléfono</label>
                        <InputText id="phone" v-model.trim="currentUser.phone" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.phone }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.phone">El teléfono es requerido.</small>
                    </div> -->

                    <div class="field">
                        <label for="birth_country">Pais de Nacimiento</label>
                        <InputText id="birth_country" v-model="currentUser.birth_country" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.birth_country }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.birth_country">País de nacimiento es
                            obligatorio.</small>
                    </div>

                    <!-- Sample Dropdown field with validation -->


                    <!-- Sample input field with validation -->
                    <div class="field">
                        <label for="birth_department">Departamento de Nacimiento</label>
                        <InputText filter v-model="departamentDropValue" optionLabel="departamento" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.gender }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.gender">el genero es obligatorio
                        </small>
                    </div>

                    <!-- Sample input field with validation -->
                    <div class="field">
                        <label for="birth_city">Ciudad de Nacimiento</label>
                        <InputText filter v-model="cityDropValue" placeholder="" required="true"
                            :class="{ 'p-invalid': submitted && !currentUser.gender }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.gender">el genero es obligatorio
                        </small>
                    </div>

                    <div class="field">
                        <label for="blood_type">Tipo de sangre</label>
                        <Dropdown v-model="currentUser.blood_type" :options="bloodTypesDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.blood_type }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.blood_type">Tipo de sangre es
                            obligatorio.</small>
                    </div>
                    <!-- Sample input field with validation -->
                    <div class="field">
                        <label for="phone">Teléfono</label>
                        <InputText id="phone" v-model.trim="currentUser.phone" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.phone }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.phone">El teléfono es
                            requerido.</small>
                    </div>


                    <div class="field">
                        <label for="email">Correo Electrónico</label>
                        <InputText id="email" v-model.trim="currentUser.email" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.email }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.email">El correo electrónico es
                            requerido.</small>
                    </div>


                    <div class="field">
                        <label for="entry_date">Fecha de Ingreso</label>
                        <Calendar id="entry_date" v-model="currentUser.entry_date" required="true" autofocus
                            :class="{ 'p-invalid': submitted && !currentUser.entry_date }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.entry_date">Fecha de ingreso es
                            obligatoria.</small>
                    </div>

                    <div class="field">
                        <label for="marital_status">Estado civil</label>
                        <Dropdown v-model="currentUser.marital_status" :options="maritalStatusDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.marital_status }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.marital_status">Estado civil es
                            obligatorio.</small>
                    </div>

                    <div class="field">
                        <label for="education_level">Nivel de Educación</label>
                        <Dropdown v-model="currentUser.education_level" :options="educationLevelDropValues"
                            placeholder="" required="true"
                            :class="{ 'p-invalid': submitted && !currentUser.education_level }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.education_level">Nivel de Educación es
                            obligatorio.</small>
                    </div>

            

                    <div class="field">
                        <label for="eps">EPS</label>
                        <Dropdown filter v-model="currentUser.eps" :options="epsDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.eps }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.eps">EPS es obligatorio.</small>
                    </div>

                    <div class="field">
                        <label for="pension_fund">Fondo de Pensión</label>
                        <InputText id="pension_fund" v-model.trim="currentUser.pension_fund"
                            :class="{ 'p-invalid': submitted && !currentUser.pension_fund }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.pension_fund">Fondo de Pensión es
                            obligatorio.</small>
                    </div>

                    <div class="field">
                        <label for="severance_fund">Fondo de Cesantías</label>
                        <InputText id="severance_fund" v-model.trim="currentUser.severance_fund"
                            :class="{ 'p-invalid': submitted && !currentUser.severance_fund }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.severance_fund">Fondo de Cesantías es
                            obligatorio.</small>
                    </div>

                    <div class="field inputSwith">
                        <label for="has_children">Tiene Hijos</label>
                        <InputSwitch id="has_children" v-model="currentUser.has_children" />
                    </div>

                    <div class="field">
                        <label for="housing_type">Tipo de Vivienda</label>
                        <Dropdown v-model="currentUser.housing_type" :options="housingTypesDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.housing_type }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.housing_type">Tipo de vivienda es
                            obligatorio.</small>
                    </div>


                    <div class="field inputSwith">
                        <label for="has_vehicle">Tiene Vehiculo</label>
                        <InputSwitch id="has_vehicle" v-model="currentUser.has_vehicle" />
                    </div>

                    <div class="field" v-show="currentUser.has_vehicle">
                        <label for="vehicle_type">Tipo de Vehiculo</label>
                        <Dropdown v-model="currentUser.vehicle_type" :options="vehicleTypesDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.vehicle_type }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.vehicle_type">Tipo de Vehiculo es
                            obligatorio.</small>
                    </div>

                    <div class="field">
                        <label for="household_size">Tamaño del Hogar</label>
                        <InputNumber id="household_size" v-model.number="currentUser.household_size"
                            :class="{ 'p-invalid': submitted && !currentUser.household_size }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.household_size">Tamaño del hogar es
                            obligatorio.</small>
                    </div>

                    <div class="field">
                        <label for="emergency_contact">Contacto de Emergencia</label>
                        <InputText id="emergency_contact" v-model.trim="currentUser.emergency_contact"
                            :class="{ 'p-invalid': submitted && !currentUser.emergency_contact }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.emergency_contact">Contacto de
                            emergencia
                            es obligatorio.</small>
                    </div>

                    <div class="field">
                        <label for="shirt_size">Talla de Camisa</label>
                        <Dropdown v-model="currentUser.shirt_size" :options="shirtSizesDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.shirt_size }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.shirt_size">Talla de camisa es
                            obligatoria.</small>
                    </div>

                    <div class="field">
                        <label for="jeans_sweater_size">Talla de Pantalón</label>
                        <Dropdown v-model="currentUser.jeans_sweater_size" :options="pantSizesDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.jeans_sweater_size }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.jeans_sweater_size">Talla de pantalón
                            es
                            obligatoria.</small>
                    </div>

                    <div class="field inputSwith">
                        <label for="food_handling_certificate">Certificado de Manejo de Alimentos</label>
                        <InputSwitch id="food_handling_certificate" v-model="currentUser.food_handling_certificate" />
                    </div>
<!-- 
                    <div class="field" v-show="currentUser.food_handling_certificate">
                        <label for="food_handling_certificate_number">Número de Certificado de Manejo de
                            Alimentos</label>
                        <InputText id="food_handling_certificate_number"
                            v-model.trim="currentUser.food_handling_certificate_number"
                            :class="{ 'p-invalid': submitted && !currentUser.food_handling_certificate_number }" />
                        <small class="p-invalid"
                            v-if="submitted && !currentUser.food_handling_certificate_number">Número de
                            certificado es obligatorio.</small>
                    </div> -->

                

                    <div class="field">
                        <label for="description">Comentarios</label>
                        <Textarea id="description" v-model="currentUser.comments_notes" required="true" rows="5"
                            cols="20" style="resize: none;" />
                    </div>


                    <div class="field">
                        <label for="status">Estado</label>
                        <Dropdown v-model="currentUser.status" :options="statusDropValues" placeholder=""
                            required="true" :class="{ 'p-invalid': submitted && !currentUser.status }" />
                        <small class="p-invalid" v-if="submitted && !currentUser.status">Estado es obligatorio.</small>
                    </div>

                    <div class="field" v-show="currentUser.entry_date && currentUser.status == 'inactivo'">
                        <label for="exit_date">Fecha de Salida</label>
                        <Calendar id="exit_date" v-model="currentUser.exit_date" required="false" />
                    </div>

                    <div class="field"
                        v-show="currentUser.exit_date && currentUser.entry_date && currentUser.status == 'inactivo'">
                        <label for="exit_reason">Motivo de Salida</label>
                        <InputText id="exit_reason" v-model.trim="currentUser.exit_reason" required="true" autofocus />
                        <small class="p-invalid" v-if="submitted && !currentUser.exit_reason">El motivo de salida es
                            requerido.</small>
                    </div>



                    <div class="field">
                        <label for="exit_reason">Clave</label>
                        <Password toggleMask id="exit_reason" v-model.trim="currentUser.password" required="true"
                            autofocus />
                        <small class="p-invalid" v-if="submitted && !currentUser.password">la clave del usuario es
                            obligatoria

                        </small>
                    </div>


                    <!-- <div class="field">
                        <label for="inventoryStatus" class="mb-3">Inventory Status</label>
                        <Dropdown id="inventoryStatus" v-model="user.id" :options="statuses" optionLabel="label" placeholder="Select a Status">
                            <template #value="slotProps">
                                <div v-if="slotProps.value && slotProps.value.value">
                                    <span :class="'product-badge status-' + slotProps.value.value">{{ slotProps.value.label }}</span>
                                </div>
                                <div v-else-if="slotProps.value && !slotProps.value.value">
                                    <span :class="'product-badge status-' + slotProps.value.trim().toLowerCase()">{{ slotProps.value }}</span>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                        </Dropdown>s
                    </div> -->

                    <!-- <div class="field">
                        <label class="mb-3">Category</label>
                        <div class="formgrid grid">
                            <div class="field-radiobutton col-6">
                                <RadioButton id="category1" name="category" value="Accessories" v-model="user.id" />
                                <label for="category1">Accessories</label>
                            </div>
                            <div class="field-radiobutton col-6">
                                <RadioButton id="category2" name="category" value="Clothing" v-model="user.id" />
                                <label for="category2">Clothing</label>
                            </div>
                            <div class="field-radiobutton col-6">
                                <RadioButton id="category3" name="category" value="Electronics" v-model="user.id" />
                                <label for="category3">Electronics</label>
                            </div>
                            <div class="field-radiobutton col-6">
                                <RadioButton id="category4" name="category" value="Fitness" v-model="user.id" />
                                <label for="category4">Fitness</label>
                            </div>
                        </div>
                    </div> -->


                    <!-- <div class="formgrid grid">
                        <div class="field col">
                            <label for="price">Price</label>
                            <InputNumber id="price" v-model="user.id" mode="currency" currency="USD" locale="en-US"
                                :class="{ 'p-invalid': submitted && !user.id }" :required="true" />
                            <small class="p-invalid" v-if="submitted && !user.price">Price is required.</small>
                        </div>
                        <div class="field col">
                            <label for="quantity">Quantity</label>
                            <InputNumber id="quantity" v-model="user.id" integeronly />
                        </div>
                    </div> -->
                    <template #footer>
                        <Button label="Salir" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
                        <Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
                    </template>
                </Dialog>

            </div>
        </div>

    </div>



</template>

<style scoped lang="scss">
.inputSwith {
    display: flex;
    justify-content: space-between;
    margin: 2em 0;
}



Button {
    border: none;
    min-width: max-content;
    // max-width: 500px;
    // margin: 2px;
}


h6{
    padding: 0;
    margin: 0;
    text-transform: lowercase;
}

h6::first-letter{
    text-transform: uppercase;
}


.img-profile::before {
    content: "";
    // position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    /* Color de fondo desde la variable */
    // opacity: 0.5;
    /* Opacidad deseada (0.5 = 50%) */
    z-index: -1;
    /* Asegura que el fondo esté detrás del contenido */
    
}

.img-profile-add {
    border: 1px solid var(--primary-color);
    // z-index: -1;
    // content: 'hola';
    // background-color: var(--primary-color)
}
</style>
