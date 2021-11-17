package com.example.demo;

import entity.nuevaspreguntas;
import models.services.InuevasPreguntasService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class NuevoTrivial {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    private InuevasPreguntasService nuevasService;

    @GetMapping("/nuevaspreguntas")
    public List<Map<String, Object>> nuevoTrivial() {

        return jdbcTemplate.queryForList("SELECT * FROM nuevaspreguntas");

    }
/*
    @PostMapping("/nuevasPreguntas")
    public ResponseEntity<?> create(@Valid @RequestBody nuevasPreguntas pregunta, BindingResult result) {
        nuevasPreguntas nuevaPregunta = null;
        Map<String,Object> response = new HashMap<>();

        if(result.hasErrors()) {
            List<String> errores = result.getFieldErrors()
                    .stream()
                    .map(error->"El campo '" + error.getField() + "' " + error.getDefaultMessage())
                    .collect(Collectors.toList());
            response.put("errores", errores);
            return new ResponseEntity<Map<String,Object>>(response, HttpStatus.BAD_REQUEST);
        }

        try {

            nuevaPregunta = nuevasService.save(pregunta);
        } catch (DataAccessException e) {
            response.put("mensaje", "Error al acceder a la base de datos");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        // Ha podido insertar el cliente
        response.put("mensaje", "La pregunta ha sido insertada con exito");
        response.put("quest", nuevaPregunta);
        return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
    }
*/
    @PostMapping("/nuevaspreguntas")
    public List<Map<String, Object>> crearTrivial(@RequestBody nuevaspreguntas t) {

    jdbcTemplate.update("insert into nuevaspreguntas (pregunta,respuestacorrecta,respuesta1,respuesta2,respuesta3,respuesta4) values ('"+t.getPregunta()+"','"+t.getRespuestacorrecta()+"','"+t.getRespuesta1()+"','"+t.getRespuesta2()+"','"+t.getRespuesta3()+"','"+t.getRespuesta4()+"') ");
    return jdbcTemplate.queryForList("SELECT * FROM nuevaspreguntas");

    }
    @DeleteMapping("/nuevaspreguntas")
    public List<Map<String, Object>> borrarTrivial(@RequestBody nuevaspreguntas t) {
        jdbcTemplate.update( "truncate table nuevaspreguntas ");
        return jdbcTemplate.queryForList( "select * from nuevaspreguntas ");
    }

    @DeleteMapping("/nuevaspreguntas/{id}")
    public List<Map<String, Object>> borrarPregunta(@PathVariable Long id) {
        jdbcTemplate.update( "delete from nuevaspreguntas where id="+id);
        return jdbcTemplate.queryForList( "select * from nuevaspreguntas ");
    }



}
