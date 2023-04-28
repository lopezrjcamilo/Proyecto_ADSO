import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

    //private String bd="Proyecto";
    private String bd="bdproyecto";
    private String url="jdbc:mysql://localhost:3306/"+bd;
    private String user="root";
    private String pass="0000";

    Connection conec=null;
    public Connection Conecta(){
        try {
            conec= DriverManager.getConnection(url, user, pass);
            System.out.println("Conexion OK.");
        }catch (SQLException ex){
            System.out.println("Error en la conexión "+ex);
        }
        return conec;
    }

}
