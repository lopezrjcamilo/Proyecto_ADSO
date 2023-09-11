package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Multimedia;
import com.example.proyecto_spyCloud.servicio.MultimediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/multimedia")
public class MultimediaController {

    @Autowired
    private MultimediaService multimediaService;
    public MultimediaController(MultimediaService multimediaService) {
        this.multimediaService = multimediaService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Multimedia>> listarMultimedia() {
        return new ResponseEntity<>(multimediaService.listarMultimedia(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Multimedia> multimediaPorId(@PathVariable Integer id) {
        Multimedia multimedia = multimediaService.multimediaPorId(Integer.valueOf(String.valueOf(id)));
        if (multimedia != null) {
            return ResponseEntity.ok(multimedia);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/insertar")
    public ResponseEntity<Multimedia> insertarMultimedia(@RequestBody Multimedia multimediaPost){
        Multimedia multimedia = multimediaService.multimediaPorId(multimediaPost.getCodMult());
        if (multimedia != null) {
            return ResponseEntity.notFound().build();
        } else {
            multimediaService.insertarMultimedia(multimediaPost);
            return ResponseEntity.ok(multimediaPost);
        }
    }
    @DeleteMapping("/eliminar/{CodMult}")
    public ResponseEntity<Void> eliminarMultimediaPorId(@PathVariable Integer CodMult){
        Multimedia multimedia = multimediaService.multimediaPorId(CodMult);
        if (multimedia != null) {
            multimediaService.eliminarMultimediaPorId(CodMult);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/actualizar/{CodMult}")
    public ResponseEntity<Multimedia> actualizarCliente(@RequestBody Multimedia multimediaPut){
        Multimedia multimedia = multimediaService.multimediaPorId(multimediaPut.getCodMult());
        if (multimedia != null) {
            multimediaService.insertarMultimedia(multimediaPut);
            return ResponseEntity.ok(multimediaPut);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
