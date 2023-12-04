package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
    @Column(name = "nun_doc", nullable = false, length = 30)
    private Integer numDoc;
    @Column(nullable = false, length = 40)
    private String nombre;
    @Column(nullable = false, length = 60)
    private String email;
    @Column(nullable = false, length = 15)
    private String telefono;



    //@JsonIgnore
    @ManyToOne(optional = false)
    @JoinColumn(name ="num_doc",referencedColumnName = "num_doc", nullable = false)
    public Administrador administrador;
    public Cliente() {
    }

    public Cliente(Integer numDoc, String nombre, String email, String telefono, Administrador administrador) {
        this.numDoc = numDoc;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.administrador = administrador;
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

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }
}