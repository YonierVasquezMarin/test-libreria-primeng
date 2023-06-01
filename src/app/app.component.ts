import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreRecurso: string = '';
  alias: string = '';
  dominioWeb: string = '';
  sistemaOperativo: string = '';
  capacidadDisco: number = 0;
  capacidadRam: number = 0;
  fechaCopiaSeguridad: Date = new Date();
}
