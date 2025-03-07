// Función para formatear un número como pesos colombianos
function formatoPesosColombianos(numero) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(numero);
}

function formatoDecimal(numero) {
  return new Intl.NumberFormat('es-CO', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(numero);
}

export { formatoPesosColombianos, formatoDecimal }