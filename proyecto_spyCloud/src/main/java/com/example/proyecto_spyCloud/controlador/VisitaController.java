package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Visita;
import com.example.proyecto_spyCloud.servicio.VisitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/visita")
public class VisitaController {

    @Autowired
    private VisitaService visitaService;
    public VisitaController(VisitaService visitaService) {
        this.visitaService = visitaService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Visita>> listarVisita() {
        return new ResponseEntity<>(visitaService.listarVisita(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Visita> visitaPorId(@PathVariable Integer id) {
        Visita visita = visitaService.visitaPorId(String.valueOf(id));
        if (visita != null) {
            return ResponseEntity.ok(visita);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
