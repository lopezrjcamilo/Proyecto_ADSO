create database proyectoadso;
use proyectoadso;
Create Table cliente (
nit varchar(15) not null,
nom_cliente char(30) not null,
correo char(20) not null,
telefono varchar(15) not null,
primary key (nit)
);
Create table Administrador (
num_doc char(15) not null,
nombre char(20) not null,
apellido char (20) not null,
Tipo_doc char(10) not null,
Email char(20) not null,
Telefono varchar(15) not null,
nit varchar(15) not null,
primary key (num_doc),
Foreign Key (nit) references cliente (nit)
);
Create table Empleados (
cod_emp char(15) not null,
Nombre_emp char (30) not null,
Apellido_emp char(30) not null,
Tipo_doc char(15) not null,
num_doc char(15) not null,
primary key (cod_emp),
foreign key (num_doc) references administrador (num_doc)
);
create table visita (
num_visit char(20) not null,
nom_finca char (20) not null,
direc_visit char (30) not null,
fecha date,
cod_emp char(15) not null,
primary key (num_visit),
foreign key (cod_emp) references Empleados (cod_emp)
);

create table cultivo (
cod_cult char(20) not null,
direccion char (30) not null,
hectareas char (20) not null,
terreno char (25) not null,
num_visit char(20) not null,
primary key (cod_cult),
foreign key (num_visit) references visita (num_visit)
);
create table facturacion(
num_fac char(15) not null,
cuent_clien varchar(20) not null,
forma_pag char(15) not null,
valor char(15) not null,
fech_pago date,
cod_cult char(20) not null,
primary key (num_fac),
foreign key (cod_cult) references cultivo (cod_cult)
);
create table dron(
cod_dron char(10) not null,
num_serial char(10) not null,
marca char(15) not null,
cod_cult char(20) not null,
primary key (cod_dron),
foreign key (cod_cult) references cultivo (cod_cult)
);
create table analizado(
cod_anali char(10) not null,
fech_anali date,
cod_dron char(10) not null,
primary key (cod_anali),
foreign key (cod_dron) references dron (cod_dron)  
);

create table diagnostico(
num_diag char(20) not null,
observaciones varchar(400)not null,
fech_solicit date not null,
fech_diag date not null,
fech_entreg date not null,
tip_daño char (20) not null,
cod_dron char(10) not null,
primary key (num_diag),
foreign key(cod_dron) references dron (cod_dron)
);
create table multimedia(
cod_mul char (15) not null,
nom_archivo char (10) not null,
tamaño char (15) not null,
num_diag char(20) not null,
primary key (cod_mul),
foreign key (num_diag) references diagnostico (num_diag)
);
create table tiene(
num_reg char(15) not null,
num_diag char(20) not null,
cod_virus char (20) not null,
fecha_reg date not null,
primary key (num_reg),
foreign key (num_diag ) references diagnostico (num_diag),
foreign key(cod_virus) references virus(cod_virus)
);
create table virus(
cod_virus char (20) not null,
nom_virus char (20) not null,
primary key (cod_virus)
);

