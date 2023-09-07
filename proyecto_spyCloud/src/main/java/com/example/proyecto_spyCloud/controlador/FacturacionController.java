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
        Facturacion facturacion = facturacionService.facturacionPorId(id);
        if (facturacion != null) {
            return ResponseEntity.ok(facturacion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

<<<<<<< HEAD
    @PostMapping("/agregar")
    public ResponseEntity<Facturacion> insertarFacturacion(@RequestBody Facturacion facturacionPost){
        Facturacion facturacion = facturacionService.facturacionPorId(facturacionPost.getNumFac());
        if (facturacion != null) {
            return ResponseEntity.notFound().build();
        } else {
            facturacionService.insertarFacturacion(facturacionPost);
            return ResponseEntity.ok(facturacionPost);
        }
    }
    @DeleteMapping("/eliminar/{numFac}")
    public ResponseEntity<Void> eliminarFacturacionPorId(@PathVariable Integer numFac){
        Facturacion facturacion = facturacionService.facturacionPorId(numFac);
        if (facturacion != null) {
            facturacionService.eliminarFacturacionPorId(numFac);
=======
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
>>>>>>> 1503245 (Modificacion de tablas "clienteService" y "clienteController" añadiendo la funcion de ingresar con llave foranea, actualizar y eliminar.)
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/actualizar")
<<<<<<< HEAD
    public ResponseEntity<Facturacion> actualizarFacturacion(@RequestBody Facturacion facturacionPut){
        Facturacion facturacion = facturacionService.facturacionPorId(facturacionPut.getNumFac());
        if (facturacion != null) {
            facturacionService.insertarFacturacion(facturacionPut);
            return ResponseEntity.ok(facturacionPut);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
=======
    public ResponseEntity<Cliente> actualizarCliente(@RequestBody Cliente clientePut){
        Cliente cliente = clienteService.clientePorId(clientePut.getIdNit());
        if (cliente != null) {
            clienteService.insertarCliente(clientePut);
            return ResponseEntity.ok(clientePut);
        } else {
            return ResponseEntity.noContent().build();
        }
    } */
>>>>>>> 1503245 (Modificacion de tablas "clienteService" y "clienteController" añadiendo la funcion de ingresar con llave foranea, actualizar y eliminar.)

}
