package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import com.example.proyecto_spyCloud.servicio.AdministradorService;
import com.example.proyecto_spyCloud.servicio.CultivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/cultivos")
public class CultivoController {
    @Autowired
    private CultivoService cultivoService;
    public CultivoController(CultivoService cultivoService) {
        this.cultivoService = cultivoService;
    }

    @PostMapping("/insertar")
    public ResponseEntity<Cultivo> insertarCultivo(@RequestBody Cultivo cultivo) {

        return new ResponseEntity<>(cultivoService.insertarCultivo(cultivo), HttpStatus.CREATED);
    }


    @GetMapping("/listar")
    public ResponseEntity<List<Cultivo>> listarCultivo() {
        return new ResponseEntity<>(cultivoService.listarCultivo(), HttpStatus.OK);
    }
    @GetMapping("/listarCultivoConDiagnosticos")
    public ResponseEntity<List<Cultivo>> listarCultivoConDiagnosticos() {
        return new ResponseEntity<>(cultivoService.cultivosConDiagnosticos(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Cultivo> cultivoPorId(@PathVariable Integer id) {
        Cultivo cultivo = cultivoService.cultivoPorId(id);
        if (cultivo != null) {
            return ResponseEntity.ok(cultivo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/actualizar/{codCult}")
    public ResponseEntity<Cultivo> actualizarCultivo(
            @PathVariable Integer codCult, @RequestBody Cultivo cultivo) {
        System.out.println("Método actualizarCultivo ejecutado");
        Cultivo cultivoActualizado = cultivoService.actualizarCultivo(codCult, cultivo);
        if (cultivoActualizado != null) {
            return new ResponseEntity<>(cultivoActualizado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("eliminar/{codCult}")
    public  ResponseEntity<Void> eliminarProveedor(@PathVariable Integer codCult){
        if(cultivoService.cultivoPorId(codCult)!= null) {
            cultivoService.eliminarCultivo(codCult);
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
