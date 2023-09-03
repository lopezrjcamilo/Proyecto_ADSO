package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="Diagnosticos")
public class Diagnostico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_diag", nullable = false, length = 20)
    private Integer numDiag;
    @Column (nullable = false, length = 400)
    private String observaciones;
    @Column (name="fech_solicit",nullable = false)
    private Date fechaSolicit;
    @Column (name=" fech_diag",nullable = false)
    private Date fechaDiag;
    @Column (name="fech_entreg",nullable = false)
    private Date fechaEntreg;
    @Column (name="tip_daño",nullable = false, length = 20)
    private String tipoDaño;
    @ManyToOne
    @JoinColumn(name = "cod_dron", referencedColumnName = "cod_dron")
    private Dron dron;

    @ManyToOne
    @JoinColumn(name = "cod_cult", referencedColumnName = "cod_cult")
    private Cultivo cultivo;


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "TieneVD",
            joinColumns = @JoinColumn(name = "diagnostico_num_diag"),
            inverseJoinColumns = @JoinColumn(name = "virus_cod_virus"))
    private Set<Virus> virusSet = new HashSet<>();
    public Diagnostico() {
    }

    public Diagnostico(Integer numDiag, String observaciones, Date fechaSolicit, Date fechaDiag, Date fechaEntreg, String tipoDaño, Dron dron, Cultivo cultivo, Set<Virus> virusSet) {
        this.numDiag = numDiag;
        this.observaciones = observaciones;
        this.fechaSolicit = fechaSolicit;
        this.fechaDiag = fechaDiag;
        this.fechaEntreg = fechaEntreg;
        this.tipoDaño = tipoDaño;
        this.dron = dron;
        this.cultivo = cultivo;
        this.virusSet = virusSet;
    }

    public Cultivo getCultivo() {
        return cultivo;
    }

    public void setCultivo(Cultivo cultivo) {
        this.cultivo = cultivo;
    }

    public Integer getNumDiag() {
        return numDiag;
    }

    public void setNumDiag(Integer numDiag) {
        this.numDiag = numDiag;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Date getFechaSolicit() {
        return fechaSolicit;
    }

    public void setFechaSolicit(Date fechaSolicit) {
        this.fechaSolicit = fechaSolicit;
    }

    public Date getFechaDiag() {
        return fechaDiag;
    }

    public void setFechaDiag(Date fechaDiag) {
        this.fechaDiag = fechaDiag;
    }

    public Date getFechaEntreg() {
        return fechaEntreg;
    }

    public void setFechaEntreg(Date fechaEntreg) {
        this.fechaEntreg = fechaEntreg;
    }

    public String getTipoDaño() {
        return tipoDaño;
    }

    public void setTipoDaño(String tipoDaño) {
        this.tipoDaño = tipoDaño;
    }

    public Dron getDron() {
        return dron;
    }

    public void setDron(Dron dron) {
        this.dron = dron;
    }


    public Set<Virus> getVirusSet() {
        return virusSet;
    }

    public void setVirusSet(Set<Virus> virusSet) {
        this.virusSet = virusSet;
    }
}