package com.example.proyecto_spyCloud.entidad;


import jakarta.persistence.*;

import java.sql.Date;



@Entity
@Table(name="facturacion")
public class Facturacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_fac", nullable = false, length = 15)
    private Integer numFac;
    @Column (name = "cuent_clien", nullable = false, length = 20)
    private String cuentClien;
    @Column (name= "forma_pag",nullable = false, length = 15)
    private String formaPag;
    @Column ( nullable = false)
    private double valor;
    @Column (name= "fech_pago",nullable = false)
    private Date fechPago;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name ="cod_cult",referencedColumnName = "cult_cod", nullable = false)
    private Cultivo cultivo;

    public Facturacion() {
    }

    public Facturacion(Integer numFac, String cuentClien, String formaPag, double valor, Date fechPago, Cultivo cultivo) {
        this.numFac = numFac;
        this.cuentClien = cuentClien;
        this.formaPag = formaPag;
        this.valor = valor;
        this.fechPago = fechPago;
        this.cultivo = cultivo;
    }

    public Integer getNumFac() {
        return numFac;
    }

    public void setNumFac(Integer numFac) {
        this.numFac = numFac;
    }

    public String getCuentClien() {
        return cuentClien;
    }

    public void setCuentClien(String cuentClien) {
        this.cuentClien = cuentClien;
    }

    public String getFormaPag() {
        return formaPag;
    }

    public void setFormaPag(String formaPag) {
        this.formaPag = formaPag;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }



    public Cultivo getCultivo() {
        return cultivo;
    }

    public void setCultivo(Cultivo cultivo) {
        this.cultivo = cultivo;
    }
}
