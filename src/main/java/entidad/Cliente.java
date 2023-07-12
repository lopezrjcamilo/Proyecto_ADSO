package entidad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "clientes")

public class Cliente {


    @Id
    @Column(nullable = false, length = 30)
    private String nit;
    @Column(nullable = false, length = 30)
    private String nom_cliente;
    @Column(nullable = false, length = 20)
    private String correo;
    @Column(nullable = false, length = 15)
    private String telefono;

    public Cliente() {
    }

    public Cliente(String nit, String nom_cliente, String correo, String telefono) {
        this.nit = nit;
        this.nom_cliente = nom_cliente;
        this.correo = correo;
        this.telefono = telefono;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getNom_cliente() {
        return nom_cliente;
    }

    public void setNom_cliente(String nom_cliente) {
        this.nom_cliente = nom_cliente;
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
}