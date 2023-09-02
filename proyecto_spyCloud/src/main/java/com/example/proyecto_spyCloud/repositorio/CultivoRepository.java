package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CultivoRepository extends JpaRepository<Cultivo, Integer>{


}
