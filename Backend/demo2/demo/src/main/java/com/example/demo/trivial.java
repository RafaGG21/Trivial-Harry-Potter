package com.example.demo;

import entity.quest;
import entity.usuario;
import models.services.IQuestService;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController

public class trivial {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    private IQuestService questService;

    @GetMapping("/trivial")
    public List<Map<String, Object>> trivial() {

        return jdbcTemplate.queryForList("SELECT * FROM quest");

    }

    @GetMapping("/trivial/{year}")
    public List<Map<String, Object>> trivial2(@PathVariable int year) {

        return jdbcTemplate.queryForList("SELECT * FROM quest where year = "+year);

    }






}
