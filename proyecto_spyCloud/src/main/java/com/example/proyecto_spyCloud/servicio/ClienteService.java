package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.repositorio.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    private ClienteRepository clienteRepository;

    @Autowired
    public ClienteService (ClienteRepository clienteRepository){
        this.clienteRepository= clienteRepository;
    }

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public Cliente clientePorId(Integer idNit) {
        return clienteRepository.findById(idNit).orElse(null);
    }


    public Cliente clientePorCorreo(String correo) {
        return clienteRepository.findByCorreo(correo);
    }



    public Cliente insertarCliente(Cliente cliente){
        Optional<Administrador> administradorOptional= administradorRepository.findById(cliente.getAdministrador().getNumDoc());
        if(administradorOptional.isPresent()){
            Administrador administrador=administradorOptional.get();
            cliente.setAdministrador(administrador);
            return clienteRepository.save(cliente);
        }else{
            return null;
        }
    }

    public Cliente actualizarCliente (Cliente cliente){
        Optional<Administrador> administradorOptional= administradorRepository.findById(cliente.getAdministrador().getNumDoc());
        if(administradorOptional.isPresent()){
            Administrador administrador=administradorOptional.get();
            cliente.setAdministrador(administrador);
            return clienteRepository.save(cliente);
        }else{
            return null;
        }
    }

    public void eliminarClientePorId(Integer idNit){
        clienteRepository.deleteById(idNit);
    }




}
