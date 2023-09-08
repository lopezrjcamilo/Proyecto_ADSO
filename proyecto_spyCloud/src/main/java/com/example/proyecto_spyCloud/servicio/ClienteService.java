package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Empleados;
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

        public List<Cliente> listarCliente() {
            return clienteRepository.findAll();
        }


        public Cliente clientePorId(Integer id) {
            Optional<Cliente> clienteOptional = clienteRepository.findById(id);
            return clienteOptional.orElse(null); // Devuelve null si el cliente no está presente en el Optional.
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

    public Cliente actualizar(Cliente cliente) {
        Optional<Administrador> administradorOptional = administradorRepository.findById(cliente.getAdministrador().getNumDoc());
        if (administradorOptional.isPresent()) {
            Administrador administrador = administradorOptional.get();
            cliente.setAdministrador(administrador);
            return clienteRepository.save(cliente);
        } else {
            return null;
        }
    }

        public void eliminarClientePorId(Integer idNit){
            clienteRepository.deleteById(idNit);
        }



}