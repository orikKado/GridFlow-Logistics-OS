export default {
    iniciarRadar: () => {
        // Ejecuta la consulta a la base de datos cada 15 segundos (15000 ms)
        setInterval(() => {
            Leer_Todas_Ordenes.run();
        }, 15000, 'timer_ordenes');
    },
    apagarRadar: () => {
        // Un comando de emergencia por si alguna vez necesitas detener las recargas
        clearInterval('timer_ordenes');
    }
}