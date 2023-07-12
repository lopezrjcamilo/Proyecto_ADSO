package entidad;

import jakarta.persistence.*;

@Entity
@Table(name = "Administradores")

public class Administrador {

        @Id

        @Column(name = "doc_administrador", nullable = false, length = 15)
        private String num_doc;
        @Column(nullable = false, length = 20)
        private String nombre;
        @Column(nullable = false, length = 20)
        private String apellido;
        @Column(nullable = false, length = 10)
        private String tipo_doc;
        @Column(nullable = false, length = 20)
        private String email;
        @Column(nullable = false, length = 15)
        private String telefono;

        @ManyToOne
        @JoinColumn(name = "nit_cliente", referencedColumnName = "nit")
        private Cliente cliente;

    public Administrador() {
    }

    public
        Administrador(String num_doc, String nombre, String apellido, String tipo_doc, String email, String telefono, Cliente cliente)
        {
            this.num_doc = num_doc;
            this.nombre = nombre;
            this.apellido = apellido;
            this.tipo_doc = tipo_doc;
            this.email = email;
            this.telefono = telefono;
            this.cliente = cliente;
        }

        public String getNum_doc () {
        return num_doc;
    }

        public void setNum_doc (String num_doc){
        this.num_doc = num_doc;
    }

        public void setTipo_doc (String tipo_doc){
        this.tipo_doc = tipo_doc;
    }

        public String getTipo_doc () {
        return tipo_doc;
    }

        public String getNombre () {
        return nombre;
    }

        public void setNombre (String nombre){
        this.nombre = nombre;
    }

        public String getApellido () {
        return apellido;
    }

        public void setApellido (String apellido){
        this.apellido = apellido;
    }


        public String getEmail () {
        return email;
    }

        public void setEmail (String email){
        this.email = email;
    }

        public String getTelefono () {
        return telefono;
    }

        public void setTelefono (String telefono){
        this.telefono = telefono;
    }

        public Cliente getCliente () {
        return cliente;
    }

        public void setCliente (Cliente cliente){
        this.cliente = cliente;
    }
}

