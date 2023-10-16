package com.example.proyecto_spyCloud.entidad;


import jakarta.persistence.*;


import java.util.List;

@Entity
@Table(name = "empleados")
public class Empleados {
    @Id
    @Column(name = "cod_emp",nullable = false, length = 15)
    private Integer codEmp;
    @Column(nullable = false, length = 30)
    private String nombre;
    @Column(nullable = false, length = 30)
    private String apellido;
    @Column(nullable = false, length = 15)
    private String tipo_doc;
    @Column(nullable = false, length = 15)
    private String num_docu;



    @ManyToOne(optional = false)
    @JoinColumn(name = "num_doc", referencedColumnName = "num_doc", nullable = false )
    private Administrador administrador;

    public Empleados() {
    }

    public Empleados(Integer codEmp, String nombre, String apellido, String tipo_doc, String num_docu, Administrador administrador) {
        this.codEmp = codEmp;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_doc = tipo_doc;
        this.num_docu = num_docu;
        this.administrador = administrador;
    }

    public Integer getCodEmp() {
        return codEmp;
    }

    public void setCodEmp(Integer codEmp) {
        this.codEmp = codEmp;
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

    public String getNum_docu() {
        return num_docu;
    }

    public void setNum_docu(String num_docu) {
        this.num_docu = num_docu;
    }


    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }
}
