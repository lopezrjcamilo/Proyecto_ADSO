package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.User;
import com.example.proyecto_spyCloud.repositorio.AdministradorRepository;
import com.example.proyecto_spyCloud.repositorio.EmpleadosRepository;
import com.example.proyecto_spyCloud.repositorio.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service

public class UserService {

    private UserRepository repository;
    private AdministradorRepository administradorRepository;
    private EmpleadosRepository empleadosRepository;

    public UserService(UserRepository repository, AdministradorRepository administradorRepository, EmpleadosRepository empleadosRepository) {
        this.repository = repository;
        this.administradorRepository = administradorRepository;
        this.empleadosRepository = empleadosRepository;
    }

    public User createUser(User newUser) {
        return this.repository.save(newUser);
    }

    public User findUserByEmail(String email) {
        return this.repository.findByEmail(email);
    }

    public User getOrCreateUser(Map<String, Object> userData) {
        String email = (String) userData.get("email");


        User user = findUserByEmail(email);

        if (user == null) {
            String name = (String) userData.get("nickname");
            String image = (String) userData.get("picture");
            String auth0id = (String) userData.get("sub");
            String rol="";
            System.out.println("ingreso 1");
            if (administradorRepository.findByEmail(email)!=null){
                System.out.println("ingreso 2");
                rol="Administrador";
            }
            else if(empleadosRepository.findByEmail(email)!=null) {
                rol="Empleado";

            }else {
                return null;
            }
            User newUser = new User(email = email, image = image, auth0id = auth0id, rol=rol);
            return createUser(newUser);
        }else{
            return user;
        }

    }

}
