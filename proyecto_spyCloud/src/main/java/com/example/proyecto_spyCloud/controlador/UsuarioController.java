package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Usuario;
import com.example.proyecto_spyCloud.servicio.AdministradorService;
import com.example.proyecto_spyCloud.servicio.ClienteService;
import com.example.proyecto_spyCloud.servicio.EmpleadosService;
import com.example.proyecto_spyCloud.servicio.UsuarioService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;

public class UsuarioController {
    UsuarioService usuarioService;
    AdministradorService administradorService;
    EmpleadosService empleadosService;
    ClienteService clienteService;

    public UsuarioController(UsuarioService usuarioService, AdministradorService administradorService, EmpleadosService empleadosService, ClienteService clienteService) {
        this.usuarioService = usuarioService;
        this.administradorService = administradorService;
        this.empleadosService = empleadosService;
        this.clienteService = clienteService;
    }

    @GetMapping("/user")
    public Usuario usuario(@AuthenticationPrincipal OidcUser principal) {
        System.out.println(principal.getClaims());
        String email = (String) principal.getClaims().get("email");
        Usuario user = this.usuarioService.buscarEmail(email);
        return user;

    }



  /*  @PostMapping("/logout")
    public String logout(HttpServletRequest request) {
        // Realiza la revocación del token de acceso en Auth0
        // ...

        // Invalida la sesión y redirige a la página de inicio o donde quieras
        request.getSession().invalidate();
        return "redirect:/index";
    }*/
}

