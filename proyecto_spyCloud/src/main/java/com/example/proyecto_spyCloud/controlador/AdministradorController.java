package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.servicio.AdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/administradores")
public class AdministradorController {

    @Autowired
    private AdministradorService administradorService;
    public AdministradorController(AdministradorService administradorService) {
        this.administradorService = administradorService;
    }

    @PostMapping("/insertar")
    public ResponseEntity<Administrador> insertarAdministrador(@RequestBody Administrador administrador) {
        Integer numDoc = administrador.getNumDoc();

        // No es necesario verificar si el administrador ya existe por ID aquí

        administrador.setNumDoc(numDoc); // Set the provided num_doc as ID
        return new ResponseEntity<>(administradorService.insertarAdministrador(administrador), HttpStatus.CREATED);
    }



    @GetMapping("/listar")
    public ResponseEntity<List<Administrador>> listarAdministradores() {
        return new ResponseEntity<>(administradorService.listarAdministradores(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Administrador> aministradorPorId(@PathVariable Integer id) {
        Administrador administrador = administradorService.administradorPorId(id);
        if (administrador != null) {
            return ResponseEntity.ok(administrador);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/actualizar/{numDoc}")
    public ResponseEntity<Administrador> actualizarAdministrador(
            @PathVariable Integer numDoc, @RequestBody Administrador administrador) {
        administrador.setNumDoc(numDoc);
        Administrador administradorActualizado = administradorService.actualizarAdministrador(administrador);
        if (administradorActualizado != null) {
            return ResponseEntity.ok(administradorActualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/eliminar/{numDoc}")
    public ResponseEntity<Void> eliminarAdministrador(@PathVariable Integer numDoc) {
        if(administradorService.administradorPorId(numDoc)!= null) {
            administradorService.eliminarAdministrador(numDoc);
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




}

