package entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "Cultivo")
public class Cultivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_cult", nullable = false, length = 20)
    private String cod_cult;
    @Column(nullable = false, length = 30)
    private String direccion;
    @Column(nullable = false, length = 20)
    private String hectareas;
    @Column(nullable = false, length = 25)
    private String terreno;
    @ManyToOne
    @JoinColumn(name = "num_visit", referencedColumnName = "num_visit")
    private Visita visita;

    public Cultivo(String cod_cult, String direccion, String hectareas, String terreno, Visita visita) {
        this.cod_cult = cod_cult;
        this.direccion = direccion;
        this.hectareas = hectareas;
        this.terreno = terreno;
        this.visita = visita;
    }

    public Cultivo() {
    }

    public String getCod_cult() {
        return cod_cult;
    }

    public void setCod_cult(String cod_cult) {
        this.cod_cult = cod_cult;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getHectareas() {
        return hectareas;
    }

    public void setHectareas(String hectareas) {
        this.hectareas = hectareas;
    }

    public String getTerreno() {
        return terreno;
    }

    public void setTerreno(String terreno) {
        this.terreno = terreno;
    }

    public Visita getVisita() {
        return visita;
    }

    public void setVisita(Visita visita) {
        this.visita = visita;
    }
}
