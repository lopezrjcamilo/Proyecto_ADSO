package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

@Entity
@Table(name="multimedia")
public class Multimedia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_mul", nullable = false, length = 15)
    private Integer codMult;
    @Column (name = "nom_archivo",nullable = false, length = 10)
    private String nombArchivo;
    @Column (nullable = false, length = 15)
    private String tamaño;
    @ManyToOne(optional = false)
    @JoinColumn(name = "num_diag", referencedColumnName = "num_diag",nullable = false)
    private Diagnostico diagnostico;


    public Multimedia() {
    }

    public Multimedia(Integer codMult, String nombArchivo, String tamaño, Diagnostico diagnostico) {
        this.codMult = codMult;
        this.nombArchivo = nombArchivo;
        this.tamaño = tamaño;
        this.diagnostico = diagnostico;
    }

    public Integer getCodMult() {
        return codMult;
    }

    public void setCodMult(Integer codMult) {
        this.codMult = codMult;
    }

    public String getNombArchivo() {
        return nombArchivo;
    }

    public void setNombArchivo(String nombArchivo) {
        this.nombArchivo = nombArchivo;
    }

    public String getTamaño() {
        return tamaño;
    }

    public void setTamaño(String tamaño) {
        this.tamaño = tamaño;
    }

    public Diagnostico getDiagnostico() {
        return diagnostico;
    }

    public void setDiagnostico(Diagnostico diagnostico) {
        this.diagnostico = diagnostico;
    }
}
