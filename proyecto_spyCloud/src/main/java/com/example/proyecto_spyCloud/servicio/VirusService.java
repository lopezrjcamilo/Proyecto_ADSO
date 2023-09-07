package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Virus;
import com.example.proyecto_spyCloud.repositorio.VirusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VirusService {

    VirusRepository virusRepository;

    @Autowired
    public VirusService (VirusRepository virusRepository){
        this.virusRepository = virusRepository;
    }

    public List<Virus> listarVirus() {
        return virusRepository.findAll();
    }

    public Virus virusPorId(Integer id) {
        return virusRepository.findById(id).get();
    }

}
