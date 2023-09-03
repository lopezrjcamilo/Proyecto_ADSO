package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.repositorio.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
//sadasdasda

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
}
