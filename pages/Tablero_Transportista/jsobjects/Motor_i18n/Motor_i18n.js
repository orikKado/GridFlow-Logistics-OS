export default {
  diccionario: {
    es: {
      Tablero_Transportista: { 
        // --- NAVEGACIÓN ---
        btn_cerrar_sesion: "Cerrar Sesión",
        btn_volver_tienda: "Volver a Tienda",
        
        // --- CABECERAS DE TABLAS ---
        col_orden: "Orden",
        col_fecha: "Fecha",
        col_destino: "Destino",
        col_saltos: "Saltos",
        col_volumen: "Volumen m3",
        col_colateral: "Colateral",
        col_recompensa: "Recompensa",
        col_estado: "Estado",
        
        // --- BOTONES DE ACCIÓN (TABLAS) ---
        btn_aceptar_contrato: "Aceptar Contrato",
        btn_confirmar_recogida: "Confirmar Recogida",
        btn_confirmar_entrega: "Confirmar Entrega",
				// ... (tus otros textos)
        btn_confirmar_entrega: "Confirmar Entrega",
        msg_cierre_sesion: "Sesión cerrada de forma segura." // <--- NUEVA LÍNEA
      }
    },
    en: {
      Tablero_Transportista: { 
        // --- NAVEGACIÓN ---
        btn_cerrar_sesion: "Log Out",
        btn_volver_tienda: "Back to Store",
        
        // --- CABECERAS DE TABLAS ---
        col_orden: "Order",
        col_fecha: "Date",
        col_destino: "Destination",
        col_saltos: "Jumps",
        col_volumen: "Volume m3",
        col_colateral: "Collateral",
        col_recompensa: "Reward",
        col_estado: "Status",
        
        // --- BOTONES DE ACCIÓN (TABLAS) ---
        btn_aceptar_contrato: "Accept Contract",
        btn_confirmar_recogida: "Confirm Pickup",
        btn_confirmar_entrega: "Confirm Delivery",
				// ... (tus otros textos)
        btn_confirmar_entrega: "Confirm Delivery",
        msg_cierre_sesion: "Session safely closed." // <--- NUEVA LÍNEA
      }
    }
  },
  
  t: function(pagina, clave) {
    const lang = (appsmith.store.idioma || 'es').toLowerCase();
    return this.diccionario[lang]?.[pagina]?.[clave] || 
           this.diccionario['es']?.[pagina]?.[clave] || 
           `[Falta: ${clave}]`;
  }
}