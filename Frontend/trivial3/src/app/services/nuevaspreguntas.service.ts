import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NuevaspreguntasService {

  constructor(private http:HttpClient) { }



  postNuevasPreguntas(preguntas:any){
    return this.http.post("http://localhost:8080/nuevaspreguntas",preguntas);
  }
}
