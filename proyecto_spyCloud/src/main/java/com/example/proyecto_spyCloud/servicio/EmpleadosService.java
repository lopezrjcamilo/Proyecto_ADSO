package com.example.proyecto_spyCloud.servicio;

import com.example.proyecto_spyCloud.entidad.Administrador;
<<<<<<< HEAD
import com.example.proyecto_spyCloud.entidad.Cliente;
=======
>>>>>>> 18c6de7e8a6a8063c64ace9ed0d63197d9160449
import com.example.proyecto_spyCloud.entidad.Empleados;
import com.example.proyecto_spyCloud.repositorio.AdministradorRepository;
import com.example.proyecto_spyCloud.repositorio.EmpleadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadosService {

<<<<<<< HEAD
=======

>>>>>>> 18c6de7e8a6a8063c64ace9ed0d63197d9160449
    private EmpleadosRepository empleadosRepository;
    private AdministradorRepository administradorRepository;
    @Autowired
    public EmpleadosService(EmpleadosRepository empleadosRepository, AdministradorRepository administradorRepository) {
<<<<<<< HEAD
        this.empleadosRepository = empleadosRepository;
        this.administradorRepository = administradorRepository;
    }




    public List<Empleados> listarEmpleados() {
        return empleadosRepository.findAll();
    }

    public Empleados empleadosPorId(Integer id) {
        return empleadosRepository.findById(Integer.valueOf(id)).get();
    }

    public Empleados insertarEmpleados(Empleados empleados){
        Optional<Administrador> administradorOptional= administradorRepository.findById(empleados.getAdministrador1().getNumDoc());
        if(administradorOptional.isPresent()){
            Administrador administrador=administradorOptional.get();
            empleados.setAdministrador1(administrador);
            return empleadosRepository.save(empleados);
        }else{
            return null;
        }
    }

    public Empleados actualizarEmpleados(Empleados empleados){
        Optional<Administrador> administradorOptional= administradorRepository.findById(empleados.getAdministrador1().getNumDoc());
        if(administradorOptional.isPresent()){
            Administrador administrador=administradorOptional.get();
            empleados.setAdministrador1(administrador);
            return empleadosRepository.save(empleados);
        }else{
            return null;
        }
    }

    public void eliminarEmpleadosPorId(Integer codEmp){
        empleadosRepository.deleteById(codEmp);
    }

}
=======
            this.empleadosRepository = empleadosRepository;
            this.administradorRepository = administradorRepository;
        }




        public List<Empleados> listarEmpleados() {
            return empleadosRepository.findAll();
        }


            public Empleados empleadosPorId(Integer id) {
                return empleadosRepository.findById(Integer.valueOf(id)).get();
            }

            public Empleados insertarEmpleados(Empleados empleados){
                Optional<Administrador> administradorOptional= administradorRepository.findById(empleados.getAdministrador().getNumDoc());
                if(administradorOptional.isPresent()){
                    Administrador administrador=administradorOptional.get();
                    empleados.setAdministrador(administrador);
                    return empleadosRepository.save(empleados);
                }else{
                    return null;
                }
            }

            public Empleados actualizarEmpleados(Empleados empleados){
                Optional<Administrador> administradorOptional= administradorRepository.findById(empleados.getAdministrador().getNumDoc());
                if(administradorOptional.isPresent()){
                    Administrador administrador=administradorOptional.get();
                    empleados.setAdministrador(administrador);
                    return empleadosRepository.save(empleados);
                }else{
                    return null;
                }
            }

            public void eliminarEmpleadosPorId(Integer codEmp){
                empleadosRepository.deleteById(codEmp);
            }

        }
>>>>>>> 18c6de7e8a6a8063c64ace9ed0d63197d9160449
