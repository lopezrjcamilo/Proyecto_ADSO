select*from tiene;

#Cunsulta que facturas se pagaran por la modalidad de credito 
select cultivo.direccion,cultivo.hectareas, cultivo.terreno,facturacion.forma_pag from cultivo,facturacion where cultivo.cod_cult=facturacion.cod_cult and forma_pag="credito";
#cuenta cuantos terrenos duplicados se manejan
select count(*), terreno from cultivo group by terreno;
#Consulta cuales drones son de la marca venomvisitafacturacion
select cod_dron, num_serial from dron where marca="venom";
#consulta que empleados y en que finca tienen visita despues de la fecha 2022-05-01
select empleados.Nombre_emp, empleados.Apellido_emp, visita.nom_finca from empleados, visita where empleados.cod_emp=visita.cod_emp and fecha>"2022-05-01";
#Consulta que diagnostico se encontro el virus Gota
select * from diagnostico where num_diag in(select num_diag from tiene where cod_virus in  ( select cod_virus from virus where nom_virus="Gota"));