export default {
  diccionario: {
    es: {
      Panel_Vendedor: { 
        // --- NAVEGACIÓN Y CABECERA ---
        btn_cerrar_sesion: "Cerrar Sesión",
        msg_cierre_sesion: "Sesión cerrada de forma segura.",
        btn_volver_tienda: "Volver a la tienda",
        titulo_panel: "Panel de Proveedor",
        
        // --- ACCIONES Y TEXTOS SUELTOS ---
        btn_ingresar_mercancia: "Ingresar Mercancía",
        lbl_saldo: "SALDO DISPONIBLE",
        lbl_solicitar_retiro: "Solicitar retiro",
        titulo_historial: "Historial de Pagos y Solicitudes (30 días)",
        
        // --- CABECERAS DE TABLAS ---
        col_id_lote: "ID Lote",
        col_nombre_item: "Item",
        col_cantidad: "Cantidad",
        col_precio_base: "Precio Base",
        col_modelo_logistico: "Modelo Logístico",
        col_estado_financiero: "Estado Financiero",
        col_fecha_orden: "Fecha Orden",
        col_precio_original: "Precio Original",
        col_total_ganado: "Total Ganado",
        col_estado_pago: "Estado de Pago",
        col_fecha_venta: "Fecha Venta",
        col_monto_isk: "Monto ISK",
        
        // --- ESTADOS DINÁMICOS (Para Computed Values) ---
        estado_consignacion: "Consignación",
        estado_en_consignacion: "En Consignación",
        estado_pagado: "Pagado",
        estado_solicitado: "Solicitado",
				estado_pendiente: "Pendiente"
      }
    },
    en: {
      Panel_Vendedor: { 
        // --- NAVEGACIÓN Y CABECERA ---
        btn_cerrar_sesion: "Log Out",
        msg_cierre_sesion: "Session safely closed.",
        btn_volver_tienda: "Back to Store",
        titulo_panel: "Vendor Dashboard",
        
        // --- ACCIONES Y TEXTOS SUELTOS ---
        btn_ingresar_mercancia: "Register Merchandise",
        lbl_saldo: "AVAILABLE BALANCE",
        lbl_solicitar_retiro: "Request Withdrawal",
        titulo_historial: "Payment & Request History (30 days)",
        
        // --- CABECERAS DE TABLAS ---
        col_id_lote: "Batch ID",
        col_nombre_item: "Item",
        col_cantidad: "Quantity",
        col_precio_base: "Base Price",
        col_modelo_logistico: "Logistics Model",
        col_estado_financiero: "Financial Status",
        col_fecha_orden: "Order Date",
        col_precio_original: "Original Price",
        col_total_ganado: "Total Earned",
        col_estado_pago: "Payment Status",
        col_fecha_venta: "Sale Date",
        col_monto_isk: "Amount ISK",
        
        // --- ESTADOS DINÁMICOS (Para Computed Values) ---
        estado_consignacion: "Consignment",
        estado_en_consignacion: "On Consignment",
        estado_pagado: "Paid",
        estado_solicitado: "Requested",
				estado_pendiente: "Pending"
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