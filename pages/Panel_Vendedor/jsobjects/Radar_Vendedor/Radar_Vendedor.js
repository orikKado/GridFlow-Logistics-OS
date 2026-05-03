export default {
    iniciarRadar: () => {
        setInterval(() => {
            // 1. CAMBIA ESTO por el nombre de la consulta de esa página
           Leer_Mis_Ventas.run(); 
        }, 60000, 'timer_vendedor'); // 2. Ponle un nombre único al timer
    },
    apagarRadar: () => {
        clearInterval('timer_vendedor');
    }
}