import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        System.out.println("------- PROYECTO ------- \n");
        Scanner entrada = new Scanner(System.in);
        int x = 0, opcion = 0;

        while (x == 0) {

            System.out.println("1 = Administrador");
            System.out.println("2 = Analizado");
            System.out.println("3 = Cliente");
            System.out.println("4 = Cultivo");
            System.out.println("5 = Diagnostico");
            System.out.println("6 = Dron");
            System.out.println("7 = Empleados");
            System.out.println("8 = Facturación");
            System.out.println("9 = Tiene");
            System.out.println("10 = Virus");
            System.out.println("11 = Visita");
            System.out.println("0 = Salir");

            System.out.println("Elija una opción");
            opcion= entrada.nextInt();

            if (opcion == 1) {
                GestionAdministrador Administrador = new GestionAdministrador();
                ArrayList<Administrador> resultado = new ArrayList<>();
                resultado = Administrador.consultarAdministrador();
                System.out.println(resultado);
                for (Administrador r : resultado) {
                    System.out.println(r.toString());
                }
            } else if (opcion == 11) {//ELIMINAR
                GestionAdministrador Administrador = new GestionAdministrador();
                String busqueda;
                System.out.println("Ingrese el nombre a eliminar: ");
                busqueda = entrada.nextLine();
                busqueda = entrada.nextLine();
                if (Administrador.eliminarAdmNombre(busqueda)){
                    System.out.println("Nombre eliminado.");
                } else {
                    System.out.println("No se pudo eliminar el nombre.");
                }
            } else if (opcion == 12) {
                GestionAdministrador Administrador = new GestionAdministrador();
                System.out.println("\n MODIFICAR ADMINISTRADOR");

                String  doc, nombre, apel, tipodoc, ema, telf, nt, ndoc;

                System.out.println("Escriba el nuevo numero de documento");
                doc = entrada.next();
                System.out.println("Escriba el nombre");
                nombre = entrada.nextLine();
                nombre = entrada.nextLine();
                System.out.println("Escriba el apellido");
                apel = entrada.nextLine();
                System.out.println("Escriba el tipo documento");
                tipodoc = entrada.next();
                System.out.println("Escriba el email");
                ema = entrada.nextLine();
                ema = entrada.nextLine();
                System.out.println("Escriba el telefono");
                telf = entrada.next();
                System.out.println("Escriba el nit");
                nt = entrada.next();

                Administrador M = new Administrador (doc, nombre, apel, tipodoc, ema, telf, nt);
                System.out.println(M.toString());
                if (Administrador.modificarAdministrador(M)) {
                    //if (Mod.modificarAutor(M)){
                    System.out.println("--------- modificado ---------\n");
                } else {
                    System.out.println("No se pudo modificar");
                }
            }else if (opcion == 2) {

            } else if (opcion == 0) { //MENU SALIR
                x = 1;
            } else {
                System.out.println("Seleccione una opción correcta");
            }

        }


    }
}