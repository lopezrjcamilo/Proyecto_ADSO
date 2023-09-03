package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Informacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InformacionRepository extends JpaRepository<Informacion, Integer> {
}
