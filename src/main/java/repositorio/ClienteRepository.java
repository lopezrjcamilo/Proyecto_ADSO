package repositorio;
//package com.Jpa_Proyecto.repository;

import com.Jpa_Proyecto.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, String> {
}
