package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Visita;
import com.example.proyecto_spyCloud.servicio.VisitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
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
        Visita visita = visitaService.visitaPorId(id);
        if (visita != null) {
            return ResponseEntity.ok(visita);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/insertar")
    public ResponseEntity<Visita> insertarCliente(@RequestBody Visita visitaPost) {
        Visita visita = visitaService.visitaPorId(visitaPost.getNumVisita());
        if (visita != null) {
            return ResponseEntity.notFound().build();
        } else {
            visitaService.insertarVisita(visitaPost);
            return ResponseEntity.ok(visitaPost);
        }
    }

    @DeleteMapping("/eliminar/{numVisita}")
    public ResponseEntity<Void> insertarCliente(@PathVariable Integer numVisita){
        Visita visita = visitaService.visitaPorId(numVisita);
        if (visita != null) {
            visitaService.eliminarVisita(numVisita);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/actualizar/{numVisita}")
    public ResponseEntity<Visita> actualizarCliente(@RequestBody Visita visitaPost) {
        Visita visita = visitaService.visitaPorId(visitaPost.getNumVisita());
        if (visita != null) {
            return ResponseEntity.notFound().build();
        } else {
            visitaService.insertarVisita(visitaPost);
            return ResponseEntity.ok(visitaPost);
        }
    }

}
