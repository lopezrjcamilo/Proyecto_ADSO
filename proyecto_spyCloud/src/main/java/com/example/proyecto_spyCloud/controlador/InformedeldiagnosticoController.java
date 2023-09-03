package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Informedeldiagnostico;
import com.example.proyecto_spyCloud.servicio.InformedeldiagnosticoService;
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
public class InformedeldiagnosticoController {

    @Autowired
    private InformedeldiagnosticoService informedeldiagnosticoService;
    public InformedeldiagnosticoController(InformedeldiagnosticoService informedeldiagnosticoService) {
        this.informedeldiagnosticoService = informedeldiagnosticoService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Informedeldiagnostico>> listarTiene() {
        return new ResponseEntity<>(informedeldiagnosticoService.listarInformedeldiagnostico(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Informedeldiagnostico> tienePorId(@PathVariable Integer id) {
        Informedeldiagnostico informedeldiagnostico = informedeldiagnosticoService.tienePorInformedeldiagnostico(String.valueOf(id));
        if (informedeldiagnostico != null) {
            return ResponseEntity.ok(informedeldiagnostico);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
