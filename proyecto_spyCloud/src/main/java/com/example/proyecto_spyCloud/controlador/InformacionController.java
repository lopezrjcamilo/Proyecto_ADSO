package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.entidad.Informacion;
import com.example.proyecto_spyCloud.servicio.InformacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tiene")
public class InformacionController {

    @Autowired
    private InformacionService informacionService;
    public InformacionController(InformacionService informacionService) {
        this.informacionService = informacionService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Informacion>> listarInformacion() {
        return new ResponseEntity<>(informacionService.listarInformacion(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Informacion> InformacionPorId(@PathVariable Integer id) {
        Informacion informacion = informacionService.informacionPorId(Integer.valueOf(String.valueOf(id)));

        if (informacion != null) {
            return ResponseEntity.ok(informacion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/insertar")
    public ResponseEntity<Informacion> insertarInformacion(@RequestBody Informacion informacionPost) {
        Informacion informacion = informacionService.informacionPorId(informacionPost.getNumReg());
        if (informacion != null) {
            return ResponseEntity.notFound().build();
        } else {
            informacionService.insertarInformacion(informacionPost);
            return ResponseEntity.ok(informacionPost);
        }
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<Informacion> actualizarInformacion(@RequestBody Informacion informacionPost) {
        Informacion informacion = informacionService.informacionPorId(informacionPost.getNumReg());
        if (informacion != null) {
            informacionService.actualizarInformacion(informacionPost);
            return ResponseEntity.ok(informacionPost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> eliminarInformacionPorId(@PathVariable Integer id) {
        Informacion informacion = informacionService.informacionPorId(Integer.valueOf(String.valueOf(id)));
        if (informacion != null) {
            informacionService.eliminarInformacion(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
