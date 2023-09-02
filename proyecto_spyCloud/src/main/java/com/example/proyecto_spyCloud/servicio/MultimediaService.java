package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Multimedia;
import com.example.proyecto_spyCloud.repositorio.MultimediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MultimediaService {

    MultimediaRepository multimediaRepository;

    @Autowired
    public MultimediaService (MultimediaRepository multimediaRepository){
        this.multimediaRepository = multimediaRepository;
    }

    public List<Multimedia> listarMultimedia() {
        return multimediaRepository.findAll();
    }

    public Multimedia multimediaPorId(String id) {
        return multimediaRepository.findById(Integer.valueOf(id)).get();
    }

}
