insert into cliente values("80098230","Juan Diaz","Jd@gmail.com","3501594465");
insert into cliente values("81234900","Sara Teresa","St@gmail.com","3401594565");
insert into cliente values("82334780","Efraín Leon","El@gmail.com","3201596965");
insert into cliente values("83567890","Julieta Sanchez","Js@gmail.com","3101591065");
insert into cliente values("84678902","Martín Diaz","Md@gmail.com","3001597865");
insert into cliente values("85678901","Elias Diaz","Ed@gmail.com","3011596865");
insert into cliente values("89867549","Julian Campo","Jc@gmail.com","3801556465");
insert into cliente values("82309754","Ponce Rincon","Pr@gmail.com","3901215465");
insert into cliente values("89067523","Fernando Perez","Fp@gmail.com","3104524465");
insert into cliente values("88906753","Jairo Rodriguez","Jr@gmail.com","3005894465");

insert into administrador values("159357654","Sebastian","Cardona","C.C","sc@spycloud.com","3257896523","80098230");
insert into administrador values("160357654","John","Fernandez","C.C","jf@spycloud.com","3261216523","81234900");
insert into administrador values("161357654","Martha","Torres","C.C","mt@spycloud.com","3272396523","82334780");

insert into empleados values("01","Juan Camilo","Rios Chavez","cc","161357654");
insert into empleados values("02","Jerson David","Sapuy Fajardo","cc","161357654");
insert into empleados values("03","Jose Daniel","Diaz Sanchez","cc","160357654");
insert into empleados values("04","John Fredy","Aroca Fernadez","cc","159357654");
insert into empleados values("05","Marly Zulay","Cardoso Gutierez","cc","159357654");
insert into empleados values("06","Andres","Casas Rodriguez","cc","160357654");
insert into empleados values("07","Santiago ","Forero Achagua","cc","159357654");
insert into empleados values("08","Ana Maria","Escobar Torres","cc","160357654");
insert into empleados values("09","Matias","Dias Marulanda","cc","161357654");
insert into empleados values("10","Fernando","Garcia Muñoz","cc","160357654");

insert into visita values ("B01","la esponjosa", "trasversal 44", "2022-07-24","01");
insert into visita values ("B02","la salvadora", "carrera 20 n 4-3", "2022-06-26","02");
insert into visita values ("B03","la cualt", "carrera 15 4-8", "2022-07-26","03");
insert into visita values ("B04","la especk", "trasversal 36", "2022-08-24","04");
insert into visita values ("B05","la mariposa", "carrera 4 8-09", "2022-07-24","05");
insert into visita values ("B06","la española", "carrera 6 4-08", "2022-05-25","06");
insert into visita values ("B07","la suicosa", "carrera 45 n 4-05", "2022-03-21","07");
insert into visita values ("B08","la monjosa", "trasversal 54", "2022-01-28","08");
insert into visita values ("BO9","la espensa", "trasversal 35", "2022-04-27","09");
insert into visita values ("B10","la colud", "trasversal 44", "2022-09-29","10");

insert into cultivo values ("C-01", "trasversal 44", "29","plano","B01");
insert into cultivo values ("C-02", "carrera 20 n 4-3", "26","duro","B02");
insert into cultivo values ("C-03", "carrera 15 4-8", "202","plano","B03");
insert into cultivo values ("C-04", "trasversal 36", "24","plano","B04");
insert into cultivo values ("C-05", "carrera 4 8-09", "07","blanco","B05");
insert into cultivo values ("C-06", "carrera 6 4-08", "25","plano","B06");
insert into cultivo values ("C-07", "carrera 45 n 4-05", "21","con pendiente","B07");
insert into cultivo values ("C-08", "trasversal 54", "28","plano","B08");
insert into cultivo values ("C-09", "trasversal 35", "7","irregular","BO9");
insert into cultivo values ("C-10", "trasversal 44", "92","plano","B10");

insert into facturacion values ("F00001","800123654","contado","20000000",'2022-01-08',"C-01");
insert into facturacion values ("F00002","800120008","credito","9000000",'2022-07-28',"C-02");
insert into facturacion values ("F00003","822345279","contado","15000000",'2022-07-13',"C-04");
insert into facturacion values ("F00004","800154354","credito","10000000",'2022-09-27',"C-05");
insert into facturacion values ("F00005","800135780","credito","3000000",'2022-11-17',"C-03");
insert into facturacion values ("F00006","800111567","contado","1000000",'2022-02-01',"C-6");
insert into facturacion values ("F00007","800876098","contado","21000000",'2022-05-30',"C-8");
insert into facturacion values ("F00008","800120789","credito","5000000",'2022-01-11',"C-7");
insert into facturacion values ("F00009","800345345","contado","15000000",'2022-06-23',"C-10");
insert into facturacion values ("F00010","800555666","credito","8000000",'2022-12-08',"C-9");

insert into dron values ("D-0001","SD0055666","venom","C-01");
insert into dron values ("D-0002","SD0066677","project","C-02");
insert into dron values ("D-0003","SD0234562","zz","C-03");
insert into dron values ("D-0004","SD1234124","project","C-04");
insert into dron values ("D-0005","SD0987790","zz","C-05");
insert into dron values ("D-0006","SD0014523","project","C-06");
insert into dron values ("D-0007","SD1100889","venom","C-07");
insert into dron values ("D-0008","SD2525634","project","C-08");
insert into dron values ("D-0009","SD1156645","venom","C-09");
insert into dron values ("D-0010","SD9879678","project","C-10");

insert into analizado values ("AN-0001",'2022-01-01',"D-0001");
insert into analizado values ("AN-0002",'2022-07-08',"D-0002");
insert into analizado values ("AN-0003",'2022-07-09',"D-0003");
insert into analizado values ("AN-0004",'2022-09-08',"D-0004");
insert into analizado values ("AN-0005",'2022-11-04',"D-0005");
insert into analizado values ("AN-0006",'2022-01-28',"D-0006");
insert into analizado values ("AN-0007",'2022-04-22',"D-0007");
insert into analizado values ("AN-0008",'2022-01-01',"D-0008");
insert into analizado values ("AN-0009",'2022-06-15',"D-0009");
insert into analizado values ("AN-0010",'2022-12-01',"D-0010");

insert into diagnostico value ("101","infeccion al 16%","2022-06-01","2022-06-03","2022-06-21","Bajo","D-0001");
insert into diagnostico value ("102","infeccion al 36%","2022-07-05","2022-07-12","2022-07-15","Mediano","D-0002");
insert into diagnostico value ("103","infeccion al 40%","2022-07-14","2022-07-16","2022-07-19","Alto","D-0003");
insert into diagnostico value ("104","infeccion al 2%","2022-08-23","2022-09-30","2022-10-02","Mediano","D-0004");
insert into diagnostico value ("105","infeccion al 22%","2022-08-02","2022-08-05","2022-08-16","Bajo","D-0005");
insert into diagnostico value ("106","infeccion al 80%","2022-09-10","2022-10-14","2022-10-15","Mediano","D-0006");
insert into diagnostico value ("107","infeccion al 62%","2022-09-26","2022-10-01","2022-10-14","Bajo","D-0007");
insert into diagnostico value ("108","infeccion al 6%","2022-01-12","2022-01-18","2022-01-23","Alto","D-0008");
insert into diagnostico value ("109","infeccion al 78%","2022-04-15","2022-05-01","2022-05-10","Mediano","D-0009");
insert into diagnostico value ("110","infeccion al 99%","2022-05-22","2022-06-02","2022-06-20","Bajo","D-0010");

insert into multimedia value ("MULT000001","imd0000001","10","101");
insert into multimedia value ("MULT000002","imd0000002","13","102");
insert into multimedia value ("MULT000003","imd0000003","10","103");
insert into multimedia value ("MULT000004","imd0000004","8","104");
insert into multimedia value ("MULT000005","imd0000005","18","102");
insert into multimedia value ("MULT000006","imd0000006","15","106");
insert into multimedia value ("MULT000007","imd0000007","9","108");
insert into multimedia value ("MULT000008","imd0000008","19","108");
insert into multimedia value ("MULT000009","imd0000009","21","102");
insert into multimedia value ("MULT000010","imd0000010","22","101");

insert into virus value ("V2123","Mildeo polvoso");
insert into virus value ("V2124","Tizón tardío");
insert into virus value ("V2125","Gota");

insert into tiene values ("REG-000001","101","V2123",'2022-05-28');
insert into tiene values ("REG-000002","102","V2124",'2022-07-02');
insert into tiene values ("REG-000003","103","V2125",'2022-07-06');
insert into tiene values ("REG-000004","104","V2123",'2022-09-30');
insert into tiene values ("REG-000005","105","V2124",'2022-07-30');
insert into tiene values ("REG-000006","106","V2125",'2022-10-04');
insert into tiene values ("REG-000007","107","V2123",'2022-09-19');
insert into tiene values ("REG-000008","108","V2124",'2022-01-11');
insert into tiene values ("REG-000009","109","V2125",'2022-04-21');
insert into tiene values ("REG-000010","110","V2123",'2022-05-22');