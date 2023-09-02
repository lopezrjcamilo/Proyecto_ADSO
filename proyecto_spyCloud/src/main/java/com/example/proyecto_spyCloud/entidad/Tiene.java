package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="TieneVD")
public class Tiene {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_reg", nullable = false, length = 15)
    private Integer numReg;

    @ManyToOne
    @JoinColumn(name = "diagnostico_num_diag")
    private Diagnostico diagnostico;

    @ManyToOne
    @JoinColumn(name = "virus_cod_virus")
    private Virus virus;

    @Column(name = "fecha_reg", nullable = false)
    private Date fechReg;
    public Tiene() {
    }

    public Tiene(Integer numReg, Diagnostico diagnostico, Virus virus, Date fechReg) {
        this.numReg = numReg;
        this.diagnostico = diagnostico;
        this.virus = virus;
        this.fechReg = fechReg;
    }

    public Integer getNumReg() {
        return numReg;
    }

    public void setNumReg(Integer numReg) {
        this.numReg = numReg;
    }

    public Diagnostico getDiagnostico() {
        return diagnostico;
    }

    public void setDiagnostico(Diagnostico diagnostico) {
        this.diagnostico = diagnostico;
    }

    public Virus getVirus() {
        return virus;
    }

    public void setVirus(Virus virus) {
        this.virus = virus;
    }

    public Date getFechReg() {
        return fechReg;
    }

    public void setFechReg(Date fechReg) {
        this.fechReg = fechReg;
    }
}
