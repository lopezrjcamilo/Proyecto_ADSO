package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Empleados;
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
        List<Cliente> clientes = clienteService.listarCliente();
        return ResponseEntity.ok(clientes);
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

    @PostMapping("/agregar")
    public ResponseEntity<Cliente> insertarCliente(@RequestBody Cliente clientePost) {
        Cliente clienteExistente = clienteService.clientePorId(clientePost.getIdNit());
        if (clienteExistente != null) {
            return ResponseEntity.badRequest().build(); // Cliente ya existe, respuesta de error 400 (Bad Request).
        } else {
            Cliente clienteCreado = clienteService.insertarCliente(clientePost);
            return ResponseEntity.status(HttpStatus.CREATED).body(clienteCreado);
        }
    }

    @DeleteMapping("/eliminar/{idNit}")
    public ResponseEntity<Void> eliminarClientePorId(@PathVariable Integer idNit) {
        Cliente cliente = clienteService.clientePorId(idNit);
        if (cliente != null) {
            clienteService.eliminarClientePorId(idNit);
            return ResponseEntity.noContent().build(); // Cliente eliminado con éxito, respuesta de éxito 204 (No Content).
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/agregar")
    public ResponseEntity<Cliente> insertarCliente(@RequestBody Cliente clientePost){
        Cliente cliente = clienteService.clientePorId(clientePost.getIdNit());
        if (cliente != null) {
            return ResponseEntity.notFound().build();
        } else {
            clienteService.insertarCliente(clientePost);
            return ResponseEntity.ok(clientePost);
        }
    }
    @DeleteMapping("/eliminar/{idNit}")
    public ResponseEntity<Void> insertarCliente(@PathVariable Integer idNit){
        Cliente cliente = clienteService.clientePorId(idNit);
        if (cliente != null) {
            clienteService.eliminarClientePorId(idNit);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/actualizar")
    public ResponseEntity<Cliente> actualizarCliente(@RequestBody Cliente clientePut){
        Cliente cliente = clienteService.clientePorId(clientePut.getIdNit());
        if (cliente != null) {
            clienteService.insertarCliente(clientePut);
            return ResponseEntity.ok(clientePut);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


    @PutMapping("/actualizar")
    public ResponseEntity<Cliente> actualizarCliente(@RequestBody Cliente clientePut) {
        Cliente clienteExistente = clienteService.clientePorId(clientePut.getIdNit());
        if (clienteExistente != null) {
            Cliente clienteActualizado = clienteService.actualizar(clientePut);
            return ResponseEntity.ok(clienteActualizado);
        } else {
            return ResponseEntity.notFound().build(); // Cliente no encontrado, respuesta de error 404 (Not Found).
        }
    }
}