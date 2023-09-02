package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.entidad.Tiene;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TieneRepository extends JpaRepository<Tiene, Integer> {
}
