package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.servicio.DiagnosticoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/diagnostico")
public class DiagnosticoController {

    @Autowired
    private DiagnosticoService diagnosticoService;
    public DiagnosticoController(DiagnosticoService diagnosticoService) {
        this.diagnosticoService = diagnosticoService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Diagnostico>> listarDiagnostico() {
        return new ResponseEntity<>(diagnosticoService.listarDiagnostico(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Diagnostico> diagnosticoPorId(@PathVariable Integer id) {
        Diagnostico diagnostico = diagnosticoService.diagnosticoPorId(String.valueOf(id));
        if (diagnostico != null) {
            return ResponseEntity.ok(diagnostico);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping ("/insertar")
    public ResponseEntity<Diagnostico> insertarDiagnostico(@RequestBody Diagnostico diagnosticoPost) {
        Diagnostico diagnostico = diagnosticoService.diagnosticoPorId(String.valueOf(diagnosticoPost.getNumDiag()));
        if (diagnostico != null) {
            return ResponseEntity.notFound().build();
        } else {
            diagnosticoService.insertarDiagnostico(diagnosticoPost);
            return ResponseEntity.ok(diagnosticoPost);
        }
    }

    @PutMapping ("/actualizar/{id}")
    public ResponseEntity<Diagnostico> actualizarDiagnostico(@RequestBody Diagnostico diagnosticoPost) {
        Diagnostico diagnostico = diagnosticoService.diagnosticoPorId(String.valueOf(diagnosticoPost.getNumDiag()));
        if (diagnostico != null) {
            diagnosticoService.actualizarDiagnostico(diagnosticoPost);
            return ResponseEntity.ok(diagnosticoPost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> eliminarDiagnostico(@PathVariable Integer id) {
        Diagnostico diagnostico = diagnosticoService.diagnosticoPorId(String.valueOf(id));
        if (diagnostico != null) {
            diagnosticoService.eliminarDiagnostico(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
