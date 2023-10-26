package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.entidad.Multimedia;
import com.example.proyecto_spyCloud.repositorio.DiagnosticoRepository;
import com.example.proyecto_spyCloud.repositorio.MultimediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MultimediaService {

    private MultimediaRepository multimediaRepository;
    private DiagnosticoRepository diagnosticoRepository;

    @Autowired
    public MultimediaService(MultimediaRepository multimediaRepository, DiagnosticoRepository diagnosticoRepository) {
        this.multimediaRepository = multimediaRepository;
        this.diagnosticoRepository = diagnosticoRepository;
    }







    public List<Multimedia> listarMultimedia() {
        return multimediaRepository.findAll();
    }

    public Multimedia multimediaPorId(Integer id) {
        if(multimediaRepository.findById(Integer.valueOf(id)).isPresent()){
            return multimediaRepository.findById(Integer.valueOf(id)).get();
        }else{
            return null;
        }
    }

    public Multimedia insertarMultimedia(Multimedia multimedia){
        Optional<Diagnostico> diagnosticoOptional= diagnosticoRepository.findById(multimedia.getDiagnostico().getNumDiag());
        if(diagnosticoOptional.isPresent()){
            Diagnostico diagnostico=diagnosticoOptional.get();
            multimedia.setDiagnostico(diagnostico);
            return multimediaRepository.save(multimedia);
        }else{
            return null;
        }
    }

    public Multimedia actualizarMultimedia(Multimedia multimedia){
        Optional<Diagnostico> diagnosticoOptional= diagnosticoRepository.findById(multimedia.getDiagnostico().getNumDiag());
        if(diagnosticoOptional.isPresent()){
            Diagnostico diagnostico=diagnosticoOptional.get();
            multimedia.setDiagnostico(diagnostico);
            return multimediaRepository.save(multimedia);
        }else{
            return null;
        }
    }

    public void eliminarMultimediaPorId(Integer codMult){
        multimediaRepository.deleteById(codMult);
    }

}
