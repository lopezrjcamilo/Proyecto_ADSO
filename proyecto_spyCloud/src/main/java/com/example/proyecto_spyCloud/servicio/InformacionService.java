package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Informacion;
import com.example.proyecto_spyCloud.repositorio.InformacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformacionService {

    InformacionRepository informacionRepository;

    @Autowired
    public InformacionService(InformacionRepository informacionRepository){
        this.informacionRepository = informacionRepository;
    }

    public List<Informacion> listarInformacion() {
        return informacionRepository.findAll();
    }

    public Informacion InformacionPorId(String id) {
        return informacionRepository.findById(Integer.valueOf(id)).get();
    }

}
