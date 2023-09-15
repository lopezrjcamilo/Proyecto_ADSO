package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Cultivo;
import com.example.proyecto_spyCloud.repositorio.CultivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CultivoService {

    CultivoRepository cultivoRepository;

    @Autowired
    public CultivoService(CultivoRepository cultivoRepository) {
        this.cultivoRepository = cultivoRepository;
    }

    public Cultivo insertarCultivo(Cultivo cultivo) {
        return cultivoRepository.save(cultivo);
    }

    public List<Cultivo> listarCultivo() {
        return (List<Cultivo>) cultivoRepository.findAll();
    }

    public Cultivo cultivoPorId(Integer id) {
        if (cultivoRepository.findById(id).isPresent()) {
            return cultivoRepository.findById(id).get();
        } else {
            return null;
        }
    }
    public List<Cultivo> cultivosConDiagnosticos(){
        return cultivoRepository.cultivosConDiagnosticos();
    }



    public Cultivo actualizarCultivo(Integer codCult, Cultivo cultivo) {
        if (cultivo.getCodCult() != null && cultivoRepository.existsById(cultivo.getCodCult())) {
            return cultivoRepository.save(cultivo);
        } else {
            return null; // El administrador no existe o falta información requerida
        }
    }


    public void eliminarCultivo(Integer id) {
        cultivoRepository.deleteById(id);
    }



}
