package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="informacion")
public class Informacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_reg", nullable = false, length = 15)
    private Integer numReg;

    @ManyToOne( optional = false)
    @JoinColumn(name ="num_diag",referencedColumnName = "num_diag", nullable = false)
    private Diagnostico diagnostico;

    @ManyToOne( optional = false)
    @JoinColumn(name ="cod_virus",referencedColumnName = "cod_virus", nullable = false)
    private Virus virus;

    @Column(name = "fecha_reg", nullable = false)
    private Date fechReg;
    public Informacion() {
    }

    public Informacion(Integer numReg, Diagnostico diagnostico, Virus virus, Date fechReg) {
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
