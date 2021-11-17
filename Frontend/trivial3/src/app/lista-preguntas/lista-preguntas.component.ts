import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevotrivialService } from '../services/nuevotrivial.service';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css'],
})
export class ListaPreguntasComponent implements OnInit {
  preguntas: any;

  usuario: any;
  nuevaspreguntas: any;
  constructor(
    private backend: NuevotrivialService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.backend.getNuevoTrivial().subscribe((nuevaspreguntas) => {
      this.nuevaspreguntas = nuevaspreguntas;
      console.log(nuevaspreguntas);
    });
  }
  deleteNuevaPregunta(id: number) {
    this.backend.deleteNuevaPregunta(id).subscribe((nuevaspreguntas) => {
      this.nuevaspreguntas = nuevaspreguntas;
      console.log(nuevaspreguntas);
    });
  }

  confirmar(id: number){

    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro de que deseas borrar esta pregunta?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteNuevaPregunta(id)
      }
    });
  }

}
