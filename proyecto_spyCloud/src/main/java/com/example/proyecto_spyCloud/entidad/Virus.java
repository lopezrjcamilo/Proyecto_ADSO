package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="virus")
public class Virus {
    @Id
    @Column(name= "cod_virus" ,nullable = false, length = 15)
    private Integer codVirus;
    @Column (name="nom_virus",nullable = false, length = 20)
    private String nomVirus;


    public Virus() {
    }

    public Virus(Integer codVirus, String nomVirus ){
        this.codVirus = codVirus;
        this.nomVirus = nomVirus;

    }

    public Integer getCodVirus() {
        return codVirus;
    }

    public void setCodVirus(Integer codVirus) {
        this.codVirus = codVirus;
    }

    public String getNomVirus() {
        return nomVirus;
    }

    public void setNomVirus(String nomVirus) {
        this.nomVirus = nomVirus;
    }



}