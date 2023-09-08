package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.repositorio.DiagnosticoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DiagnosticoService {

    DiagnosticoRepository diagnosticoRepository;

    @Autowired
    public DiagnosticoService (DiagnosticoRepository diagnosticoRepository){
        this.diagnosticoRepository = diagnosticoRepository;
    }

    public List<Diagnostico> listarDiagnostico() {
        return diagnosticoRepository.findAll();
    }

    public Diagnostico diagnosticoPorId(String id) {
        return diagnosticoRepository.findById(Integer.valueOf(id)).get();
    }


}
