package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import com.example.proyecto_spyCloud.entidad.Virus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VirusRepository extends JpaRepository<Virus, Integer> {

    @Query(value = "SELECT virus.* FROM virus INNER JOIN informacion ON virus.cod_virus=informacion.cod_virus INNER JOIN diagnosticos ON informacion.num_diag=diagnosticos.num_diag WHERE  diagnosticos.num_diag=:numeroDiagnostico ", nativeQuery = true)
    List<Virus> virusDeUnDiagnosticos(@Param("numeroDiagnostico") Integer numeroDiagnostico);
}
