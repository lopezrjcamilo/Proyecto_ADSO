package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Usuario;
import com.example.proyecto_spyCloud.repositorio.AdministradorRepository;
import com.example.proyecto_spyCloud.repositorio.ClienteRepository;
import com.example.proyecto_spyCloud.repositorio.EmpleadosRepository;
import com.example.proyecto_spyCloud.repositorio.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.Map;
@Service
public class UsuarioService {

    private UsuarioRepository repositorio;
    private AdministradorRepository administradorRepository;
    private EmpleadosRepository empleadosRepository;
    private ClienteRepository clienteRepository;

    public UsuarioService(UsuarioRepository repositorio, AdministradorRepository administradorRepository, EmpleadosRepository empleadosRepository, ClienteRepository clienteRepository) {
        this.repositorio = repositorio;
        this.administradorRepository = administradorRepository;
        this.empleadosRepository = empleadosRepository;
        this.clienteRepository = clienteRepository;
    }

    public Usuario crear(Usuario usuario){
        return repositorio.save(usuario);
    }


    public Usuario buscarEmail(String email){

        if(repositorio.findById(email).isPresent()){
            return  this.repositorio.findById(email).get();
        }else{
            return null;
        }

    }

    public Usuario getCrearUsuario(Map<String, Object> dataUser){

        String email= (String) dataUser.get("email");
        // System.out.println(email);
        Usuario user=buscarEmail(email); //Si ya existe solo lo retorna
        String rol="";
        if(user==null) {
            String name = (String) dataUser.get("nickname");
            String imag = (String) dataUser.get("picture");
            String auth_id = (String) dataUser.get("sub");
            //Estudiante est=repoEst.findByCorreo(email);
            if(administradorRepository.findByEmail(email)!=null){
                rol="Administrador";
            }
            else if (clienteRepository.findByCorreo(email)!=null)
            {
                rol="Cliente";
            }
            else if (empleadosRepository.findByEmail(email)!=null){
                rol="Empleados";
            }
            else {
                rol="Otro";
            }
            Usuario nuevo = new Usuario(email, name, imag, auth_id,rol);
            return this.crear(nuevo);
        }else{
            return user;
        }


    }

}
