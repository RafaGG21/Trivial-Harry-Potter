import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevotrivialService } from '../services/nuevotrivial.service';

@Component({
  selector: 'app-nuevotrivial',
  templateUrl: './nuevotrivial.component.html',
  styleUrls: ['./nuevotrivial.component.css']
})
export class NuevotrivialComponent implements OnInit {

  constructor(private route:ActivatedRoute,private backend:NuevotrivialService) { }

  nuevaspreguntas:any;
  nuevaPreguntaActual=0;
  tiempo=0;
  ultimaPregunta=false;
  respuestaMala=false;
  respuestaCorrecta=false;
  respuesta1correcta = false;
  respuesta2correcta = false;
  respuesta3correcta = false;
  respuesta4correcta = false;
  contadorAciertos=0;
  mostrarRespuestaC=false;
  usuario = {nombre:""};

  ngOnInit(): void {
    this.usuario.nombre=this.route.snapshot.params.nombre;

    this.backend.getNuevoTrivial().subscribe(nuevaspreguntas=>{
    this.nuevaspreguntas=nuevaspreguntas;
    console.log(nuevaspreguntas);

    setInterval(() => { this.incrementarTiempo() }, 1000);

   });
  }

  incrementarTiempo() {

    if (this.tiempo >= 30) {



      return;

    }

    this.tiempo++;

  }
  finPreguntas(){

    if(this.nuevaspreguntas[this.nuevaPreguntaActual]==this.nuevaspreguntas.length-1){
      this.ultimaPregunta=true;
    }
  }

  comprobarRespuesta1() {

    if (this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta1==this.nuevaspreguntas[this.nuevaPreguntaActual].respuestacorrecta){

        this.respuesta1correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{
      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta2.disabled;
      this.respuestaMala=true;

      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta3.disabled;
      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta4.disabled;

      this.tiempo=30;

  }
}
  comprobarRespuesta2() {

    if (this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta2==this.nuevaspreguntas[this.nuevaPreguntaActual].respuestacorrecta){

        this.respuesta2correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{

      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta1.disabled;
      this.respuestaMala=true;

      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta3.disabled;
      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta4.disabled;
    }
    this.tiempo=30;

  }
  comprobarRespuesta3() {

    this.tiempo=30;
    if (this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta3==this.nuevaspreguntas[this.nuevaPreguntaActual].respuestacorrecta){

        this.respuesta3correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{

      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta2.disabled;
      this.respuestaMala=true;

      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta1.disabled;
      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta4.disabled;
    }
  }
  comprobarRespuesta4() {

    if (this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta4==this.nuevaspreguntas[this.nuevaPreguntaActual].respuestacorrecta){

        this.respuesta4correcta=true;
        this.contadorAciertos++;
        this.respuestaCorrecta=true;
    }
    else{

      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta2.disabled;
      this.respuestaMala=true;

      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta3.disabled;
      this.nuevaspreguntas[this.nuevaPreguntaActual].respuesta1.disabled;
    }
    this.tiempo=30;

  }
  mostrarRespuesta(){

    this.mostrarRespuestaC=true;
  }




  proximaPregunta() {

    this.nuevaPreguntaActual++;

    this.tiempo = 0;
    this.respuestaCorrecta = false;
    this.respuestaMala=false;

    this.respuesta1correcta = false;
    this.respuesta2correcta = false;
    this.respuesta3correcta = false;
    this.respuesta4correcta = false;
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
