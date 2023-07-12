package entidad;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Visita")
public class Visita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_visit", nullable = false, length = 20)
    private String num_visit;
    @Column(nullable = false, length = 20)
    private String nom_finca;
    @Column(nullable = false, length = 20)
    private String direc_visit;
    @Column(nullable = false)
    private Date fecha;
    @ManyToOne
    @JoinColumn(name = "cod_emp", referencedColumnName = "cod_emp")
    private Empleados empleados;

    public Visita(String num_visit, String nom_finca, String direc_visit, Date fecha, Empleados empleados) {
        this.num_visit = num_visit;
        this.nom_finca = nom_finca;
        this.direc_visit = direc_visit;
        this.fecha = fecha;
        this.empleados = empleados;
    }

    public Visita() {
    }

    public String getNum_visit() {
        return num_visit;
    }

    public void setNum_visit(String num_visit) {
        this.num_visit = num_visit;
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
}
