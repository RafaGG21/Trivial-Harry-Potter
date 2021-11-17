package entity;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;

@Entity
@Table( name = "quest")
public class quest implements java.io.Serializable{
    private int id;
    private String Pregunta;
    private String respuestaCorrecta;
    private String respuesta1;
    private String respuesta2;
    private String respuesta3;
    private String respuesta4;
    private int year;
    private int tiempo;



    public quest(int id, String Pregunta, String respuestaCorrecta, String respuesta1, String respuesta2, String respuesta3, String respuesta4,  int year,int tiempo) {
        this.id = id;
        this.Pregunta = Pregunta;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuesta1 = respuesta1;
        this.respuesta2 = respuesta2;
        this.respuesta3 = respuesta3;
        this.respuesta4 = respuesta4;
        this.year = year;
        this.tiempo=tiempo;
    }
    public quest() {

    }

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 10)
    public int getId() {return id;}
    public void setId(int id) {this.id = id; }
    @Column(name = "Pregunta", nullable = false, length = 500)
    public String getPregunta() {
        return this.Pregunta;
    }
    public void setPregunta(String Pregunta) {
        this.Pregunta = Pregunta;
    }
    @Column(name = "respuestaCorrecta", nullable = false, length = 500)
    public String getRespuestaCorrecta() {return respuestaCorrecta; }
    public void setRespuestaCorrecta(String respuestaCorrecta) { this.respuestaCorrecta = respuestaCorrecta; }
    @Column(name = "respuesta1", nullable = false, length = 500)
    public String getRespuesta1() {
        return this.respuesta1;
    }
    public void setRespuesta1(String respuesta1) { this.respuesta1 = respuesta1; }
    @Column(name = "respuesta2", nullable = false, length = 500)
    public String getRespuesta2() {
        return this.respuesta2;
    }
    public void setRespuesta2(String respuesta2) { this.respuesta2 = respuesta2; }
    @Column(name = "respuesta3", nullable = false, length = 500)
    public String getRespuesta3() {
        return this.respuesta3;
    }
    public void setRespuesta3(String respuesta3) { this.respuesta3 = respuesta3; }
    @Column(name = "respuesta4", nullable = false, length = 500)
    public String getRespuesta4() {
        return this.respuesta4;
    }
    public void setRespuesta4(String respuesta4) { this.respuesta4 = respuesta4; }
    @Column(name = "tiempo")
    public int getTiempo() {return tiempo;}
    public void setTiempo(int id) {this.tiempo = tiempo; }
}

