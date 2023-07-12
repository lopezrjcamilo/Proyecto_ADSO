package entidad;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Diagnostico")
public class Diagnostico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_diag", nullable = false, length = 20)
    private String num_diag;
    @Column(nullable = false, length = 400)
    private String observaciones;
    @Column(nullable = false)
    private Date fech_solicit;
    @Column(nullable = false)
    private Date fech_diag;
    @Column(nullable = false)
    private Date fech_entreg;
    @Column(nullable = false, length = 20)
    private String tip_daño;
    @ManyToOne
    @JoinColumn(name = "cod_dron", referencedColumnName = "cod_dron")
    private Drone drone;

    public Diagnostico(String num_diag, String observaciones, Date fech_solicit, Date fech_diag, Date fech_entreg, String tip_daño, Drone drone) {
        this.num_diag = num_diag;
        this.observaciones = observaciones;
        this.fech_solicit = fech_solicit;
        this.fech_diag = fech_diag;
        this.fech_entreg = fech_entreg;
        this.tip_daño = tip_daño;
        this.drone = drone;
    }

    public Diagnostico() {
    }

    public String getNum_diag() {
        return num_diag;
    }

    public void setNum_diag(String num_diag) {
        this.num_diag = num_diag;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Date getFech_solicit() {
        return fech_solicit;
    }

    public void setFech_solicit(Date fech_solicit) {
        this.fech_solicit = fech_solicit;
    }

    public Date getFech_diag() {
        return fech_diag;
    }

    public void setFech_diag(Date fech_diag) {
        this.fech_diag = fech_diag;
    }

    public Date getFech_entreg() {
        return fech_entreg;
    }

    public void setFech_entreg(Date fech_entreg) {
        this.fech_entreg = fech_entreg;
    }

    public String getTip_daño() {
        return tip_daño;
    }

    public void setTip_daño(String tip_daño) {
        this.tip_daño = tip_daño;
    }

    public Drone getDrone() {
        return drone;
    }

    public void setDrone(Drone drone) {
        this.drone = drone;
    }
}
