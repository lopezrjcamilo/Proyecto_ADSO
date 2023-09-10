package com.example.proyecto_spyCloud.servicio;
<<<<<<< HEAD

import com.example.proyecto_spyCloud.entidad.*;
import com.example.proyecto_spyCloud.repositorio.CultivoRepository;
import com.example.proyecto_spyCloud.repositorio.EmpleadosRepository;
=======
import com.example.proyecto_spyCloud.entidad.Visita;
>>>>>>> 18c6de7e8a6a8063c64ace9ed0d63197d9160449
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




}
