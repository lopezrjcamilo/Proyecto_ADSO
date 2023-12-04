package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.repositorio.AdministradorRepository;
import com.example.proyecto_spyCloud.repositorio.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private ClienteRepository clienteRepository;
    private AdministradorRepository administradorRepository;

    @Autowired
    public ClienteService(ClienteRepository clienteRepository, AdministradorRepository administradorRepository) {
        this.clienteRepository = clienteRepository;
        this.administradorRepository = administradorRepository;
    }


    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public Cliente clientePorId(Integer numDoc) {
        return clienteRepository.findById(numDoc).orElse(null);
    }


    public Cliente clientePorCorreo(String email) {
        return clienteRepository.findByEmail(email);
    }

    public Cliente clientePorAdministrador(Integer numDocCliente){
        return clienteRepository.clientePorAdministrador(numDocCliente);
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

    public void eliminarClientePorId(Integer numDoc){
        clienteRepository.deleteById(numDoc);
}




}
