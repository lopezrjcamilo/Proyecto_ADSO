package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="Virus")
public class Virus {
    @Id
    @Column(name = "cod_virus", nullable = false, length = 20)
    private String codVirus;
    @Column (name="nom_virus",nullable = false, length = 20)
    private String nomVirus;

    @ManyToMany(mappedBy = "virusSet")
    private Set<Diagnostico> diagnosticoSet = new HashSet<>();

    public Virus() {
    }


    public String getCodVirus() {
        return codVirus;
    }

    public void setCodVirus(String codVirus) {
        this.codVirus = codVirus;
    }

    public Virus(String codVirus, String nomVirus, Set<Diagnostico> diagnosticoSet) {
        this.codVirus = codVirus;
        this.nomVirus = nomVirus;
        this.diagnosticoSet = diagnosticoSet;
    }

    public String getNomVirus() {
        return nomVirus;
    }

    public void setNomVirus(String nomVirus) {
        this.nomVirus = nomVirus;
    }

    public Set<Diagnostico> getDiagnosticoSet() {
        return diagnosticoSet;
    }

    public void setDiagnosticoSet(Set<Diagnostico> diagnosticoSet) {
        this.diagnosticoSet = diagnosticoSet;
    }
}