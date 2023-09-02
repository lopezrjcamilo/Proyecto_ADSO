package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.servicio.DiagnosticoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

}
