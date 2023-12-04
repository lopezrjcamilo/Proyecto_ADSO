package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Integer> {

    Administrador findByEmail(String email);

}
