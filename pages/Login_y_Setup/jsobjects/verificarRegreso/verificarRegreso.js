export default {
	verificarRegreso: async () => {
		try {
			const hash = appsmith.URL.hash || "";
			const queryParams = appsmith.URL.queryParams || {};
			
			// Extraemos el parámetro 'state'
			let stateValue = queryParams.state || "";
			if (!stateValue && hash.includes("state=")) {
				stateValue = hash.split("state=")[1].split("&")[0];
			}
			stateValue = decodeURIComponent(stateValue);

			const currentUrl = appsmith.URL.fullPath || "";
			// URL exacta de la aplicación madre
			const masterRedirectUri = "https://gridflow-logistics.appsmith.com/app/gridflow-logistics-os/login-y-setup-69f76bfe97ac6dbd49c5a066";

			// 1. EL DESVÍO (RELAY): Solo la aplicación MADRE hace desvío hacia la copia.
			if (currentUrl.includes(masterRedirectUri) && stateValue.startsWith("http")) {
				navigateTo(stateValue + hash, {}, "SAME_WINDOW");
				return;
			}

			// 2. Si no es un desvío (o ya estamos en la copia), procesamos el login normal
			const completeURL = hash + currentUrl;
			
			if (completeURL.includes("access_token=")) {
				const token = completeURL.split("access_token=")[1].split("&")[0];
				
				const payload = token.split('.')[1];
				const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
				const pad = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
				const decoded = JSON.parse(atob(base64 + pad));
				
				const idReal = decoded.sub.split(':')[2];
				const nombreReal = decoded.name;

				// Guardamos en la memoria local de la aplicación actual
				await storeValue("eve_token", token);
				await storeValue("char_id", idReal);
				await storeValue("piloto_id", idReal);
				await storeValue("char_name", nombreReal);
				await storeValue("piloto_nombre", nombreReal);

				showAlert('¡Identidad confirmada como ' + nombreReal + '!', 'success');

				const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
				await wait(300);

				// === NUEVO FLUJO SECUENCIAL ===
				// 1. Registramos o actualizamos el usuario en la base de datos conectada
				await Registrar_Usuario.run(); 

				// 2. Consultamos el rol específico de este usuario conectado
				await Verificar_Rol.run();

				let rolFinal = 'cliente';
				if (Verificar_Rol.data && Verificar_Rol.data.length > 0) {
					rolFinal = Verificar_Rol.data[0].rol;
				}

				await storeValue('piloto_rol', rolFinal);

				// Redirección final basada en el rol real de la base de datos
				if (rolFinal === "administrador") {
					navigateTo("Dashboard_Admin", {}, "SAME_WINDOW");
				} else {
					navigateTo("Tienda_Principal", {}, "SAME_WINDOW");
				}
			}
		} catch (e) {
			showAlert('Error en el login: ' + e.message, 'error');
		}
	}
}