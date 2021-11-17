import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';

@Component({

  selector: 'app-indice',

  templateUrl: './indice.component.html',

  styleUrls: ['./indice.component.css']

})

export class IndiceComponent implements OnInit {




  constructor(private back:UsuarioService) { }



  ngOnInit(): void {


  }
  title = 'formularios';
  usuario = {nombre:""};
  aparecer=false;


  postUsuario() {

    this.back.postUsuario(this.usuario).subscribe((datos) => {

      console.log(this.usuario);

    })
    alert("Usuario registrado correctamente");

  }

  confirmar(){

    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro de que deseas registrarte con estos datos?',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postUsuario()
        this.aparecer=true;
      }
    });
  }



}







