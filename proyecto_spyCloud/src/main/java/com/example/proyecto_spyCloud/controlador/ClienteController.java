package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.servicio.ClienteService;
import com.example.proyecto_spyCloud.servicio.DronService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge=3600)
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

    @GetMapping("/clienteAdmin/{nit}")
    public ResponseEntity<Cliente> clientePorAdministrador(@PathVariable Integer nit) {
        return new ResponseEntity<>(clienteService.clientePorAdministrador(nit), HttpStatus.OK);
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
    @PostMapping("/insertar")
    public ResponseEntity<Cliente> insertarCliente(@RequestBody Cliente clientePost){
        Cliente cliente = clienteService.clientePorId(clientePost.getNumDoc());
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
    @PutMapping("/actualizar/{idNit}")
    public ResponseEntity<Cliente> actualizarCliente(@RequestBody Cliente clientePut){
        Cliente cliente = clienteService.clientePorId(clientePut.getNumDoc());
        if (cliente != null) {
            clienteService.insertarCliente(clientePut);
            return ResponseEntity.ok(clientePut);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
