package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.*;
import com.example.proyecto_spyCloud.repositorio.DiagnosticoRepository;
import com.example.proyecto_spyCloud.repositorio.InformacionRepository;
import com.example.proyecto_spyCloud.repositorio.VirusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformacionService {

    private InformacionRepository informacionRepository;
    private DiagnosticoRepository diagnosticoRepository;
    private VirusRepository virusRepository;
    @Autowired
    public InformacionService(InformacionRepository informacionRepository, DiagnosticoRepository diagnosticoRepository, VirusRepository virusRepository) {
        this.informacionRepository = informacionRepository;
        this.diagnosticoRepository = diagnosticoRepository;
        this.virusRepository = virusRepository;
    }




    public List<Informacion> listarInformacion() {
        return informacionRepository.findAll();
    }

    public Informacion informacionPorId(Integer id) {
        return informacionRepository.findById(Integer.valueOf(id)).get();
    }

}
