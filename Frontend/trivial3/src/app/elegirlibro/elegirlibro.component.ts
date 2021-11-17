import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elegirlibro',
  templateUrl: './elegirlibro.component.html',
  styleUrls: ['./elegirlibro.component.css']
})
export class ElegirlibroComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  usuario = {nombre:""};
  temas = [{ tema:"Harry Potter y la Piedra Filosofal", imagen:"assets/imgHP/harrypotter1.jpg",year:1 },
           { tema:"Harry Potter y la Cámara Secreta", imagen:"assets/imgHP/harrypotter2.jpg",year:2  },
           { tema:"Harry Potter y el Prisionero de Azkaban", imagen:"assets/imgHP/harrypotter3.jpg",year:3 },
           { tema:"Harry Potter y el Caliz de Fuego", imagen:"assets/imgHP/harrypotter4.jpg",year:4  },
           { tema:"Harry Potter y la Orden del Fenix", imagen:"assets/imgHP/harrypotter5.jpg",year:5  },
           { tema:"Harry Potter y el Misterio del Principe", imagen:"assets/imgHP/harrypotter6.jpg",year:6  },
           { tema:"Harry Potter y las Reliquias de la Muerte", imagen:"assets/imgHP/harrypotter7.jpg",year:7  },

          ];





  ngOnInit(): void {
    this.usuario.nombre=this.route.snapshot.params.nombre;

  }

}
