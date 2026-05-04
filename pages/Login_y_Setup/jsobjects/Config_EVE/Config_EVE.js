export default {
	// 1. Datos oficiales de tu aplicación Madre en producción
	client_id: "6b94cd4487604566ae3f6dafe9e3cb48",
	master_redirect_uri: "https://gridflow-logistics.appsmith.com/app/gridflow-logistics-os/login-y-setup-69f76bfe97ac6dbd49c5a066",
	scope: "publicData",

	// 2. Motor dinámico (Sirve para la Madre y para las Copias)
	obtenerUrlAuth () {
		const base = "https://login.eveonline.com/v2/oauth/authorize/";
		const currentUrl = appsmith.URL.fullPath || "";

		// Detectamos si la URL actual es diferente a la de la App Madre
		const esCopia = !currentUrl.includes(this.master_redirect_uri);
		
		// Si es copia, guardamos la URL en el state. Si es la madre, usamos 'gridflow' normal.
		const stateValue = esCopia ? currentUrl : "gridflow";

		const params = [
			"response_type=token",
			"client_id=" + this.client_id,
			"redirect_uri=" + encodeURIComponent(this.master_redirect_uri),
			"scope=" + this.scope,
			"state=" + encodeURIComponent(stateValue)
		];
		return base + "?" + params.join("&");
	}
}