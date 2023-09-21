package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CultivoRepository extends JpaRepository<Cultivo, Integer>{

    @Query(value = "SELECT cultivos.* FROM cultivos INNER JOIN diagnosticos ON cultivos.cult_cod=diagnosticos.cod_cult", nativeQuery = true)
    List<Cultivo> cultivosConDiagnosticos();
}