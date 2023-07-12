package entidad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Virus")
public class Virus {
    @Id
    @Column(name = "cod_virus", nullable = false, length = 20)
    private String cod_virus;
    @Column (nullable = false, length = 20)
    private String nom_virus;

    public Virus(String cod_virus, String nom_virus) {
        this.cod_virus = cod_virus;
        this.nom_virus = nom_virus;
    }

    public Virus() {
    }

    public String getCod_virus() {
        return cod_virus;
    }

    public void setCod_virus(String cod_virus) {
        this.cod_virus = cod_virus;
    }

    public String getNom_virus() {
        return nom_virus;
    }

    public void setNom_virus(String nom_virus) {
        this.nom_virus = nom_virus;
    }
}
