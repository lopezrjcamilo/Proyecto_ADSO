////------------------- CLIENTE -----------------------
public Cliente buscarNit(String nit){
Cliente Dat=null;
try {
    conec = con.Conecta();
    String sql="select * from Cliente where nit=?";
    ps = conec.prepareStatement(sql);
    ps.setString(1, nit);
    res = ps.executeQuery();
    while (res.next()){
        Dat= new Cliente(res.getString(1), res.getString(2), res.getString(3), res.getString(4));}
    }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
    }
        return Dat;
}
//ELIMINAR
public boolean eliminarNit (String nit){
boolean resultado = false;
try {
    if (this.buscarNit(nit)!=null){
        conec = con.Conecta();
        String sql = "delete from Cliente where nit=?";
        ps = conec.prepareStatement(sql);
        ps.setString(1,nit);
        resultado = ps.executeUpdate()>0;
    }else{
        System.out.println("No se hallo el registro a eliminar");
    }
}catch (SQLException ex){
    System.out.println("Error al eliminar: "+ ex);
}
    return resultado;
}

////------------------- ADMNISTRACION -----------------------
    public Administracion buscarNumDoc(String num_doc){
        Administracion Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Administracion where num_doc=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, num_doc);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Administracion(res.getString(1), res.getString(2), res.getString(3), res.getString(4), res.getString(5), res.getString(6), res.getString(7));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarNumDoc (String num_doc){
        boolean resultado = false;
        try {
            if (this.buscarNumDoc(num_doc)!=null){
                conec = con.Conecta();
                String sql = "delete from Administracion where num_doc=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,num_doc);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
	////------------------- EMPLEADOS -----------------------
public Empleados buscarCodEmp(String cod_emp){
        Empleados Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Empleados where cod_emp=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, cod_emp);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Empleados(res.getString(1), res.getString(2), res.getString(3), res.getString(4), res.getString(5), res.getString(6) );
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarCodEmp (String cod_emp){
        boolean resultado = false;
        try {
            if (this.buscarCodEmp(cod_emp)!=null){
                conec = con.Conecta();
                String sql = "delete from Empleados where cod_emp=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,cod_emp);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
////------------------- VISITA -----------------------
public Visita buscarNumVisit(String num_visit){
        Visita Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Visita where num_visit=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, num_visit);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Visita(res.getString(1), res.getString(2), res.getString(3), res.getDate(4), res.getString(5) );
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarNumVisit (String num_visit){
        boolean resultado = false;
        try {
            if (this.buscarNumVisit(num_visit)!=null){
                conec = con.Conecta();
                String sql = "delete from visita where num_visit=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,num_visit);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
	////------------------- CULTIVO -----------------------
public Cultivo buscarCodCult(String cod_cult){
        Cultivo Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Cultivo where cod_cult=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, cod_cult);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Cultivo(res.getString(1), res.getString(2), res.getString(3), res.getString(4), res.getString(5));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarCodCult (String cod_cult){
        boolean resultado = false;
        try {
            if (this.buscarCodCult(cod_cult)!=null){
                conec = con.Conecta();
                String sql = "delete from Cultivo where cod_cult=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,cod_cult);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
////------------------- FACTURACION -----------------------
public Facturacion buscarNumFac(String num_fac){
        Facturacion Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Facturacion where num_fac=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, num_fac);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Facturacion(res.getString(1), res.getString(2), res.getString(3), res.getString(4), res.getDate(5), res.getString(6) );
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarNumFac (String num_fac){
        boolean resultado = false;
        try {
            if (this.buscarNumFac(num_fac)!=null){
                conec = con.Conecta();
                String sql = "delete from facturacion where num_fac=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,num_fac);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
	////------------------- DRON -----------------------
public Dron buscarCodDron(String cod_dron){
        Dron Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Dron where cod_dron=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, cod_dron);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Dron(res.getString(1), res.getString(2), res.getString(3));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarCodDron (String cod_dron){
        boolean resultado = false;
        try {
            if (this.buscarCodDron(cod_dron)!=null){
                conec = con.Conecta();
                String sql = "delete from Dron where cod_dron=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,cod_dron);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
////------------------- ANALIZADO -----------------------
public Analizado buscarCodAnalisis(String cod_analisis){
        Analizado Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Analizado where cod_analisis=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, cod_analisis);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Analizado(res.getString(1), res.getDate(2), res.getString(3));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarCodAnalisis (String cod_analisis){
        boolean resultado = false;
        try {
            if (this.buscarCodAnalisis(cod_analisis)!=null){
                conec = con.Conecta();
                String sql = "delete from Analizado where cod_analisis=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,cod_analisis);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
	////------------------- DIAGNOSTICO -----------------------
public Diagnostico buscarNumDiag(String num_diag){
        Diagnostico Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from diagnostico where num_diag=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, num_diag);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Diagnostico(res.getString(1), res.getString(2), res.getDate(3), res.getDate(4), res.getDate(5), res.getString(6), res.getString(7));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarNumDiag (String num_diag){
        boolean resultado = false;
        try {
            if (this.buscarNumDiag(num_diag)!=null){
                conec = con.Conecta();
                String sql = "delete from diagnostico where num_diag=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,num_diag);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
 ////------------------- MULTIMEDIA -----------------------
public Multimedia buscarCodMul(String cod_mul){
        Multimedia Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from multimedia where cod_mul=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, cod_mul);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Multimedia(res.getString(1), res.getString(2), res.getString(3), res.getString(4));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarCodMul (String cod_mul){
        boolean resultado = false;
        try {
            if (this.buscarCodMul(cod_mul)!=null){
                conec = con.Conecta();
                String sql = "delete from multimedia where cod_mul=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,cod_mul);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }


	////------------------- TIENE -----------------------
public Tiene buscarNumReg(String num_reg){
        Tiene Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Tiene where num_reg=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, num_reg);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Tiene(res.getString(1), res.getString(2), res.getString(3), res.getDate(4));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarNumReg (String num_reg){
        boolean resultado = false;
        try {
            if (this.buscarNumReg(num_reg)!=null){
                conec = con.Conecta();
                String sql = "delete from Tiene where num_reg=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,num_reg);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }
	
	////------------------- VIRUS -----------------------
public Virus buscarVirus(String cod_virus){
        Virus Dat=null;
        try {
            conec = con.Conecta();
            String sql="select * from Virus where cod_virus=?";
            ps = conec.prepareStatement(sql);
            ps.setString(1, cod_virus);
            res = ps.executeQuery();
            while (res.next()){
                Dat= new Virus(res.getString(1), res.getString(2));
            }
        }catch (SQLException ex){
            System.out.println("Error al consultar:" + ex);
        }
        return Dat;
    }
	//ELIMINAR
	public boolean eliminarCodVirus (String cod_virus){
        boolean resultado = false;
        try {
            if (this.buscarVirus(cod_virus)!=null){
                conec = con.Conecta();
                String sql = "delete from virus where cod_virus=?";
                ps = conec.prepareStatement(sql);
                ps.setString(1,cod_virus);
                resultado = ps.executeUpdate()>0;
            }else{
                System.out.println("No se hallo el registro a eliminar");
            }
        }catch (SQLException ex){
            System.out.println("Error al eliminar: "+ ex);
        }
        return resultado;
    }	

	

	
	
	
	// ------------------- 	MODIFICACIONES	------------------- 	//
////------------------- CLIENTE -----------------------
//GESTION
public boolean modificarCliente (Cliente Modi){
        boolean resultado = false;
        try {
            if (this.buscarNit(Modi.getNit())!=null){
                conec = con.Conecta();
                String sql = "update cliente set nom_cliente=?, correo=?, telefono=? where nit=?";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getNom_cliente());
                ps.setString(2,Modi.getCorreo());
                ps.setString(3,Modi.getTelefono());
                ps.setString(4, Modi.getNit());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionCliente Cliente = new GestionCliente();
System.out.println("\n MODIFICAR CLIENTE");

String  Nt, nomC, corr, telf;
	
<System.out.println("Escriba el nuevo nit");
Nt = entrada.next();
System.out.println("Escriba el nombre del cliente");
nomC = entrada.nextLine();
System.out.println("Escriba el correo");
corr = entrada.next();
System.out.println("Escriba el telefono");
telf = entrada.next();

Cliente M = new Cliente (Nt, nomC, corr, telf);
System.out.println(M.toString());
if (Cliente.modificarCliente(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}	
	
////------------------- ADMINISTRADOR -----------------------
//GESTION
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
//MAIN
GestionAdministrador Administrador = new GestionAdministrador();
System.out.println("\n MODIFICAR ADMINISTRADOR");

String  doc, nombre, apel, tipodoc, ema, telf, nt, ndoc;
	
<System.out.println("Escriba el nuevo numero de documento");
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
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}
////------------------- EMPLEADOS -----------------------
//GESTION
public boolean modificarEmpleados (Empleados Modi){
        boolean resultado = false;
        try {
            if (this.buscarCodEmp(Modi.getCod_emp())!=null){
                conec = con.Conecta();
                String sql = "update empleados set nombre_emp=?, Apellido_emp=?, Tipo_doc=?, num_doc=? where cod_emp=?";
";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getNombre_emp());
                ps.setString(2,Modi.getApellido_emp());
                ps.setString(3,Modi.getTipo_doc());
                ps.setString(4, Modi.getNum_doc());
				ps.setString(5, Modi.getCod_emp());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionEmpleados Empleados = new GestionEmpleados();
System.out.println("\n MODIFICAR EMPLEADOS");

String  codE, nomE, apeE, tipDE, numDE;
	
<System.out.println("Escriba el nuevo codigo de empleado");
codE = entrada.next();
System.out.println("Escriba el nombre");
nomE = entrada.nextLine();
System.out.println("Escriba el apellido");
apeE = entrada.nextLine();
System.out.println("Escriba el tipo de documento");
tipDE = entrada.next();
System.out.println("Escriba el tipo de daño")
tipD = entrada.next();
System.out.println("Escriba el codigo del dron")
codD = entrada.next();	

Empleados M = new Empleados (codE, nomE, apeE, tipDE, numDE);
System.out.println(M.toString());
if (Empleados.modificarEmpleados(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}


////------------------- ANALIZADO -----------------------
//GESTION
public boolean modificarAnalizado (Analizado Modi){
        boolean resultado = false;
        try {
            if (this.buscarCodAnalisis(Modi.getCod_analisis())!=null){
                conec = con.Conecta();
                String sql = "update analizado set fecha_analisis=?, cod_dron=?, cod_cult=? where cod_analisis=?";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getFecha_analisis());
                ps.setString(2,Modi.getCod_dron());
                ps.setString(3,Modi.getCod_cult());
                ps.setString(4, Modi.getCod_analisis());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionAnalizado Analizado = new GestionAnalizado();
System.out.println("\n MODIFICAR ANALIZADO");

String  codAn, fech, codDr, codCu;
	
<System.out.println("Escriba el nuevo codigo de analisis");
codAn = entrada.next();
System.out.println("Escriba la fecha");
fech = entrada.nextLine();
System.out.println("Escriba el codigo del dron");
codDr = entrada.next();
System.out.println("Escriba el codigo del cultivo");
tipodoc = entrada.next();

Analizado M = new Analizado (codAn, fech, codDr, codCu);
System.out.println(M.toString());
if (Analizado.modificarAnalizado(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}

////------------------- VISITA -----------------------
//GESTION
public boolean modificarVisita (Visita Modi){
        boolean resultado = false;
        try {
            if (this.buscarNumVisit(Modi.getNum_visit())!=null){
                conec = con.Conecta();
                String sql = "update analizado set fecha_analisis=?, cod_dron=?, cod_cult=? where cod_analisis=?";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getFecha_analisis());
                ps.setString(2,Modi.getCod_dron());
                ps.setString(3,Modi.getCod_cult());
                ps.setString(4, Modi.getCod_analisis());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionAnalizado Analizado = new GestionAnalizado();
System.out.println("\n MODIFICAR ANALIZADO");

String  codAn, fech, codDr, codCu;
	
<System.out.println("Escriba el nuevo codigo de analisis");
codAn = entrada.next();
System.out.println("Escriba la fecha");
fech = entrada.nextLine();
System.out.println("Escriba el codigo del dron");
codDr = entrada.next();
System.out.println("Escriba el codigo del cultivo");
tipodoc = entrada.next();

Analizado M = new Analizado (codAn, fech, codDr, codCu);
System.out.println(M.toString());
if (Analizado.modificarAnalizado(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}



////------------------- CULTIVO -----------------------
//GESTION
public boolean modificarCultivo (Cultivo Modi){
        boolean resultado = false;
        try {
            if (this.buscarCodCult(Modi.getCod_cult())!=null){
                conec = con.Conecta();
                String sql = "update cultivo set direccion=?, hectareas=?, terreno=? where cod_cult=?";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getDireccion());
                ps.setString(2,Modi.getHectarias());
                ps.setString(3,Modi.getTerreno());
                ps.setString(4, Modi.getCod_cult());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionCultivo Cultivo = new GestionCultivo();
System.out.println("\n MODIFICAR CULTIVO");

String  codCul, dir, hect, terr, numVi;
	
<System.out.println("Escriba el nuevo codigo del cultivo");
codCul = entrada.next();
System.out.println("Escriba la direccion");
dir = entrada.nextLine();
System.out.println("Escriba el numero de hectareas");
hect = entrada.next();
System.out.println("Escriba el tipo de terreno");
terr = entrada.next();
System.out.println("Escriba el numero de visita")
numVi = entrada.next();	

Cultivo M = new Cultivo (codCul, dir, hect, terr, numVi);
System.out.println(M.toString());
if (Cultivo.modificarCultivo(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}

////------------------- DIAGNOSTICO -----------------------
//GESTION
public boolean modificarDiagnostico (Diagnostico Modi){
        boolean resultado = false;
        try {
            if (this.buscarNumDiag(Modi.getNum_diag())!=null){
                conec = con.Conecta();
                String sql = "update diagnostico set fech_solicit=?, fech_diag=?, fech_entreg=?, tip_daño=?, cod_dron=? where num_diag=?";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getFech_solicit());
                ps.setString(2,Modi.getFech_diag());
                ps.setString(3,Modi.getFech_entreg());
                ps.setString(4, Modi.getTip_daño());
				ps.setString(5, Modi.getCod_dron());
				ps.setString(6, Modi.getNum_diag());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionDiagnostico Diagnostico = new GestionDiagnostico();
System.out.println("\n MODIFICAR DIAGNOSTICO");

String  numDi, fSol, fDia, fEnt, tipD, codD;
	
<System.out.println("Escriba el nuevo codigo del diagnostico");
numDi = entrada.next();
System.out.println("Escriba la fecha de solicitud");
fSol = entrada.next();
System.out.println("Escriba la fecha del diagnostico");
fDia = entrada.next();
System.out.println("Escriba la fecha de entrega");
fEnt = entrada.next();
System.out.println("Escriba el tipo de daño")
tipD = entrada.next();
System.out.println("Escriba el codigo del dron")
codD = entrada.next();	

Diagnostico M = new Diagnostico (numDi, fSol, fDia, fEnt, tipD, codD);
System.out.println(M.toString());
if (Diagnostico.modificarDiagnostico(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}

////------------------- DRON -----------------------
//GESTION
public boolean modificarDron (Dron Modi){
        boolean resultado = false;
        try {
            if (this.buscarCodDron(Modi.getCod_dron())!=null){
                conec = con.Conecta();
                String sql = "update dron set num_serial=?, marca=? where cod_dron=?";
                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getNum_serial());
                ps.setString(2,Modi.getMarca());
                ps.setString(3,Modi.getCod_dron());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionDron Dron = new GestionDron();
System.out.println("\n MODIFICAR DRON");

String  codDro, numS, marc;
	
<System.out.println("Escriba el nuevo codigo del dron");
codDro = entrada.next();
System.out.println("Escriba el numero de serial");
numS = entrada.next();
System.out.println("Escriba la marca");
marc = entrada.next();

Dron M = new Dron (codDro, numS, marc);
System.out.println(M.toString());
if (Dron.modificarDron(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}



////------------------- FACTURACION -----------------------
//GESTION
public boolean modificarFacturacion (Facturacion Modi){
        boolean resultado = false;
        try {
            if (this.buscarNumFac(Modi.getNum_fac())!=null){
                conec = con.Conecta();
                String sql = "update facturacion set cuent_clien=?, forma_pag=?, valor=?, fech_pago=?, num_doc=? where num_fac=?";

                ps = conec.prepareStatement(sql);

                ps.setString(1, Modi.getCuent_clien());
                ps.setString(2,Modi.getForma_pag());
                ps.setString(3,Modi.getValor());
                ps.setString(4, Modi.getFech_pago());
				ps.setString(5, Modi.getNum_doc());
				ps.setString(6, Modi.getNum_fac());
                resultado = ps.executeUpdate()>0;
            } else {
                System.out.println("No se hallo el registro a modificar.");
            }
        }catch (SQLException ex){
            System.out.println("Error al modificar: "+ex);
        }
        return resultado;
    }
//MAIN
GestionFacturacion Facturacion = new GestionFacturacion();
System.out.println("\n MODIFICAR FACTURACION");

String  numF, cuentC, formaP, val, fechP, numD;
	
<System.out.println("Escriba el nuevo codigo de empleado");
codE = entrada.next();
System.out.println("Escriba el nombre");
nomE = entrada.nextLine();
System.out.println("Escriba el apellido");
apeE = entrada.nextLine();
System.out.println("Escriba el tipo de documento");
tipDE = entrada.next();
System.out.println("Escriba el tipo de daño")
tipD = entrada.next();
System.out.println("Escriba el codigo del dron")
codD = entrada.next();	

Empleados M = new Empleados (codE, nomE, apeE, tipDE, numDE);
System.out.println(M.toString());
if (Empleados.modificarEmpleados(M)) {
    System.out.println("--------- modificado ---------\n");
} else {
    System.out.println("No se pudo modificar");
}




/////////////////////////////////////////////////////
select * from Administrador;
select * from empleados;
select * from facturacion;

delete from administrador where num_doc="168357654";
delete from administrador where Email="admin@spycloud.com";
update administrador Set telefono = null where id = 3147996523 ;
update administrador set administrador.Telefono = null where id = 3147996523 ;

delete from facturacion where num_fac="F00010";
delete from visita where num_visit="B09";
delete from virus where cod_virus="V2678";
delete from tiene where num_reg="89867549";
delete from analizado where cod_analisis="AN-0010";

delete from empleados where cod_emp="10";
delete from dron where cod_dron="D-0010";
delete from cultivo where cod_cult="C-10";
delete from cliente where nit="89867549";
delete from administrador where num_doc="168357654";

/*            */
select * from Dron;
update administrador set nombre="Eustorgio", apellido="Duert", Tipo_doc="T.I", Email="toyoduarte@gmail.com", Telefono="3005005050", nit="89867549" where num_doc="168357654";
update analizado set fecha_analisis='2023-04-17', cod_dron="D-0001", cod_cult="C-01" where cod_analisis="AN-0009";
update cliente set nom_cliente='Carolina Gonz', correo="caro@gmail.com", telefono="3003300333" where nit="89867549";
update cultivo set direccion="calle 6", hectareas="33", terreno="duro" where cod_cult="C-10";
update diagnostico set fech_solicit='2023-04-17', fech_diag='2023-05-18', fech_entreg='2023-08-08', cod_dron="D-0001" where num_diag="110";
update dron set num_serial="SD0000003", marca="venom" where cod_dron="D-0010";
select * from empleados;

update empleados set nombre_emp="Ferney", Apellido_emp="Zapata", Tipo_doc="CC", num_doc="168357654" where cod_emp="10";


update visita set nom_finca="Arenales", direc_visit="calle 7", fecha='2023-04-17', cod_emp="09" where num_visit="B09";


