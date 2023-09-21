package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name= "Cultivos")
public class Cultivo {



        @Id
        @Column (name= "cult_cod", nullable = false, length = 20)
        private Integer codCult;
        @Column (nullable = false, length = 30)
        private String direccion;
        @Column (nullable = false, length = 20)
        private String hectareas;
        @Column (nullable = false, length = 25)
        private String terreno;


    public Cultivo() {
    }

    public Cultivo(Integer codCult, String direccion, String hectareas, String terreno) {
        this.codCult = codCult;
        this.direccion = direccion;
        this.hectareas = hectareas;
        this.terreno = terreno;
    }

    public Integer getCodCult() {
        return codCult;
    }

    public void setCodCult(Integer codCult) {
        this.codCult = codCult;
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


}
