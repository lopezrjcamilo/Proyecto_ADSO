package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Empleados;
import com.example.proyecto_spyCloud.servicio.EmpleadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
@RestController
@RequestMapping("/empleados")
public class EmpleadosController {

    @Autowired
    private EmpleadosService empleadosService;
    public EmpleadosController(EmpleadosService empleadosService) {
        this.empleadosService = empleadosService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Empleados>> listarEmpleados() {
        return new ResponseEntity<>(empleadosService.listarEmpleados(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleados> empleadosPorId(@PathVariable Integer id) {
        Empleados empleados = empleadosService.empleadosPorId(id);
        if (empleados != null) {
            return ResponseEntity.ok(empleados);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/insertar")
    public ResponseEntity<Empleados> insertarEmpleados(@RequestBody Empleados empleadosPost){
        Empleados empleados = empleadosService.empleadosPorId(empleadosPost.getNumDoc());
        if (empleados != null) {
            return ResponseEntity.notFound().build();
        } else {
            empleadosService.insertarEmpleados(empleadosPost);
            return ResponseEntity.ok(empleadosPost);
        }
    }
    @DeleteMapping("/eliminar/{CodEmp}")
    public ResponseEntity<Void> eliminarEmpleadosPorId(@PathVariable Integer CodEmp){
        Empleados empleados = empleadosService.empleadosPorId(CodEmp);
        if (empleados != null) {
            empleadosService.eliminarEmpleadosPorId(CodEmp);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/actualizar/{CodEmp}")
    public ResponseEntity<Empleados> actualizarEmpleados(@RequestBody Empleados empleadosPut){
        Empleados empleados = empleadosService.empleadosPorId(empleadosPut.getNumDoc());
        if (empleados != null) {
            empleadosService.insertarEmpleados(empleadosPut);
            return ResponseEntity.ok(empleadosPut);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
