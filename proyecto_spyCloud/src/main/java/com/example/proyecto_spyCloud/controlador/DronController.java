package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Dron;
import com.example.proyecto_spyCloud.servicio.DronService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/dron")
public class DronController {

    @Autowired
    private DronService dronService;
    public DronController(DronService dronService) {
        this.dronService = dronService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Dron>> listarDron() {
        return new ResponseEntity<>(dronService.listarDron(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dron> dronPorId(@PathVariable Integer id) {
        Dron dron = dronService.dronPorId(String.valueOf(id));
        if (dron != null) {
            return ResponseEntity.ok(dron);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
