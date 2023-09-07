package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.util.List;

@Entity
    @Table(name="dron")
    public class Dron {
    @Id
    @Column(name = "cod_dron", nullable = false, length = 10)
    private Integer codDron;
    @Column(name = "num_serial", nullable = false, length = 10)
    private String numSerial;
    @Column(nullable = false, length = 15)
    private String marca;


    public Dron() {
    }

    public Dron(Integer codDron, String numSerial, String marca, Cultivo cultivo) {
        this.codDron = codDron;
        this.numSerial = numSerial;
        this.marca = marca;
    }

    public Integer getCodDron() {
        return codDron;
    }

    public void setCodDron(Integer codDron) {
        this.codDron = codDron;
    }

    public String getNumSerial() {
        return numSerial;
    }

    public void setNumSerial(String numSerial) {
        this.numSerial = numSerial;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }



}