import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  private inscripciones: Inscripcion[] = [];

  constructor() { }

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  addInscripcion(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
  }

  clearInscripciones() {
    this.inscripciones = [];
  }
}
