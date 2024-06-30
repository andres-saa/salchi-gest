function formatDateTime(dateTimeString) {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    // Crear un objeto de fecha a partir del string de fecha ISO
    const date = new Date(dateTimeString);

    // Obtener día, mes y año
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Convertir a formato de 12 horas
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // El '0' se convierte en '12'
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Asegurarse de tener dos dígitos para los minutos

    // Formatear la cadena final
    return `${day} de ${month} del ${year} a las ${hours}:${minutes} ${ampm}`;
}

function formatShortDateTime(dateTimeString) {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
    // Crear un objeto de fecha a partir del string de fecha ISO
    const date = new Date(dateTimeString);

    // Obtener día, mes y año
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Convertir a formato de 12 horas
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // El '0' se convierte en '12'
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Asegurarse de tener dos dígitos para los minutos

    // Formatear la cadena final
    return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;
}

function extraerHora(fechaHora) {
    // Crear un objeto de fecha a partir de la cadena proporcionada
    let fecha = new Date(fechaHora);

    // Obtener horas y minutos
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();

    // Determinar si es AM o PM
    let periodo = horas >= 12 ? 'PM' : 'AM';

    // Convertir a formato de 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Si horas es 0, se convierte a 12 en el formato de 12 horas

    // Formatear los minutos para asegurar dos dígitos
    minutos = minutos < 10 ? '0' + minutos : minutos;

    // Construir la cadena de hora en formato de 12 horas
    let hora12 = `${horas}:${minutos} ${periodo}`;

    return hora12;
}



export { formatDateTime, formatShortDateTime,extraerHora };

