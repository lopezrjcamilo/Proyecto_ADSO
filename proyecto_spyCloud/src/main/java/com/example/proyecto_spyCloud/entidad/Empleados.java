package com.example.proyecto_spyCloud.entidad;


import jakarta.persistence.*;

@Entity
@Table(name = "empleados")
public class Empleados {
    @Id
    @Column(name = "num_doc", length = 30)
    private Integer numDoc;
    @Column(nullable = false, length = 40)
    private String nombre;
    @Column(nullable = false, length = 40)
    private String apellido;
    @Column(nullable = false, length = 15)
    private String tipo_doc;
    @Column(nullable = false, length = 60)
    private String email;



    @ManyToOne
    @JoinColumn(name = "administrador_num_doc", referencedColumnName = "num_doc", nullable = false)
    private Administrador administrador;

    public Empleados() {
    }

    public Empleados(Integer numDoc, String nombre, String apellido, String tipo_doc, String email, Administrador administrador) {
        this.numDoc = numDoc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_doc = tipo_doc;
        this.email = email;
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


    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }
}