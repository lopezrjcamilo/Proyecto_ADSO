package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.*;
import com.example.proyecto_spyCloud.repositorio.CultivoRepository;
import com.example.proyecto_spyCloud.repositorio.EmpleadosRepository;
import com.example.proyecto_spyCloud.repositorio.VisitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class VisitaService {

    VisitaRepository visitaRepository;
    EmpleadosRepository empleadosRepository;
    CultivoRepository cultivoRepository;
    @Autowired
    public VisitaService(VisitaRepository visitaRepository, EmpleadosRepository empleadosRepository, CultivoRepository cultivoRepository) {
        this.visitaRepository = visitaRepository;
        this.empleadosRepository = empleadosRepository;
        this.cultivoRepository = cultivoRepository;
    }

    public List<Visita> listarVisita() {
        return visitaRepository.findAll();
    }

    public Visita visitaPorId(Integer id) {
        return visitaRepository.findById(Integer.valueOf(id)).get();
    }


    public Visita insertarVisita(Visita visita){
        Optional<Empleados> empleadosOptional= empleadosRepository.findById(visita.getEmpleados().getNumDoc());
        Optional<Cultivo> cultivoOptional= cultivoRepository.findById(visita.getCultivo().getCodCult());
        if(empleadosOptional.isPresent() && cultivoOptional.isPresent()){
            Empleados empleados=empleadosOptional.get();
            Cultivo cultivo=cultivoOptional.get();
            visita.setEmpleados(empleados);
            visita.setCultivo(cultivo);
            return visitaRepository.save(visita);
        }else{
            return null;
        }
    }
    public void eliminarVisita(Integer numVisita){
        visitaRepository.deleteById(numVisita);
    }
    public Visita actualizarVisita(Visita visita){
        Optional<Empleados> empleadosOptional= empleadosRepository.findById(visita.getEmpleados().getNumDoc());
        Optional<Cultivo> cultivoOptional= cultivoRepository.findById(visita.getCultivo().getCodCult());
        if(empleadosOptional.isPresent() && cultivoOptional.isPresent()){
            Empleados empleados=empleadosOptional.get();
            Cultivo cultivo=cultivoOptional.get();
            visita.setEmpleados(empleados);
            visita.setCultivo(cultivo);
            return visitaRepository.save(visita);
        }else{
            return null;
        }
    }



}
