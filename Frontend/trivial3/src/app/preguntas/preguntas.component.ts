import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../services/preguntas.service';
import { ActivatedRoute } from '@angular/router';
import { ResultadosComponent } from '../resultados/resultados.component';
import Swal from 'sweetalert2';

@Component({

  selector: 'app-preguntas',

  templateUrl: './preguntas.component.html',

  styleUrls: ['./preguntas.component.css']

})

export class PreguntasComponent implements OnInit {

  tema = "";
  preguntas: any;

  preguntaActual = 0;
  year:any;
  ultimaPregunta=false;
  tiempo=0;
  respuestaMala=false;
  respuestaMala1=false;
  respuestaMala2=false;
  respuestaMala3=false;
  respuestaMala4=false;
  respuestaCorrecta=false;
  respuesta1correcta = false;
  respuesta2correcta = false;
  respuesta3correcta = false;
  respuesta4correcta = false;
  contadorAciertos=0;
  mostrarRespuestaC=false;

  usuario = {nombre:""};

  constructor(private route:ActivatedRoute,private backend:PreguntasService) { }


  ngOnInit(): void {
    this.tema = this.route.snapshot.params.tema;
    this.year = this.route.snapshot.params.year;
    this.usuario.nombre=this.route.snapshot.params.nombre;
    this.backend.getPreguntasYear(this.year).subscribe(preguntas=>{
      this.preguntas=preguntas;

      console.log(preguntas);

      setInterval(() => { this.incrementarTiempo() }, 1000);

     });
  }


  finPreguntas(){

    if(this.preguntas[this.preguntaActual]==this.preguntas.length-1){
      this.ultimaPregunta=true;
    }
  }

  comprobarRespuesta1() {

    if (this.preguntas[this.preguntaActual].respuesta1==this.preguntas[this.preguntaActual].respuestaCorrecta){

        this.respuesta1correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{
      this.preguntas[this.preguntaActual].respuesta2.disabled;
      this.respuestaMala=true;
      this.respuestaMala1=true;
      this.preguntas[this.preguntaActual].respuesta3.disabled;
      this.preguntas[this.preguntaActual].respuesta4.disabled;

    this.tiempo=this.preguntas[this.preguntaActual].tiempo;

  }
}
  comprobarRespuesta2() {

    if (this.preguntas[this.preguntaActual].respuesta2==this.preguntas[this.preguntaActual].respuestaCorrecta){

        this.respuesta2correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{

      this.preguntas[this.preguntaActual].respuesta1.disabled;
      this.respuestaMala=true;
      this.respuestaMala2=true;
      this.preguntas[this.preguntaActual].respuesta3.disabled;
      this.preguntas[this.preguntaActual].respuesta4.disabled;
    }
    this.tiempo=this.preguntas[this.preguntaActual].tiempo;

  }
  comprobarRespuesta3() {

    this.tiempo=this.preguntas[this.preguntaActual].tiempo;
    if (this.preguntas[this.preguntaActual].respuesta3==this.preguntas[this.preguntaActual].respuestaCorrecta){

        this.respuesta3correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{

      this.preguntas[this.preguntaActual].respuesta2.disabled;
      this.respuestaMala=true;
      this.respuestaMala3=true;
      this.preguntas[this.preguntaActual].respuesta1.disabled;
      this.preguntas[this.preguntaActual].respuesta4.disabled;
    }
  }
  comprobarRespuesta4() {

    if (this.preguntas[this.preguntaActual].respuesta4==this.preguntas[this.preguntaActual].respuestaCorrecta){

        this.respuesta4correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{

      this.preguntas[this.preguntaActual].respuesta2.disabled;
      this.respuestaMala=true;
      this.respuestaMala4=true;
      this.preguntas[this.preguntaActual].respuesta3.disabled;
      this.preguntas[this.preguntaActual].respuesta1.disabled;
    }
    this.tiempo=this.preguntas[this.preguntaActual].tiempo;

  }

  incrementarTiempo() {

    if (this.tiempo >= this.preguntas[this.preguntaActual].tiempo) {



      return;

    }

    this.tiempo++;

  }

  proximaPregunta() {

    this.preguntaActual++;

    this.tiempo = 0;
    this.respuestaCorrecta = false;
    this.respuestaMala=false;
    this.respuestaMala=false;
    this.respuestaMala1=false;
    this.respuestaMala2=false;
    this.respuestaMala3=false;
    this.respuestaMala4=false;
    this.respuesta1correcta = false;
    this.respuesta2correcta = false;
    this.respuesta3correcta = false;
    this.respuesta4correcta = false;
    this.mostrarRespuestaC=false;
  }

 mostrarRespuesta(){

  this.mostrarRespuestaC=true;
 }



 confirmarRespuesta1(){
  Swal.fire({
    icon: 'warning',
    title: '¿Estás seguro de que esta es la respuesta correcta?',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.comprobarRespuesta1()
    }
  });
 }
 confirmarRespuesta2(){
  Swal.fire({
    icon: 'warning',
    title: '¿Estás seguro de que esta es la respuesta correcta?',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.comprobarRespuesta2()
    }
  });
 }

 confirmarRespuesta3(){
  Swal.fire({
    icon: 'warning',
    title: '¿Estás seguro de que esta es la respuesta correcta?',
    showCancelButton: true,
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.comprobarRespuesta3()
    }
  });
 }
  confirmarRespuesta4(){
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro de que esta es la respuesta correcta?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.comprobarRespuesta4()
      }
    });







}



}







