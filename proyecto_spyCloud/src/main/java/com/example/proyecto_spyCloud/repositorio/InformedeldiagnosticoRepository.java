package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Informedeldiagnostico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InformedeldiagnosticoRepository extends JpaRepository<Informedeldiagnostico, Integer> {
}
