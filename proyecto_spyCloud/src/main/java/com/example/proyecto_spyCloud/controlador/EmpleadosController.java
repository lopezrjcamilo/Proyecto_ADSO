package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Empleados;
import com.example.proyecto_spyCloud.servicio.EmpleadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<Empleados> empleadosPorId(@PathVariable Integer id) {
        Empleados empleados = empleadosService.empleadosPorId(String.valueOf(id));
        if (empleados != null) {
            return ResponseEntity.ok(empleados);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
