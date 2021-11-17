package com.example.demo;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import entity.usuario;

import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class user {

    @Autowired
    private JdbcTemplate jdbcTemplate;




    @GetMapping("/usuario")
    public List<Map<String, Object>> usuario() {

        return jdbcTemplate.queryForList("SELECT * FROM usuario");
    }


    @PostMapping("/usuario")
    public List<Map<String, Object>> crearUsuario(@RequestBody usuario u, BindingResult result) {

       jdbcTemplate.queryForList("insert into usuario (nombre) values ('"+u.getNombre()+"') ");
        return jdbcTemplate.queryForList("SELECT * FROM usuario");
    }


}
