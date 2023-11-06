package com.example.proyecto_spyCloud.controlador;

import com.example.proyecto_spyCloud.entidad.Usuario;
import com.example.proyecto_spyCloud.servicio.AdministradorService;
import com.example.proyecto_spyCloud.servicio.ClienteService;
import com.example.proyecto_spyCloud.servicio.EmpleadosService;
import com.example.proyecto_spyCloud.servicio.UsuarioService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class InicioController {

    UsuarioService usuarioService;
    AdministradorService administradorService;
    EmpleadosService empleadosService;
    ClienteService clienteService;

    public InicioController(UsuarioService usuarioService, AdministradorService administradorService, EmpleadosService empleadosService, ClienteService clienteService) {
        this.usuarioService = usuarioService;
        this.administradorService = administradorService;
        this.empleadosService = empleadosService;
        this.clienteService = clienteService;
    }

    @GetMapping("/") //Ruta Raiz
    public String index(Model model, @AuthenticationPrincipal OidcUser principal) {

        if (principal != null) {
            System.out.println(principal.getClaims());
            //Usuario user = this.usuarioService.getCrearUsuario(principal.getClaims().get("email")); //trae el correo de auth0
            Usuario user = this.usuarioService.getCrearUsuario(principal.getClaims());
            model.addAttribute("user",user);
            if(user.getRol().equals("Administrador")){ //Consultar que rol es y redirige a la interfaz de ese usuario
                return "redirect:/GestionLibros.html";
            }else{
                return "redirect:/GestionPrestamos.html";
            }
        }
        else{
            return "index";
        }
        //System.out.println(principal.getClaims());//Trae informacion del usuario de inicio de sesio

    }

    private final Logger log = LoggerFactory.getLogger(this.getClass());
    private final static ObjectMapper mapper = new ObjectMapper().registerModule(new JavaTimeModule());

    @GetMapping("/profile")
    public String profile(Model model, @AuthenticationPrincipal OidcUser oidcUser) {
        model.addAttribute("profile", oidcUser.getClaims());
        model.addAttribute("profileJson", claimsToJson(oidcUser.getClaims()));
        return "profile";
    }

    private String claimsToJson(Map<String, Object> claims) {
        try {
            return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(claims);
        } catch (JsonProcessingException jpe) {
            log.error("Error parsing claims to JSON", jpe);
        }
        return "Error parsing claims to JSON.";
    }

}
