package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Cliente;
import com.example.proyecto_spyCloud.entidad.Facturacion;
import com.example.proyecto_spyCloud.servicio.FacturacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/facturacion")
public class FacturacionController {

    @Autowired
    private FacturacionService facturacionService;
    public FacturacionController(FacturacionService facturacionService) {
        this.facturacionService = facturacionService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Facturacion>> listarFacturacion() {
        return new ResponseEntity<>(facturacionService.listarFacturacion(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Facturacion> facturacionPorId(@PathVariable Integer id) {
        Facturacion facturacion = facturacionService.facturacionPorId(String.valueOf(id));
        if (facturacion != null) {
            return ResponseEntity.ok(facturacion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

   /* @PostMapping("/agregar")
    public ResponseEntity<Facturacion> insertarFacturacion(@RequestBody Facturacion facturacionPost){
        Cliente cliente = clienteService.clientePorId(facturacionPost.getIdNit());
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
    } */

}
