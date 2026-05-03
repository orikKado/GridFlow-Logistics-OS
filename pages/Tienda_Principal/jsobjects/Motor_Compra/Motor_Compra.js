export default {
  procesarOrden: () => {
    try {
      // 1. Extraer y Validar Cantidad
      const cant = Number(inp_cantidad_compra.text);
      if (!cant || cant <= 0) {
        showAlert("Operación cancelada: Ingrese una cantidad válida.", "warning");
        return;
      }

      // 2. Extraer y Validar Lote
      const lote = tbl_ofertas.selectedRow || tbl_ofertas.tableData[0];
      const idLote = lote?.id_lote;

      if (!idLote) {
        showAlert("Operación cancelada: No se detectó un lote disponible.", "error");
        return;
      }

      // 3. EXTRACCIÓN Y LIMPIEZA DE PRECIO
      let precioCrudo = lote?.precio_cliente || 
                        lote?.precio_base || 
                        Custom1.model.itemSeleccionado?.precio_cliente || 0;
      
      if (typeof precioCrudo === 'string') {
        precioCrudo = Number(precioCrudo.replace(/[^0-9.]/g, ''));
      } else {
        precioCrudo = Number(precioCrudo);
      }

      // --- CONFIGURACIÓN DE MARGEN ---
      const config = Leer_Config_Tienda.data[0];
      const margenCorporativo = Number(config?.margen_ganancia_default || 0.10);

      let precioVentaFinal;
      if (lote?.precio_cliente) {
        precioVentaFinal = Math.round(precioCrudo);
      } else {
        precioVentaFinal = Math.round(precioCrudo * (1 + margenCorporativo));
      }

      // 🛡️ CAPTURA DINÁMICA DEL FLETE (La clave de la recompensa)
      // Leemos el valor total que ya calculó el widget Text9 (ej: 16,750,000)
      const fleteTotalCalculado = Number(Text9.text.replace(/[^0-9.]/g, ''));

      if (!precioVentaFinal || precioVentaFinal <= 0) {
        showAlert("Error Crítico: El cálculo del precio falló.", "error");
        return;
      }

      // 4. CADENA DE MANDO (Ejecución Segura)
      Crear_Orden_Maestra.run()
      .then((data) => {
        if (!data || !data[0] || !data[0].id_orden) {
          throw new Error("No se pudo generar el ID de la Orden Maestra.");
        }
        
        return Insertar_Detalle_Orden.run({ 
          "nueva_orden_id": data[0].id_orden,
          "id_lote": idLote,
          "cantidad": cant,
          "precio_unitario": precioVentaFinal,
          "flete_cobrado": fleteTotalCalculado // <--- AHORA GUARDA LOS 16.75M
        });
      })
      .then(() => {
        return Descontar_Inventario.run(); 
      })
      .then(() => {
        showAlert('Orden procesada y vinculada a la flota exitosamente', 'success');
        Vitrina_Inventario.run(); 
        closeModal('Modal_Compra');
      })
      .catch((e) => {
        showAlert("Fallo en la sincronización de base de datos: " + e.message, "error");
      });

    } catch (errorMotor) {
      showAlert("Fallo en el sistema lógico: " + errorMotor.message, "error");
    }
  }
}