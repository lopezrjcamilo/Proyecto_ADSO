package entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "Multimedia")
public class Multimedia {
    @Id
    @Column(name = "cod_mul", nullable = false, length = 15)
    private String cod_mul;
    @Column(nullable = false, length = 10)
    private String nom_archivo;
    @Column(nullable = false, length = 15)
    private String tamaño;
    @ManyToOne
    @JoinColumn(name = "num_diag", referencedColumnName = "num_diag")
    private Diagnostico diagnostico;

    public Multimedia(String cod_mul, String nom_archivo, String tamaño, Diagnostico diagnostico) {
        this.cod_mul = cod_mul;
        this.nom_archivo = nom_archivo;
        this.tamaño = tamaño;
        this.diagnostico = diagnostico;
    }

    public Multimedia() {
    }

    public String getCod_mul() {
        return cod_mul;
    }

    public void setCod_mul(String cod_mul) {
        this.cod_mul = cod_mul;
    }

    public String getNom_archivo() {
        return nom_archivo;
    }

    public void setNom_archivo(String nom_archivo) {
        this.nom_archivo = nom_archivo;
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
