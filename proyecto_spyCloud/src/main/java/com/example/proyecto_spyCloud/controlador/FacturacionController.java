package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Facturacion;
import com.example.proyecto_spyCloud.servicio.FacturacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
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
        Facturacion facturacion = facturacionService.facturacionPorId(id);
        if (facturacion != null) {
            return ResponseEntity.ok(facturacion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @PostMapping("/insertar")
    public ResponseEntity<Facturacion> insertarFacturacion(@RequestBody Facturacion facturacionPost){


        Facturacion facturacion = facturacionService.facturacionPorId(facturacionPost.getNumFac());
        if (facturacion != null) {
            return ResponseEntity.notFound().build();
        } else {
            facturacionService.insertarFacturacion(facturacionPost);
            return ResponseEntity.ok(facturacionPost);
        }
    }

    @DeleteMapping("/eliminar/{numFac}")
    public ResponseEntity<Void> eliminarFacturacion(@PathVariable Integer numFac){

        Facturacion facturacion = facturacionService.facturacionPorId(numFac);
        if (facturacion != null) {
            facturacionService.eliminarFacturacionPorId(numFac);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/actualizar/{numFac}")
    public ResponseEntity<Facturacion> actualizarFacturacion(@RequestBody Facturacion facturacionPut){

        Facturacion facturacion = facturacionService.facturacionPorId(facturacionPut.getNumFac());
        if (facturacion != null) {
            facturacionService.insertarFacturacion(facturacionPut);
            return ResponseEntity.ok(facturacionPut);

        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
