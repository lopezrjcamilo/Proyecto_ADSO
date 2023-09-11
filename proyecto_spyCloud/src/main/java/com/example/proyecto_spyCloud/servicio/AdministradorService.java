package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.repositorio.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministradorService {

    AdministradorRepository administradorRepository;
    @Autowired
    public AdministradorService (AdministradorRepository administradorRepository){
        this.administradorRepository = administradorRepository;
    }

    public Administrador insertarAdministrador(Administrador administrador) {
        return administradorRepository.save(administrador);
    }

    public List<Administrador> listarAdministradores() {
        return administradorRepository.findAll();
    }

    public Administrador administradorPorId(Integer id) {
        if (administradorRepository.findById(id).isPresent()) {
            return administradorRepository.findById(id).get();
        } else {
            return null;
        }
    }

    public Administrador actualizarAdministrador(Administrador administrador) {
        if (administrador.getNumDoc() != null && administradorRepository.existsById(administrador.getNumDoc())) {
            return administradorRepository.save(administrador);
        }
        return null; // El administrador no existe o falta información requerida
    }

    public void eliminarAdministrador(Integer numDoc) {
        administradorRepository.deleteById(numDoc);
    }

    // Otras operaciones relacionadas con administradores, como actualización y eliminación


}

