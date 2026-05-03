export default {
  diccionario: {
    es: {
      Login_y_Setup: { 
        titulo: "Bienvenido a Gridflow", 
        lbl_idioma: "Idioma",
        btn_login: "Iniciar sesión con EVE Online"
      }
    },
    en: {
      Login_y_Setup: { 
        titulo: "Welcome to Gridflow", 
        lbl_idioma: "Language",
        btn_login: "Log in with EVE Online"
      }
    }
  },
  
  t: function(pagina, clave) {
    // ⚠️ IMPORTANTE: Convertimos a minúsculas para evitar errores si el selector envía "EN" en mayúscula
    const lang = (appsmith.store.idioma || 'es').toLowerCase();
    return this.diccionario[lang]?.[pagina]?.[clave] || 
           this.diccionario['es']?.[pagina]?.[clave] || 
           `[Falta: ${clave}]`;
  }
}