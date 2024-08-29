import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent,BienvenidoComponent, ErrorComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){

  }

  edadUno : string = '';
  edadDos : string = '';
  promedio : number = 0;
  suma : number = 0;

  sumarEdades():number{
    let num_uno = parseFloat(this.edadUno);
    let num_dos = parseFloat(this.edadDos);


    if (!isNaN(num_uno) && !isNaN(num_dos)) {
      this.suma = num_uno + num_dos;
    } else {
      this.suma = 0;
      alert("Por favor, ingrese numeros que sean válidos");
    }
    return this.suma;
  }

  promediarEdades():number{
    this.promedio = this.sumarEdades() / 2;
    return this.promedio;
  }

  limpiarInput(){
    this.edadUno = '';
    this.edadDos = '';
    this.promedio = 0;
    this.suma = 0;
  }

}
