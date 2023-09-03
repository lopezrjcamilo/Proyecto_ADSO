package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Informedeldiagnostico;
import com.example.proyecto_spyCloud.repositorio.InformedeldiagnosticoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformedeldiagnosticoService {

    InformedeldiagnosticoRepository informedeldiagnosticoRepository;

    @Autowired
    public InformedeldiagnosticoService(InformedeldiagnosticoRepository informedeldiagnosticoRepository){
        this.informedeldiagnosticoRepository = informedeldiagnosticoRepository;
    }

    public List<Informedeldiagnostico> listarTiene() {
        return informedeldiagnosticoRepository.findAll();
    }

    public Informedeldiagnostico tienePorId(String id) {
        return informedeldiagnosticoRepository.findById(Integer.valueOf(id)).get();
    }

}
