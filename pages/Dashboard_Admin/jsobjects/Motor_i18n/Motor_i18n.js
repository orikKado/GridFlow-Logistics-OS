export default {
  diccionario: {
    es: {
      Dashboard_Admin: { 
        // --- CABECERA Y NAVEGACIÓN ---
        titulo_panel: "Bienvenido al Panel de GridFlow",
        saludo_admin: "Bienvenido de nuevo, Administrador",
        btn_cerrar_sesion: "Cerrar Sesión",
        msg_cierre_sesion: "Sesión cerrada de forma segura.",

        // --- SECCIÓN 1: CATÁLOGO Y FORMULARIOS ---
        col_item_id: "ID Item",
        col_item_name: "Nombre del Item",
        col_category: "Categoría",
        col_subcategory: "Subcategoría",
        col_allow_dropshipping: "Permite Dropshipping",
        col_volume: "Volumen Unitario (m3)",
        lbl_type_id: "ID Tipo",
        lbl_category: "Categoría",
        lbl_item_name: "Nombre del Item",
        lbl_volume: "Volumen (m3)",
        chk_create_manual: "Crear categoría manual",
        lbl_type_new: "Escribir nueva categoría",
        chk_allow_drop: "¿Permitir Dropshipping?",
        btn_add_catalog: "Añadir al catálogo",
        lbl_add_route: "Añadir nueva ruta/estación",
        btn_create_route: "Crear Ruta",

        // --- SECCIÓN 2: TABLA DE ÓRDENES ---
        col_id_orden: "ID Orden",
        col_comprador: "Comprador",
        col_estado_logistico: "Estado Logístico",
        col_fecha_orden: "Fecha Orden",
        col_despachar: "Despachar",
        col_confirmar: "Confirmar",
        col_forzar_entrega: "Forzar Entrega",
        col_piloto: "Piloto Transporte",
        col_productos: "Productos",
				col_transporte: "Transporte",
				col_destino: "Destino",

        // --- SECCIÓN 3: PAGOS PENDIENTES ---
        col_vendedor: "Vendedor",
        col_personaje_id: "ID Personaje",
        col_monto_pagar: "Monto a Pagar",
        col_marcar_pagado: "Marcar como Pagado",
        col_unidades: "Unidades Vendidas",
        col_transacciones: "Total Transacciones",

        // --- SECCIÓN 4: PERSONAL / USUARIOS ---
        col_nombre: "Nombre",
        col_rol: "Rol",
        col_idioma_pref: "Idioma Preferente",
        col_fecha_reg: "Fecha Registro",
        col_save_discard: "Guardar / Descartar",

        // --- ESTADOS Y ROLES DINÁMICOS ---
        estado_entregado: "Entregado",
        estado_cancelado: "Cancelado por Cliente",
				estado_solicitado: "Solicitado",
				estado_en_transito: "En Tránsito",
        rol_admin: "Administrador",
        rol_transporte: "Transportista",
        rol_cliente: "Cliente",
				rol_vendedor: "Vendedor",
      }
    },
    en: {
      Dashboard_Admin: { 
        // --- CABECERA Y NAVEGACIÓN ---
        titulo_panel: "Welcome to GridFlow Panel",
        saludo_admin: "Welcome back, Administrator",
        btn_cerrar_sesion: "Log Out",
        msg_cierre_sesion: "Session safely closed.",

        // --- SECCIÓN 1: CATÁLOGO Y FORMULARIOS ---
        col_item_id: "Item ID",
        col_item_name: "Item Name",
        col_category: "Category",
        col_subcategory: "Subcategory",
        col_allow_dropshipping: "Allow Dropshipping",
        col_volume: "Unit Volume (m3)",
        lbl_type_id: "Type ID",
        lbl_category: "Category",
        lbl_item_name: "Item Name",
        lbl_volume: "Volume (m3)",
        chk_create_manual: "Create manual category",
        lbl_type_new: "Type new category",
        chk_allow_drop: "Allow Dropshipping?",
        btn_add_catalog: "Add to catalog",
        lbl_add_route: "Add new route/station",
        btn_create_route: "Create Route",

        // --- SECCIÓN 2: TABLA DE ÓRDENES ---
        col_id_orden: "Order ID",
        col_comprador: "Buyer",
        col_estado_logistico: "Logistics Status",
        col_fecha_orden: "Order Date",
        col_despachar: "Dispatch",
        col_confirmar: "Confirm",
        col_forzar_entrega: "Force Delivery",
        col_piloto: "Transport Pilot",
        col_productos: "Products",
				col_transporte: "Transport",
				col_destino: "Destination",

        // --- SECCIÓN 3: PAGOS PENDIENTES ---
        col_vendedor: "Seller",
        col_personaje_id: "Character ID",
        col_monto_pagar: "Amount to Pay",
        col_marcar_pagado: "Mark as Paid",
        col_unidades: "Units Sold",
        col_transacciones: "Total Transactions",

        // --- SECCIÓN 4: PERSONAL / USUARIOS ---
        col_nombre: "Name",
        col_rol: "Role",
        col_idioma_pref: "Preferred Language",
        col_fecha_reg: "Registration Date",
        col_save_discard: "Save / Discard",

        // --- ESTADOS Y ROLES DINÁMICOS ---
        estado_entregado: "Delivered",
        estado_cancelado: "Cancelled by Client",
				estado_solicitado: "Requested",
        estado_en_transito: "In Transit",
        rol_admin: "Administrator",
        rol_transporte: "Transporter",
        rol_cliente: "Client",
				rol_vendedor: "Seller",
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