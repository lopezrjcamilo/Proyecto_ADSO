package com.example.proyecto_spyCloud.repositorio;


import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Cultivo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    Cliente findByEmail(String Email);

    @Query(value = "SELECT clientes.* FROM clientes INNER JOIN administrador ON clientes.num_doc=administrador.num_doc where clientes.nit=:nitCliente", nativeQuery = true)
    Cliente clientePorAdministrador(@Param("nitCliente") Integer nitCliente);

}

