package entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "Empleados")

public class Empleados {
    @Id

    @Column(name = "Cod_empleados",nullable = false, length = 15)
    private String cod_emp;
    @Column(nullable = false, length = 30)
    private String nombre;
    @Column(nullable = false, length = 30)
    private String apellido;
    @Column(nullable = false, length = 15)
    private String tipo_doc;
    @Column(nullable = false, length = 15)
    private String num_doc;

    @ManyToOne
    @JoinColumn(name = "doc_administrador", referencedColumnName = "doc_administrador")
    private Administrador administrador;


    public Empleados() {
    }

    public Empleados(String cod_emp, String nombre, String apellido, String tipo_doc, String num_doc, Administrador administrador) {
        this.cod_emp = cod_emp;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_doc = tipo_doc;
        this.num_doc = num_doc;
        this.administrador = administrador;
    }

    public String getCod_emp() {
        return cod_emp;
    }

    public void setCod_emp(String cod_emp) {
        this.cod_emp = cod_emp;
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

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }
}