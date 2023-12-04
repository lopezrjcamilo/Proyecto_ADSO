package com.example.proyecto_spyCloud.repositorio;

import com.example.proyecto_spyCloud.entidad.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,String> {

    Usuario findByEmail(String email);
}
