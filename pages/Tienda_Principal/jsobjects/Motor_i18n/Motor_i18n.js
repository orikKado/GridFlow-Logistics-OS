export default {
  diccionario: {
    es: {
      Login_y_Setup: { 
        titulo: "Contratos Pendientes", 
        lbl_idioma: "Idioma",
        btn_login: "Iniciar sesión con EVE Online"
      },
      Tienda_Principal: { 
        filtro: "Filtrar por Categoría", 
        ir_bodega: "Mi Bodega",
        ir_contratos: "🚀Contratos de Transporte",
        ir_panel_cliente: "Ir a panel Cliente",
        btn_comprar: "Añadir a la Orden",
        btn_login: "Inicia Sesión",
        agotado: "AGOTADO",
        precio: "Precio:",
        stock: "Stock:",
				lbl_flete: "Costo del transporte",
        // --- TEXTOS DEL MODAL DE COMPRA ---
        modal_titulo: "Confirmar Orden",
        lbl_cantidad: "Cantidad a comprar",
        lbl_destino: "Destino de Entrega",
        lbl_total: "Total:",
        btn_comprar_modal: "Comprar",
        btn_cerrar: "Cerrar",
        col_vendedor: "Vendedor",
        col_precio: "Precio", // 🛡️ Corregida la comilla de cierre y añadida la coma
        // --- TEXTOS DEL ENCABEZADO ---
        lbl_piloto_activo: "Piloto Activo",
        lbl_invitado: "Invitado (Modo Vitrina)",
				lbl_oferta: "Oferta"
      }
    },
    en: {
      Login_y_Setup: { 
        titulo: "Pending Contracts", 
        lbl_idioma: "Language",
        btn_login: "Log in with EVE Online"
      },
      Tienda_Principal: { 
        filtro: "Filter by Category", 
        ir_bodega: "My Vault",
        ir_contratos: "🚀Courier Contracts",
        ir_panel_cliente: "Go to Client Dashboard",
        btn_comprar: "Add to Order",
        btn_login: "Log In",
        agotado: "OUT OF STOCK",
        precio: "Price:",
        stock: "Stock:",
				lbl_flete: "Shipping Cost",
        // --- TEXTOS DEL MODAL DE COMPRA ---
        modal_titulo: "Confirm Order",
        lbl_cantidad: "Quantity to buy",
        lbl_destino: "Delivery Destination",
        lbl_total: "Total:",
        btn_comprar_modal: "Purchase",
        btn_cerrar: "Close",
        col_vendedor: "Seller",
        col_precio: "Price", // 🛡️ Añadida la coma necesaria
        // --- TEXTOS DEL ENCABEZADO ---
        lbl_piloto_activo: "Active Pilot",
        lbl_invitado: "Guest (Showcase Mode)",
				lbl_oferta: "Offer"
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