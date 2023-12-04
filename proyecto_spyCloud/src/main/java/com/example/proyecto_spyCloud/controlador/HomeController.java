package com.example.proyecto_spyCloud.controlador;


import com.example.proyecto_spyCloud.entidad.Administrador;
import com.example.proyecto_spyCloud.entidad.User;
import com.example.proyecto_spyCloud.servicio.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {


    UserService userService;


    public HomeController(UserService userService){
        this.userService=userService;

    }

    @GetMapping("/")
    public String home(Model model, @AuthenticationPrincipal OidcUser principal) {
        if (principal != null) {
            User user=this.userService.getOrCreateUser(principal.getClaims());
            principal.getClaims();
            if (user!=null){
                if (user.getRol().equals("Administrador")){
                    return "redirect:/admi";

                } else if (user.getRol().equals("Empleado")) {
                    return "redirect:/empleado";

                }else {
                    return "redirect:/logout";
                }
            }
        }
        return "index";

    }
    @GetMapping("/admi")
    public String admi(Model model, @AuthenticationPrincipal OidcUser oidcUser) {
        model.addAttribute("profile", oidcUser.getClaims());
        return "admi";}

    @GetMapping("/empleado")
    public String empleado(Model model, @AuthenticationPrincipal OidcUser oidcUser) {
        model.addAttribute("profile", oidcUser.getClaims());
        return "empleado";}
}