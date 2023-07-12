package servicio;
//package com.Jpa_Proyecto.service;

import com.Jpa_Proyecto.entity.Cliente;
import com.Jpa_Proyecto.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public Cliente getClienteByNit(String nit) {
        return clienteRepository.findById(nit).orElse(null);
    }

    public Cliente createCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente updateCliente(String nit, Cliente cliente) {
        Cliente existingCliente = clienteRepository.findById(nit).orElse(null);
        if (existingCliente != null) {
            existingCliente.setNom_cliente(cliente.getNom_cliente());
            existingCliente.setCorreo(cliente.getCorreo());
            existingCliente.setTelefono(cliente.getTelefono());
            return clienteRepository.save(existingCliente);
        } else {
            return null;
        }
    }

    public boolean deleteCliente(String nit) {
        Cliente existingCliente = clienteRepository.findById(nit).orElse(null);
        if (existingCliente != null) {
            clienteRepository.delete(existingCliente);
            return true;
        } else {
            return false;
        }
    }
}
