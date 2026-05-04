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

			// 1. EL DESVÍO (RELAY): Si el 'state' es una URL, mandamos el token hacia la copia
			if (stateValue.startsWith("http")) {
				// Redirigimos a la aplicación copia pegándole el token que nos dio EVE
				navigateTo(stateValue + hash, {}, "SAME_WINDOW");
				return;
			}

			// 2. Si no es un desvío, procesamos el login normal de la aplicación madre
			const fullPath = appsmith.URL.fullPath || "";
			const completeURL = hash + fullPath;
			
			if (completeURL.includes("access_token=")) {
				const token = completeURL.split("access_token=")[1].split("&")[0];
				
				const payload = token.split('.')[1];
				const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
				const pad = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
				const decoded = JSON.parse(atob(base64 + pad));
				
				const idReal = decoded.sub.split(':')[2];
				const nombreReal = decoded.name;

				await storeValue("eve_token", token);
				await storeValue("char_id", idReal);
				await storeValue("piloto_id", idReal);
				await storeValue("char_name", nombreReal);
				await storeValue("piloto_nombre", nombreReal);

				showAlert('¡Identidad confirmada como ' + nombreReal + '!', 'success');

				const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
				await wait(300);

				await Sync_Rol_Login.run();

				let rolFinal = 'cliente';
				if (Sync_Rol_Login.data && Sync_Rol_Login.data.length > 0) {
					rolFinal = Sync_Rol_Login.data[0].rol;
				}

				await storeValue('piloto_rol', rolFinal);

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