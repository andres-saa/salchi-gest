 const roles = {
    todos: [
        'coordinador de sedes cali',
        'coordinador de sede bogotá',
        'líder de punto',
        'cajero',
        'auxiliar de cocina',
        'jefe de cocina',
        'domiciliario',
        'gerencia general',
        'jefe de gestión humana',
        'aprendiz sena',
        'jefe de producción',
        'líder de producción',
        'auxiliar de producción',
        'contadora',
        'auxiliar de contabilidad',
        'coordinador de inventarios',
        'auxiliar de logística',
        'conductor',
        'jefe de compras',
        'auxiliar de compras',
        'gerente de marketing',
        'diseñador',
        'community manager',
        'gerente',
        'subgerente',
        'getion humana',
        'mesero'
        ],
    documentos:[
    
        'gerencia general',
        'jefe de gestión humana',
        'getion humana',
        'gerencia general',
        'gerente',
        'subgerente',
        // 'cajero',
        ],
        
    adminTienda:[
    
        'gerencia general',
        'gerente',
        'subgerente',
        // 'cajero',
        'gestion humana'
        ]
 }

 
 function verificarRol(rol, rolesPermitidos) {
    // Eliminar espacios innecesarios y convertir a minúsculas
    let rolNormalizado = rol.trim().toLowerCase();

    // Normalizar también los roles permitidos
    let rolesPermitidosNormalizados = rolesPermitidos.map(r => r.toLowerCase());

    return rolesPermitidosNormalizados.includes(rolNormalizado);
}


export {roles, verificarRol}