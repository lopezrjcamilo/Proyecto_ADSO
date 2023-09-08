package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Informacion;
import com.example.proyecto_spyCloud.servicio.InformacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
