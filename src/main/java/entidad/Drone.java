package entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "Drone")
public class Drone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_dron", nullable = false, length = 10)
    private String cod_dron;
    @Column(nullable = false, length = 10)
    private String num_serial;
    @Column(nullable = false, length = 15)
    private String marca;
    @ManyToOne
    @JoinColumn(name = "cod_cult", referencedColumnName = "cod_cult")
    private Cultivo cultivo;

    public Drone(String cod_dron, String num_serial, String marca, Cultivo cultivo) {
        this.cod_dron = cod_dron;
        this.num_serial = num_serial;
        this.marca = marca;
        this.cultivo = cultivo;
    }

    public Drone() {
    }

    public String getCod_dron() {
        return cod_dron;
    }

    public void setCod_dron(String cod_dron) {
        this.cod_dron = cod_dron;
    }

    public String getNum_serial() {
        return num_serial;
    }

    public void setNum_serial(String num_serial) {
        this.num_serial = num_serial;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Cultivo getCultivo() {
        return cultivo;
    }

    public void setCultivo(Cultivo cultivo) {
        this.cultivo = cultivo;
    }
}
