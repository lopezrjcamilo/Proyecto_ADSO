package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.repositorio.AdministradorRepository;
import com.example.proyecto_spyCloud.repositorio.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
//sadasdasda

    private ClienteRepository clienteRepository;
    private AdministradorRepository administradorRepository;

    public ClienteService(ClienteRepository clienteRepository, AdministradorRepository administradorRepository) {
        this.clienteRepository = clienteRepository;
        this.administradorRepository = administradorRepository;
    }

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }
    public String agregarCliente(Integer admi){
        Cliente cli= new Cliente();
        Administrador ad= administradorRepository.findById(admi).get();
        if(administradorRepository.findById(admi).isPresent() ){
            cli.setAdministrador(ad);
            clienteRepository.save(cli);
            return  "Cliente registrado";
        }
        else return  "El administrador no existe";
    }

    public Cliente clientePorId(Integer idNit) {
        return clienteRepository.findById(idNit).orElse(null);
    }


    public Cliente clientePorCorreo(String correo) {
        return clienteRepository.findByCorreo(correo);
    }
}
