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
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name ="num_diag",referencedColumnName = "num_diag", nullable = false)
    private Diagnostico diagnosticoSet ;

    public Virus() {
    }

    public Virus(Integer codVirus, String nomVirus, Diagnostico diagnosticoSet) {
        this.codVirus = codVirus;
        this.nomVirus = nomVirus;
        this.diagnosticoSet = diagnosticoSet;
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

    public Diagnostico getDiagnosticoSet() {
        return diagnosticoSet;
    }

    public void setDiagnosticoSet(Diagnostico diagnosticoSet) {
        this.diagnosticoSet = diagnosticoSet;
    }
}