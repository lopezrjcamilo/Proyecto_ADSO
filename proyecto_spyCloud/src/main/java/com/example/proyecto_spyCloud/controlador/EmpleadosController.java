package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Empleados;
import com.example.proyecto_spyCloud.servicio.EmpleadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
<<<<<<< HEAD
    public ResponseEntity<Empleados> empleadosPorId(@PathVariable Integer id) {
        Empleados empleados = empleadosService.empleadosPorId(Integer.valueOf(String.valueOf(id)));
=======
    public ResponseEntity<Empleados> empleadosPorId(@PathVariable Integer id) {Empleados empleados = empleadosService.empleadosPorId(id);
>>>>>>> 18c6de7e8a6a8063c64ace9ed0d63197d9160449
        if (empleados != null) {
            return ResponseEntity.ok(empleados);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/agregar")
    public ResponseEntity<Empleados> insertarEmpleados(@RequestBody Empleados empleadosPost){
        Empleados empleados = empleadosService.empleadosPorId(empleadosPost.getCodEmp());
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
    @PutMapping("/actualizar")
    public ResponseEntity<Empleados> actualizarEmpleados(@RequestBody Empleados empleadosPut){
        Empleados empleados = empleadosService.empleadosPorId(empleadosPut.getCodEmp());
        if (empleados != null) {
            empleadosService.insertarEmpleados(empleadosPut);
            return ResponseEntity.ok(empleadosPut);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

<<<<<<< HEAD
}
=======
}
>>>>>>> 18c6de7e8a6a8063c64ace9ed0d63197d9160449
