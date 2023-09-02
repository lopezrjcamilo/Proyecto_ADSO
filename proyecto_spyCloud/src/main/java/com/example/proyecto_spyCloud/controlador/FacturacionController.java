package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Facturacion;
import com.example.proyecto_spyCloud.servicio.FacturacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/facturacion")
public class FacturacionController {

    @Autowired
    private FacturacionService facturacionService;
    public FacturacionController(FacturacionService facturacionService) {
        this.facturacionService = facturacionService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Facturacion>> listarFacturacion() {
        return new ResponseEntity<>(facturacionService.listarFacturacion(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Facturacion> facturacionPorId(@PathVariable Integer id) {
        Facturacion facturacion = facturacionService.facturacionPorId(String.valueOf(id));
        if (facturacion != null) {
            return ResponseEntity.ok(facturacion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
