package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Dron;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DronRepository extends JpaRepository<Dron, Integer> {
}
