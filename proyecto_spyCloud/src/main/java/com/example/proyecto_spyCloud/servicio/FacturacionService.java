package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import com.example.proyecto_spyCloud.entidad.Facturacion;
import com.example.proyecto_spyCloud.repositorio.CultivoRepository;
import com.example.proyecto_spyCloud.repositorio.FacturacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacturacionService {

    private FacturacionRepository facturacionRepository;
    private CultivoRepository cultivoRepository;

    @Autowired
    public FacturacionService(FacturacionRepository facturacionRepository, CultivoRepository cultivoRepository) {
        this.facturacionRepository = facturacionRepository;
        this.cultivoRepository = cultivoRepository;
    }

    public List<Facturacion> listarFacturacion() {
        return facturacionRepository.findAll();
    }

    public Facturacion facturacionPorId(Integer id) {
        return facturacionRepository.findById(id).get();
    }

    public Facturacion insertarFacturacion(Facturacion facturacion){
        Optional<Cultivo> cultivoOptional= cultivoRepository.findById(facturacion.getCultivo().getCodCult());
        if(cultivoOptional.isPresent()){
            Cultivo cultivo=cultivoOptional.get();
            facturacion.setCultivo(cultivo);
            return facturacionRepository.save(facturacion);
        }else{
            return null;
        }
    }

    public Facturacion actualizarFacturacion(Facturacion facturacion){
        Optional<Cultivo> cultivoOptional= cultivoRepository.findById(facturacion.getCultivo().getCodCult());
        if(cultivoOptional.isPresent()){
            Cultivo cultivo=cultivoOptional.get();
            facturacion.setCultivo(cultivo);
            return facturacionRepository.save(facturacion);
        }else{
            return null;
        }
    }

    public void eliminarFacturacionPorId(Integer numFac){
        facturacionRepository.deleteById(numFac);
    }


}
