package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Visita;
import com.example.proyecto_spyCloud.repositorio.VisitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitaService {

    VisitaRepository visitaRepository;

    @Autowired
    public VisitaService (VisitaRepository visitaRepository){
        this.visitaRepository = visitaRepository;
    }

    public List<Visita> listarVisita() {
        return visitaRepository.findAll();
    }

    public Visita visitaPorId(String id) {
        return visitaRepository.findById(Integer.valueOf(id)).get();
    }

}
