export class InstanciaMaquinaVirtual {
  nombreRecurso: string = '';
  alias: string = '';
  dominioWeb: string = '';
  sistemaOperativo: string = '';
  capacidadDisco: number = 0;
  capacidadRam: number = 0;
  fechaCopiaSeguridad: Date = new Date();

  constructor(nombreRecurso: string,
    alias: string,
    dominioWeb: string,
    sistemaOperativo: string,
    capacidadDisco: number,
    capacidadRam: number,
    fechaCopiaSeguridad: Date) {
    this.nombreRecurso = nombreRecurso;
    this.alias = alias;
    this.dominioWeb = dominioWeb;
    this.sistemaOperativo = sistemaOperativo;
    this.capacidadDisco = capacidadDisco;
    this.capacidadRam = capacidadRam;
    this.fechaCopiaSeguridad = fechaCopiaSeguridad;
    }

  mostrarDetalles() {
    console.log(this);
  }
}
