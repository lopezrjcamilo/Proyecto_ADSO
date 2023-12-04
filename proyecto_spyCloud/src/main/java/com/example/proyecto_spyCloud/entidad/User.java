package com.example.proyecto_spyCloud.entidad;

import jakarta.persistence.*;

@Entity
@Table(name="users")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "image")
    private String image;


    @Column(name = "auth0id", unique = true)
    private String auth0id;

    @Column(name = "rol")
    private String rol;


    public User(){

    }
    public User(String email,String image,String auth0id,String rol){
       this.email=email;
       this.image=image;
       this.auth0id=auth0id;
       this.rol=rol;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAuth0id() {
        return auth0id;
    }

    public void setAuth0id(String auth0id) {
        this.auth0id = auth0id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
