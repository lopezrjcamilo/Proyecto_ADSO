package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Dron;
import com.example.proyecto_spyCloud.servicio.DronService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        Dron dron = dronService.dronPorId(id);
        if (dron != null) {
            return ResponseEntity.ok(dron);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/insertar")
    public ResponseEntity<Dron> insertarDron(@RequestBody Dron dron) {
        Integer codDron = dron.getCodDron();
        // No es necesario verificar si el administrador ya existe por ID aquí
        dron.setCodDron(codDron);
        return new ResponseEntity<>(dronService.insertarDron(dron), HttpStatus.CREATED);
    }
    @PutMapping("/actualizar/{codDron}")
    public ResponseEntity<Dron> actualizarDron(
            @PathVariable Integer codDron, @RequestBody Dron dron) {
        dron.setCodDron(codDron);
        Dron dronActualizado= dronService.actualizarDron(dron);
        if (dronActualizado != null) {
            return ResponseEntity.ok(dronActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/eliminar/{codDron}")
    public ResponseEntity<Void> eliminarDron(@PathVariable Integer codDron) {
        if(dronService.dronPorId(codDron)!= null) {
            dronService.eliminarDron(codDron);
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
