export default {
	validarRol: async () => {
		// Si no hay piloto identificado en la memoria, es invitado por defecto
		if (!appsmith.store.piloto_id) {
			await storeValue('piloto_rol', 'Invitado');
			return 'Invitado';
		}
		
		// Sincronizamos el rol para tenerlo fresco en la tienda
		await Sync_Rol.run();
		
		let rolFinal = 'cliente';
		if (Sync_Rol.data && Sync_Rol.data.length > 0) {
			rolFinal = Sync_Rol.data[0].rol;
		}
		
		await storeValue('piloto_rol', rolFinal);
		return rolFinal;
	}
}