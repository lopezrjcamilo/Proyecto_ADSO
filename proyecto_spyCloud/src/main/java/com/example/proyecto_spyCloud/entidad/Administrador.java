package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;


@Entity
@Table(name = "Administrador")
public class Administrador {

    @Id
    @Column(name = "num_doc", nullable = false, length = 15)
    private Integer numDoc;
    @Column(nullable = false, length = 20)
    private String nombre;
    @Column(nullable = false, length = 20)
    private String apellido;
    @Column(nullable = false, length = 10)
    private String tipo_doc;
    @Column(nullable = false, length = 25)
    private String email;
    @Column(nullable = false, length = 15)
    private String telefono;

   /* @OneToMany(mappedBy = "administrador", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Cliente> cliente;*/

    public Administrador() {
    }

    public Administrador(Integer numDoc, String nombre, String apellido, String tipo_doc, String email, String telefono) {
        this.numDoc = numDoc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_doc = tipo_doc;
        this.email = email;
        this.telefono = telefono;
    }

    public Integer getNumDoc() {
        return numDoc;
    }

    public void setNumDoc(Integer numDoc) {
        this.numDoc = numDoc;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTipo_doc() {
        return tipo_doc;
    }

    public void setTipo_doc(String tipo_doc) {
        this.tipo_doc = tipo_doc;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}