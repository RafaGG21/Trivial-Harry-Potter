package models.dto;



    public class questDTO implements java.io.Serializable {
        private int id;
        private String Pregunta;
        private String respuestaCorrecta;
        private String respuesta1;
        private String respuesta2;
        private String respuesta3;
        private String respuesta4;
        private int year;
        private int tiempo;

        public questDTO(int id, String Pregunta, String respuestaCorrecta, String respuesta1, String respuesta2, String respuesta3, String respuesta4, int year,int tiempo) {
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

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getPregunta() {
            return Pregunta;
        }

        public void setPregunta(String pregunta) {
            Pregunta = pregunta;
        }

        public String getRespuestaCorrecta() {
            return respuestaCorrecta;
        }

        public void setRespuestaCorrecta(String respuestaCorrecta) {
            this.respuestaCorrecta = respuestaCorrecta;
        }

        public String getRespuesta1() {
            return respuesta1;
        }

        public void setRespuesta1(String respuesta1) {
            this.respuesta1 = respuesta1;
        }

        public String getRespuesta2() {
            return respuesta2;
        }

        public void setRespuesta2(String respuesta2) {
            this.respuesta2 = respuesta2;
        }

        public String getRespuesta3() {
            return respuesta3;
        }

        public void setRespuesta3(String respuesta3) {
            this.respuesta3 = respuesta3;
        }

        public String getRespuesta4() {
            return respuesta4;
        }

        public void setRespuesta4(String respuesta4) {
            this.respuesta4 = respuesta4;
        }

        public int getYear() {
            return year;
        }

        public void setYear(int year) {
            this.year = year;
        }

        public int getTiempo() {
            return tiempo;
        }

        public void setTiempo(int tiempo) {
            this.tiempo = tiempo;
        }
    }
