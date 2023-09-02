package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "clientes")

public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "nit" ,nullable = false, length = 30)
    private Integer idNit;
    @Column(name= "nom_cliente" ,nullable = false, length = 30)
    private String nombre;
    @Column(nullable = false, length = 20)
    private String correo;
    @Column(nullable = false, length = 15)
    private String telefono;

    @ManyToOne
    @JoinColumn(name ="num_doc",referencedColumnName = "num_doc")
    private Administrador administrador;
    public Cliente() {
    }

    public Cliente(Integer idNit, String nombre, String correo, String telefono, Administrador administrador) {
        this.idNit = idNit;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.administrador = administrador;
    }

    public Integer getIdNit() {
        return idNit;
    }

    public void setIdNit(Integer idNit) {
        this.idNit = idNit;
    }
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
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