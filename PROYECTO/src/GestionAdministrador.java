import java.sql.*;
import java.util.ArrayList;
public class GestionAdministrador {

    Conexion con = new Conexion();
    private ArrayList<Administrador> datos = new ArrayList<>();
    Statement st = null ;
    PreparedStatement ps = null;
    ResultSet res = null;
    Connection conec = null;

    //CONSULTAR

    public ArrayList<Administrador> consultarAdministrador(){
        try {
            String sql="select * from Administrador";
            conec = con.Conecta();
            st = conec.createStatement();
            res = st.executeQuery(sql);

            while (res.next()){
                Administrador DAT= new Administrador(res.getString(1), res.getString(2), res.getString(3), res.getString(4), res.getString(5), res.getString(6), res.getString(7));
                datos.add(DAT);
            }

        }catch (SQLException ex){
            System.out.println("error al consultar: "+ex);
        }
        return datos;
    }

    //BUSCAR
    public Administrador buscarNombre(String nombre){
        Administrador Adm=null;
        try {
            conec = con.Conecta();
            String sql="select * from administrador where nombre=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, nombre);
            res = ps.executeQuery();
            while (res.next()){
                Adm= new Administrador(res.getString(1), res.getString(2), res.getString(3), res.getString(4), res.getString(5), res.getString(6), res.getString(7));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Adm;
    }

    public Administrador buscarNumDoc(String num_doc){
        Administrador Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Administrador where num_doc=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, num_doc);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Administrador(res.getString(1), res.getString(2), res.getString(3), res.getString(4), res.getString(5), res.getString(6), res.getString(7));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
    //MODIFICAR
    public boolean modificarAdministrador (Administrador Admon){
        boolean resultado = false;
        try {
            if (this.buscarNumDoc(Admon.getNum_doc())!=null){
                conec = con.Conecta();
                String sql = "update administrador set nombre=?, apellido=?, Tipo_doc=?, Email=?, Telefono=?, nit=? where num_doc=?";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Admon.getNombre());
                ps.setString(2,Admon.getApellido());
                ps.setString(3,Admon.getTipo_doc());
                ps.setString(4, Admon.getEmail());
                ps.setString(5,Admon.getTelefono());
                ps.setString(6,Admon.getNit());
                ps.setString(7,Admon.getNum_doc());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el administrador a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }

    //ELIMINAR
    public boolean eliminarAdmNombre (String nombre){
        boolean resultado = false;
        try {
            if (this.buscarNombre(nombre)!=null){
                conec = con.Conecta();
                String sql = "delete from administrador where nombre=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,nombre);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
}
