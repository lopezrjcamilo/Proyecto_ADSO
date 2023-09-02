package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Dron;
import com.example.proyecto_spyCloud.repositorio.DronRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DronService {

    DronRepository dronRepository;

    @Autowired
    public DronService (DronRepository dronRepository){
        this.dronRepository = dronRepository;
    }

    public List<Dron> listarDron() {
        return dronRepository.findAll();
    }

    public Dron dronPorId(String id) {
        return dronRepository.findById(Integer.valueOf(id)).get();
    }

}
