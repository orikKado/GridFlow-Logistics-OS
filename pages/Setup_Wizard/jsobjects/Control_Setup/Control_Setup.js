export default {
  iniciarEscaneo: () => {
    // Leemos la base de datos
    Verificar_Setup.run()
    .then((data) => {
      // Si la base de datos dice que el setup ya se completó (TRUE)
      if (data && data[0] && data[0].setup_completado === true) {
        // Bloqueamos el acceso y mandamos al piloto al Login
        navigateTo('Login_y_Setup'); 
      }
    });
  }
}