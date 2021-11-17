import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NuevotrivialService {

  constructor(private http:HttpClient) { }
  getNuevoTrivial(){

    return this.http.get("http://localhost:8080/nuevaspreguntas");
  }
  deleteNuevaPregunta(id:number){
    return this.http.delete("http://localhost:8080/nuevaspreguntas/"+id);
  }
  deleteNuevasPreguntas(){
    return this.http.delete("http://localhost:8080/nuevaspreguntas");
  }

}
