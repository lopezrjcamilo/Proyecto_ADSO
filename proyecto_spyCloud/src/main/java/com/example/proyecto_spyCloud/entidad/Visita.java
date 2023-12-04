package com.example.proyecto_spyCloud.entidad;



import jakarta.persistence.*;

import java.sql.Date;


@Entity
@Table(name="visita")
public class Visita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_visit", nullable = false, length = 20)
    private Integer numVisita;
    @Column(nullable = false, length = 20)
    private String nom_finca;
    @Column(nullable = false, length = 30)
    private String direc_visit;
    @Column(nullable = false)
    private Date fecha;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "num_doc", referencedColumnName = "num_doc",nullable = false)
    private Empleados empleados;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cod_cult", referencedColumnName = "cult_cod",nullable = false)
    private Cultivo cultivo;

    public Visita() {
    }


    public Visita(Integer numVisita, String nom_finca, String direc_visit, Date fecha, Empleados empleados, Cultivo cultivo) {
        this.numVisita = numVisita;
        this.nom_finca = nom_finca;
        this.direc_visit = direc_visit;
        this.fecha = fecha;
        this.empleados = empleados;
        this.cultivo = cultivo;
    }

    public Integer getNumVisita() {
        return numVisita;
    }

    public void setNumVisita(Integer numVisita) {
        this.numVisita = numVisita;
    }

    public String getNom_finca() {
        return nom_finca;
    }

    public void setNom_finca(String nom_finca) {
        this.nom_finca = nom_finca;
    }

    public String getDirec_visit() {
        return direc_visit;
    }

    public void setDirec_visit(String direc_visit) {
        this.direc_visit = direc_visit;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Empleados getEmpleados() {
        return empleados;
    }

    public void setEmpleados(Empleados empleados) {
        this.empleados = empleados;
    }

    public Cultivo getCultivo() {
        return cultivo;
    }

    public void setCultivo(Cultivo cultivo) {
        this.cultivo = cultivo;
    }
}