import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http:HttpClient) { }
  getPreguntas(){

    return this.http.get("http://localhost:8080/trivial");
  }

  getPreguntasYear(year:number){

    return this.http.get("http://localhost:8080/trivial/"+year);
  }


}
