package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Multimedia;
import com.example.proyecto_spyCloud.servicio.MultimediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
        Multimedia multimedia = multimediaService.multimediaPorId(String.valueOf(id));
        if (multimedia != null) {
            return ResponseEntity.ok(multimedia);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
