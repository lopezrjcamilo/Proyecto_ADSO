package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.servicio.ClienteService;
import com.example.proyecto_spyCloud.servicio.DronService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }


    @GetMapping("/listar")
    public ResponseEntity<List<Cliente>> listarTodosLosClientes() {
        return new ResponseEntity<>(clienteService.listarClientes(), HttpStatus.OK);
    }

    @GetMapping("/{nit}")
    public ResponseEntity<Cliente> clientePorId(@PathVariable Integer nit) {
        Cliente cliente = clienteService.clientePorId(nit);
        if (cliente != null) {
            return ResponseEntity.ok(cliente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/Correo")
    public ResponseEntity<Cliente> clientePorCorreo(@RequestParam("correo") String correo) {
        Cliente cliente = clienteService.clientePorCorreo(correo);

        if (cliente != null) {
            return ResponseEntity.ok(cliente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
