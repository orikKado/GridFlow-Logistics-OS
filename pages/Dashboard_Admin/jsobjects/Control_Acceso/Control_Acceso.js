export default {
  verificarPermiso: () => {
    // Si la mochila está vacía o no hay token, patada a la pantalla de Login
    if (!appsmith.store.eve_token) {
      navigateTo('Login_y_Setup', {}, 'SAME_WINDOW');
    }
  }
}