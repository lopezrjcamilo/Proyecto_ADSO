package entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "Tiene")
public class Tiene {
    @Id
    @Column(name = "num_reg", nullable = false, length = 15)
    private String num_reg;
    @ManyToOne
    @JoinColumn(name = "num_diag", referencedColumnName = "num_diag")
    private Diagnostico diagnostico;
    @ManyToOne
    @JoinColumn(name = "cod_virus", referencedColumnName = "cod_virus")
    private Virus virus;

    public Tiene(String num_reg, Diagnostico diagnostico, Virus virus) {
        this.num_reg = num_reg;
        this.diagnostico = diagnostico;
        this.virus = virus;
    }

    public Tiene() {
    }

    public String getNum_reg() {
        return num_reg;
    }

    public void setNum_reg(String num_reg) {
        this.num_reg = num_reg;
    }

    public Diagnostico getDiagnostico() {
        return diagnostico;
    }

    public void setDiagnostico(Diagnostico diagnostico) {
        this.diagnostico = diagnostico;
    }

    public Virus getVirus() {
        return virus;
    }

    public void setVirus(Virus virus) {
        this.virus = virus;
    }
}
