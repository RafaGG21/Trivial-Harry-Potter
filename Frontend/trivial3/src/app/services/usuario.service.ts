import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  getUsuario(){

    return this.http.get("http://localhost:8080/usuario");
  }

  postUsuario(usuario:any){
    return this.http.post("http://localhost:8080/usuario",usuario);
  }
}
