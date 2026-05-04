export default {
	validarAcceso: () => {
		const rolValido = appsmith.store.piloto_rol;
		
		// Si no es administrador, lo mandamos de vuelta a la tienda
		if (rolValido !== 'administrador') {
			showAlert('Acceso denegado. No tienes los permisos requeridos.', 'error');
			navigateTo('Tienda_Principal', {}, 'SAME_WINDOW');
		}
	}
}