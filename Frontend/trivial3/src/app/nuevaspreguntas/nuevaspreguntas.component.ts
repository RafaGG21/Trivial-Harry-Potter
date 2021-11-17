import { Component, OnInit } from '@angular/core';
import { NuevaspreguntasService } from '../services/nuevaspreguntas.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevaspreguntas',
  templateUrl: './nuevaspreguntas.component.html',
  styleUrls: ['./nuevaspreguntas.component.css']
})
export class NuevaspreguntasComponent implements OnInit {

  constructor(private back:NuevaspreguntasService,private route:ActivatedRoute) { }
  usuario = {nombre:""};
  nuevaspreguntas = {pregunta:"",respuestacorrecta:"",respuesta1:"",respuesta2:"",respuesta3:"",respuesta4:""};
  ngOnInit(): void {
    this.usuario.nombre=this.route.snapshot.params.nombre;
  }

  confirmar(){
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro de que deseas registrar esta pregunta?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postNuevasPreguntas()
      }
    });
   }

  postNuevasPreguntas(){
    this.back.postNuevasPreguntas(this.nuevaspreguntas).subscribe((user) => {

      console.log(this.nuevaspreguntas);

    })

  }
}
