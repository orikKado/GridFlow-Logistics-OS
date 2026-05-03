export default {
    iniciarRadar: () => {
        setInterval(() => {
            // 1. CAMBIA ESTO por el nombre de la consulta de esa página
            Leer_Contratos_Pendientes.run().run(); 
        }, 15000, 'timer_transportista'); // 2. Ponle un nombre único al timer
    },
    apagarRadar: () => {
        clearInterval('timer_transportista');
    }
}