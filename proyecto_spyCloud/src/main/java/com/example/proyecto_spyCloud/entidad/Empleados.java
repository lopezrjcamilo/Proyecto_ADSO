package com.example.proyecto_spyCloud.entidad;


import jakarta.persistence.*;


import java.util.List;

@Entity
@Table(name = "Empleados")
public class Empleados {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_emp",nullable = false, length = 15)
    private Integer codEmp;
    @Column(nullable = false, length = 30)
    private String nombre;
    @Column(nullable = false, length = 30)
    private String apellido;
    @Column(nullable = false, length = 15)
    private String tipo_doc;
    @Column(nullable = false, length = 15)
    private String num_doc;



    @ManyToOne
    @JoinColumn(name = "administrador_num_doc", referencedColumnName = "num_doc" )
    private Administrador administrador1;

    public Empleados() {
    }

    public Empleados(Integer codEmp, String nombre, String apellido, String tipo_doc, String num_doc, Administrador administrador1) {
        this.codEmp = codEmp;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_doc = tipo_doc;
        this.num_doc = num_doc;
        this.administrador1 = administrador1;
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

    public String getNum_doc() {
        return num_doc;
    }

    public void setNum_doc(String num_doc) {
        this.num_doc = num_doc;
    }

    public Administrador getAdministrador1() {
        return administrador1;
    }

    public void setAdministrador1(Administrador administrador1) {
        this.administrador1 = administrador1;
    }


}
