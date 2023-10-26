package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.*;
import com.example.proyecto_spyCloud.repositorio.DiagnosticoRepository;
import com.example.proyecto_spyCloud.repositorio.InformacionRepository;
import com.example.proyecto_spyCloud.repositorio.VirusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        if(informacionRepository.findById(Integer.valueOf(id)).isPresent()){
            return informacionRepository.findById(Integer.valueOf(id)).get();
        }else{
            return null;
        }
    }
    public Informacion insertarInformacion(Informacion informacion){
        Optional<Diagnostico> diagnosticoOptional= diagnosticoRepository.findById(informacion.getDiagnostico().getNumDiag());
        Optional<Virus> virusOptional= virusRepository.findById(informacion.getVirus().getCodVirus());
        if(diagnosticoOptional.isPresent() && virusOptional.isPresent()){
            Diagnostico diagnostico=diagnosticoOptional.get();
            Virus virus=virusOptional.get();
            informacion.setDiagnostico(diagnostico);
            informacion.setVirus(virus);
            return informacionRepository.save(informacion);
        }else{
            return null;
        }
    }

    public Informacion actualizarInformacion(Informacion informacion){
        Optional<Diagnostico> diagnosticoOptional= diagnosticoRepository.findById(informacion.getDiagnostico().getNumDiag());
        Optional<Virus> virusOptional= virusRepository.findById(informacion.getVirus().getCodVirus());
        if(diagnosticoOptional.isPresent() && virusOptional.isPresent()){
            Diagnostico diagnostico=diagnosticoOptional.get();
            Virus virus=virusOptional.get();
            informacion.setDiagnostico(diagnostico);
            informacion.setVirus(virus);
            return informacionRepository.save(informacion);
        }else{
            return null;
        }
    }

    public void eliminarInformacion(Integer numReg){
        informacionRepository.deleteById(numReg);
    }

}
