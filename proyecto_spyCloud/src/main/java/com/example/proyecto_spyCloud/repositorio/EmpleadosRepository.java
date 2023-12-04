package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Diagnostico;
import com.example.proyecto_spyCloud.entidad.Empleados;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadosRepository extends JpaRepository<Empleados, Integer> {
    Empleados findByEmail(String email);
}
