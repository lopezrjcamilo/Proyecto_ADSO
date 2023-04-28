public class Administrador {

    private String num_doc;
    private String nombre;
    private String apellido;
    private String Tipo_doc;
    private String Email;
    private String Telefono;
    private String nit;
    //CONSTRUCTOR


    public Administrador(String num_doc, String nombre, String apellido, String tipo_doc, String email, String telefono, String nit) {
        this.num_doc = num_doc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.Tipo_doc = tipo_doc;
        this.Email = email;
        this.Telefono = telefono;
        this.nit = nit;
    }

    /*
    public Administrador(String num_doc, String nombre, String apellido, String tipo_doc, String email, String telefono, String nit, String ndoc) {
        this.num_doc = num_doc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.Tipo_doc = tipo_doc;
        this.Email = email;
        this.Telefono = telefono;
        this.nit = nit;
        this.ndoc = ndoc;
    } */

    public Administrador() {
    }
    //GET

    public String getNum_doc() {
        return num_doc;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getTipo_doc() {
        return Tipo_doc;
    }

    public String getEmail() {
        return Email;
    }

    public String getTelefono() {
        return Telefono;
    }

    public String getNit() {
        return nit;
    }

    //SET

    public void setNum_doc(String num_doc) {
        this.num_doc = num_doc;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setTipo_doc(String tipo_doc) {
        this.Tipo_doc = tipo_doc;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public void setTelefono(String telefono) {
        this.Telefono = telefono;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    //toString

    @Override
    public String toString() {
        return "Administrador{" +
                "\n num_doc='" + num_doc +
                "\n nombre='" + nombre +
                "\n apellido='" + apellido +
                "\n Tipo_doc='" + Tipo_doc +
                "\n Email='" + Email +
                "\n Telefono='" + Telefono +
                "\n nit='" + nit +
                '}';
    }
}
