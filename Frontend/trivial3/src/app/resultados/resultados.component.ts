import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../services/usuario.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {



  constructor(private backend:UsuarioService,private route:ActivatedRoute) { }
  contadorAciertos=0;
  usuario = {nombre:""};
  calificacion="";
  ngOnInit(): void {
    this.usuario.nombre=this.route.snapshot.params.nombre;
    this.contadorAciertos=+this.route.snapshot.params.contadorAciertos;
    this.backend.getUsuario().subscribe(usuarios=>{


      console.log(usuarios);

    });

  }
  calificar(){

    if(this.contadorAciertos < 3){
      this.calificacion="Desastroso. Debes volver a ver las películas. Pareces un muggle."
    }
    else if(this.contadorAciertos < 5){
      this.calificacion="Insuficiente. Quizás esta noche es un buen momento para repasar la película."
    }
    else if(this.contadorAciertos < 8){
      this.calificacion="Supera las expectativas. Muy bien, eres un buen fan. "
    }
    else if(this.contadorAciertos < 10){
      this.calificacion="Extraordinario. Hermione Granger estaría orgullosa de ti.  "
    }



  }

}
