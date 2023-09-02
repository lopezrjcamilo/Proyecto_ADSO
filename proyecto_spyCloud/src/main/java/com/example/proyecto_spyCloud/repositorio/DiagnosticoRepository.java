package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.entidad.Virus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiagnosticoRepository extends JpaRepository<Diagnostico, Integer> {
}
