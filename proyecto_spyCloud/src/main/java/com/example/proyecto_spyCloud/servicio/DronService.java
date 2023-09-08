package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
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

    public Dron dronPorId(Integer id) {
        if (dronRepository.findById(id).isPresent()) {
            return dronRepository.findById(id).get();
        } else {
            return null;
        }
    }


    public Dron insertarDron(Dron dron) {
        return dronRepository.save(dron);
    }
    public Dron actualizarDron(Dron dron) {
        if (dron.getCodDron() != null && dronRepository.existsById(dron.getCodDron())) {
            return dronRepository.save(dron);
        }
        return null;
    }

    public void eliminarDron(Integer codDron) {
        dronRepository.deleteById(codDron);
    }

}
