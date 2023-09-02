package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Empleados;
import com.example.proyecto_spyCloud.repositorio.EmpleadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadosService {

    EmpleadosRepository empleadosRepository;

    @Autowired
    public EmpleadosService (EmpleadosRepository empleadosRepository){
        this.empleadosRepository = empleadosRepository;
    }

    public List<Empleados> listarEmpleados() {
        return empleadosRepository.findAll();
    }

    public Empleados empleadosPorId(String id) {
        return empleadosRepository.findById(Integer.valueOf(id)).get();
    }

}
