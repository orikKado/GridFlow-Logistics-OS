export default {
	verificarRegreso: async () => {
		try {
			const hash = appsmith.URL.hash || "";
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

				// 1. Guardamos todo en la memoria
				await storeValue("eve_token", token);
				await storeValue("char_id", idReal);
				await storeValue("piloto_id", idReal);
				await storeValue("char_name", nombreReal);
				await storeValue("piloto_nombre", nombreReal);

				showAlert('¡Identidad confirmada como ' + nombreReal + '!', 'success');

				// 2. Pausa de seguridad para asimilar las variables en memoria
				const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
				await wait(300);

				// 3. Ejecutamos la consulta de rol directamente en el Login
				await Sync_Rol_Login.run();

				let rolFinal = 'cliente';
				if (Sync_Rol_Login.data && Sync_Rol_Login.data.length > 0) {
					rolFinal = Sync_Rol_Login.data[0].rol;
				}

				await storeValue('piloto_rol', rolFinal);

				// 4. REDIRECCIÓN DIRECTA SIN ESCALAS
				if (rolFinal === "administrador") {
					showAlert('¡Bienvenido, Director!', 'success');
					navigateTo("Dashboard_Admin", {}, "SAME_WINDOW");
				} else if (rolFinal === "vendedor") {
					navigateTo("Panel_Vendedor", {}, "SAME_WINDOW");
				} else if (rolFinal === "transportista") {
					navigateTo("Tablero_Transportista", {}, "SAME_WINDOW");
				} else {
					navigateTo("Tienda_Principal", {}, "SAME_WINDOW");
				}
			}
		} catch (e) {
			showAlert('Error en el login: ' + e.message, 'error');
		}
	}
}