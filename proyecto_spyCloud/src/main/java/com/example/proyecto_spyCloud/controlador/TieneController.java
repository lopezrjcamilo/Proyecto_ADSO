package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Tiene;
import com.example.proyecto_spyCloud.servicio.TieneService;
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
public class TieneController {

    @Autowired
    private TieneService tieneService;
    public TieneController(TieneService tieneService) {
        this.tieneService = tieneService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Tiene>> listarTiene() {
        return new ResponseEntity<>(tieneService.listarTiene(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tiene> tienePorId(@PathVariable Integer id) {
        Tiene tiene = tieneService.tienePorId(String.valueOf(id));
        if (tiene != null) {
            return ResponseEntity.ok(tiene);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
