import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { InstanciaMaquinaVirtual } from './models/instancia-maquina-virtual';

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

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

  crearInstancia() {
    const nuevaInstanciaMaquinaVirtual = new InstanciaMaquinaVirtual(
      this.nombreRecurso,
      this.alias,
      this.dominioWeb,
      this.sistemaOperativo,
      this.capacidadDisco,
      this.capacidadRam,
      this.fechaCopiaSeguridad
    );
    nuevaInstanciaMaquinaVirtual.mostrarDetalles();
  }
}
