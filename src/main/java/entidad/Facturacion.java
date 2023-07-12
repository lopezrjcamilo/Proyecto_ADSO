package entidad;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Facturacion")
public class Facturacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_fac", nullable = false, length = 15)
    private String num_fac;
    @Column(nullable = false, length = 20)
    private String cuent_clien;
    @Column(nullable = false, length = 15)
    private String forma_pag;
    @Column(nullable = false)
    private double valor;
    @Column(nullable = false)
    private Date fech_pago;
    @ManyToOne
    @JoinColumn(name = "cod_cult", referencedColumnName = "cod_cult")
    private Cultivo cultivo;

    public Facturacion(String num_fac, String cuent_clien, String forma_pag, double valor, Date fech_pago, Cultivo cultivo) {
        this.num_fac = num_fac;
        this.cuent_clien = cuent_clien;
        this.forma_pag = forma_pag;
        this.valor = valor;
        this.fech_pago = fech_pago;
        this.cultivo = cultivo;
    }

    public Facturacion() {
    }

    public String getNum_fac() {
        return num_fac;
    }

    public void setNum_fac(String num_fac) {
        this.num_fac = num_fac;
    }

    public String getCuent_clien() {
        return cuent_clien;
    }

    public void setCuent_clien(String cuent_clien) {
        this.cuent_clien = cuent_clien;
    }

    public String getForma_pag() {
        return forma_pag;
    }

    public void setForma_pag(String forma_pag) {
        this.forma_pag = forma_pag;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public Date getFech_pago() {
        return fech_pago;
    }

    public void setFech_pago(Date fech_pago) {
        this.fech_pago = fech_pago;
    }

    public Cultivo getCultivo() {
        return cultivo;
    }

    public void setCultivo(Cultivo cultivo) {
        this.cultivo = cultivo;
    }
}
