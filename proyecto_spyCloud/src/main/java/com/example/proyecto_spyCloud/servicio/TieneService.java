package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Tiene;
import com.example.proyecto_spyCloud.repositorio.TieneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TieneService {

    TieneRepository tieneRepository;

    @Autowired
    public TieneService (TieneRepository tieneRepository){
        this.tieneRepository = tieneRepository;
    }

    public List<Tiene> listarTiene() {
        return tieneRepository.findAll();
    }

    public Tiene tienePorId(String id) {
        return tieneRepository.findById(Integer.valueOf(id)).get();
    }

}
