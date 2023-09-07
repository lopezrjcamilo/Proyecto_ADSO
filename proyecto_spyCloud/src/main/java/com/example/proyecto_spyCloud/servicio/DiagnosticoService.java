package com.example.proyecto_spyCloud.servicio;

<<<<<<< HEAD
import com.example.proyecto_spyCloud.entidad.*;
import com.example.proyecto_spyCloud.repositorio.CultivoRepository;
=======
import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import com.example.proyecto_spyCloud.entidad.Diagnostico;
>>>>>>> 1503245 (Modificacion de tablas "clienteService" y "clienteController" añadiendo la funcion de ingresar con llave foranea, actualizar y eliminar.)
import com.example.proyecto_spyCloud.repositorio.DiagnosticoRepository;
import com.example.proyecto_spyCloud.repositorio.DronRepository;
import com.example.proyecto_spyCloud.repositorio.VirusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DiagnosticoService {

    DiagnosticoRepository diagnosticoRepository;
    CultivoRepository cultivoRepository;
    VirusRepository virusRepository;
    DronRepository dronRepository;

    @Autowired
    public DiagnosticoService(DiagnosticoRepository diagnosticoRepository, CultivoRepository cultivoRepository, VirusRepository virusRepository, DronRepository dronRepository) {
        this.diagnosticoRepository = diagnosticoRepository;
        this.cultivoRepository = cultivoRepository;
        this.virusRepository = virusRepository;
        this.dronRepository = dronRepository;
    }




    public List<Diagnostico> listarDiagnostico() {
        return diagnosticoRepository.findAll();
    }

    public Diagnostico diagnosticoPorId(String id) {
        return diagnosticoRepository.findById(Integer.valueOf(id)).get();
    }

<<<<<<< HEAD
    public Diagnostico insertarDiagnostico(Diagnostico diagnostico){
        Optional<Cultivo> cultivoOptional= cultivoRepository.findById(diagnostico.getCultivo().getCodCult());
        Optional<Dron> dronOptional= dronRepository.findById(diagnostico.getDron().getCodDron());
        if(cultivoOptional.isPresent() && dronOptional.isPresent()){
            Cultivo cultivo=cultivoOptional.get();
            Dron dron=dronOptional.get();
            diagnostico.setCultivo(cultivo);
            diagnostico.setDron(dron);
            return diagnosticoRepository.save(diagnostico);
        }else{
            return null;
        }
    }

    public Diagnostico actualizarDiagnostico(Diagnostico diagnostico){
        Optional<Cultivo> cultivoOptional= cultivoRepository.findById(diagnostico.getCultivo().getCodCult());
        Optional<Dron> dronOptional= dronRepository.findById(diagnostico.getDron().getCodDron());
        if(cultivoOptional.isPresent() && dronOptional.isPresent()){
            Cultivo cultivo=cultivoOptional.get();
            Dron dron=dronOptional.get();
            diagnostico.setCultivo(cultivo);
            diagnostico.setDron(dron);
            return diagnosticoRepository.save(diagnostico);
        }else{
            return null;
        }
    }

    public void eliminarDiagnostico(Integer numDiag){
        diagnosticoRepository.deleteById(numDiag);
    }
=======

>>>>>>> 1503245 (Modificacion de tablas "clienteService" y "clienteController" añadiendo la funcion de ingresar con llave foranea, actualizar y eliminar.)
}
