import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaPreguntasComponent } from './lista-preguntas/lista-preguntas.component';
import { IndiceComponent } from './indice/indice.component';
import { RouterModule, Router, Route } from '@angular/router';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ResultadosComponent } from './resultados/resultados.component';
import { NuevaspreguntasComponent } from './nuevaspreguntas/nuevaspreguntas.component';
import { NuevotrivialComponent } from './nuevotrivial/nuevotrivial.component';
import { ElegirlibroComponent } from './elegirlibro/elegirlibro.component';



const APP_ROUTES: Route[] = [

  { path: 'indice', component: IndiceComponent},
  { path: 'elegirlibro/:nombre', component: ElegirlibroComponent},
  { path: 'listapreguntas/:nombre', component: ListaPreguntasComponent},
  { path: 'nuevaspreguntas/:nombre', component: NuevaspreguntasComponent},
  { path: 'preguntas/:tema/:year/:nombre', component: PreguntasComponent},
  { path: 'nuevotrivial/:nombre', component: NuevotrivialComponent},
  { path: '', redirectTo: '/indice', pathMatch: 'full' },
  { path: 'resultados/:contadorAciertos/:nombre', component: ResultadosComponent},
  { path: '**', redirectTo: '/indice', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    ListaPreguntasComponent,
    IndiceComponent,
    PreguntasComponent,
    ResultadosComponent,
     NuevaspreguntasComponent,
     NuevotrivialComponent,
     ElegirlibroComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
