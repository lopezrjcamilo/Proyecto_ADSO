package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Facturacion;
import com.example.proyecto_spyCloud.repositorio.FacturacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturacionService {

    FacturacionRepository facturacionRepository;

    @Autowired
    public FacturacionService (FacturacionRepository facturacionRepository){
        this.facturacionRepository = facturacionRepository;
    }

    public List<Facturacion> listarFacturacion() {
        return facturacionRepository.findAll();
    }

    public Facturacion facturacionPorId(String id) {
        return facturacionRepository.findById(Integer.valueOf(id)).get();
    }

}
