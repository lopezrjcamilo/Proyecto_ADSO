package entidad;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Analizado")
public class Analizado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_anali", nullable = false, length = 10)
    private String cod_anali;
    @Column(nullable = false)
    private Date fech_anali;
    @ManyToOne
    @JoinColumn(name = "cod_dron", referencedColumnName = "cod_dron")
    private Drone drone;

    public Analizado(String cod_anali, Date fech_anali, Drone drone) {
        this.cod_anali = cod_anali;
        this.fech_anali = fech_anali;
        this.drone = drone;
    }

    public Analizado() {
    }

    public String getCod_anali() {
        return cod_anali;
    }

    public void setCod_anali(String cod_anali) {
        this.cod_anali = cod_anali;
    }

    public Date getFech_anali() {
        return fech_anali;
    }

    public void setFech_anali(Date fech_anali) {
        this.fech_anali = fech_anali;
    }

    public Drone getDrone() {
        return drone;
    }

    public void setDrone(Drone drone) {
        this.drone = drone;
    }
}
