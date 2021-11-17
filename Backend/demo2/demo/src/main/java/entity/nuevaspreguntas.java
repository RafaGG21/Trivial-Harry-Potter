package entity;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;

@Entity
@Table( name = "nuevaspreguntas")
public class nuevaspreguntas implements java.io.Serializable{

    private String pregunta;
    private String respuestacorrecta;
    private String respuesta1;
    private String respuesta2;
    private String respuesta3;
    private String respuesta4;
    private int id;

    public nuevaspreguntas(String pregunta, String respuestacorrecta, String respuesta1, String respuesta2, String respuesta3, String respuesta4, int id) {
        this.pregunta = pregunta;
        this.respuestacorrecta = respuestacorrecta;
        this.respuesta1 = respuesta1;
        this.respuesta2 = respuesta2;
        this.respuesta3 = respuesta3;
        this.respuesta4 = respuesta4;
        this.id = id;
    }

    public nuevaspreguntas()  {

    }

    @Id
    @Column(name = "id", unique = true, nullable = false, length = 10)
    public int getId() {return this.id;}
    public void setId(int id) {this.id = id; }
    @Column(name = "pregunta", nullable = false, length = 500)
    public String getPregunta() {
        return this.pregunta;
    }
    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }



    @Column(name = "respuestacorrecta", nullable = false, length = 500)
    public String getRespuestacorrecta() { return respuestacorrecta; }
    public void setRespuestacorrecta(String respuestacorrecta) { this.respuestacorrecta = respuestacorrecta; }

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
}
