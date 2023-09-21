package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Virus;
import com.example.proyecto_spyCloud.servicio.VirusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/virus")
public class VirusController {

    @Autowired
    private VirusService virusService;
    public VirusController(VirusService virusService) {
        this.virusService = virusService;
    }

    @PostMapping("/insertar")
    public ResponseEntity<Virus> insertarVirus(@RequestBody Virus virus) {
        Integer codVirus = virus.getCodVirus();
        virus.setCodVirus(codVirus);
        return new ResponseEntity<>(virusService.insertarVirus(virus), HttpStatus.CREATED);
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

    @GetMapping("/virusDiagnostico/{numDiag}")
    public ResponseEntity<List<Virus>> virusPorDiagnostico(@PathVariable Integer numDiag) {
        return new ResponseEntity<>(virusService.virusPorDiagnostico(numDiag), HttpStatus.OK);
    }


    @PutMapping("/actualizar/{codVirus}")
    public ResponseEntity<Virus> actualizarVirus(
            @PathVariable Integer codVirus, @RequestBody Virus virus) {
        virus.setCodVirus(codVirus);
        Virus virusActualizado = virusService.actualizarVirus(virus);
        if (virusActualizado != null) {
            return ResponseEntity.ok(virusActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/eliminar/{codVirus}")
    public ResponseEntity<Void> eliminarVirus(@PathVariable Integer codVirus) {
        if(virusService.virusPorId(codVirus)!= null) {
            virusService.eliminarVirus(codVirus);
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
