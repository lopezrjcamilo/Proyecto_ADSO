package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Virus;
import com.example.proyecto_spyCloud.servicio.VirusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/virus")
public class VirusController {

    @Autowired
    private VirusService virusService;
    public VirusController(VirusService virusService) {
        this.virusService = virusService;
    }

    @GetMapping("/listar")
    public List<Virus> listarVirus() {
        return virusService.listarVirus();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Virus> virusPorId(@PathVariable Integer id) {
        Virus virus = virusService.virusPorId(id);
        if (virus != null) {
            return ResponseEntity.ok(virus);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
