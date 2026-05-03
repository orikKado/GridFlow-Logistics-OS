export default {
  diccionario: {
    es: {
      Dashboard_Cliente: { 
        // --- NAVEGACIÓN ---
        btn_volver_tienda: "Volver a la tienda",
        btn_cerrar_sesion: "Cerrar Sesión",
        msg_cierre_sesion: "Sesión cerrada de forma segura.",
        
        // --- CABECERAS DE TABLA ---
        col_orden: "Orden",
        col_producto: "Producto",
        col_cantidad: "Cantidad",
        col_total: "Total ISK",
        col_destino: "Destino",
        col_estado: "Estado",
        col_fecha: "Fecha Orden",
        col_accion: "Cancelar",
        
        // --- ESTADOS DINÁMICOS (Para el Computed Value) ---
        estado_entregado: "Entregado",
        estado_cancelado: "Cancelado por Cliente",
        estado_solicitado: "Solicitado",
        estado_en_transito: "En Tránsito",
				estado_pendiente: "Pendiente de Entrega",
      }
    },
    en: {
      Dashboard_Cliente: { 
        // --- NAVEGACIÓN ---
        btn_volver_tienda: "Back to Store",
        btn_cerrar_sesion: "Log Out",
        msg_cierre_sesion: "Session safely closed.",
        
        // --- CABECERAS DE TABLA ---
        col_orden: "Order",
        col_producto: "Product",
        col_cantidad: "Quantity",
        col_total: "Total ISK",
        col_destino: "Destination",
        col_estado: "Status",
        col_fecha: "Order Date",
        col_accion: "Cancel",
        
        // --- ESTADOS DINÁMICOS (Para el Computed Value) ---
        estado_entregado: "Delivered",
        estado_cancelado: "Cancelled by Client",
        estado_solicitado: "Requested",
        estado_en_transito: "In Transit",
				estado_pendiente: "Pending Delivery",
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