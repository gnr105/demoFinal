import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Inscripcion } from '../../../models/inscripcion';
import { InscripcionService } from '../../../services/inscripcion-service';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'app-punto5',
  imports: [CommonModule, ReactiveFormsModule, NgbCarouselModule],
  templateUrl: './punto5.html',
  styleUrl: './punto5.css',
})
export class Punto5 implements OnInit, AfterViewInit {
  inscripcionForm!: FormGroup;
  precioFinal: number | null = null;
  inscripciones: Inscripcion[] = [];
  dtInitialized = false;

  constructor(private fb: FormBuilder, private inscripcionService: InscripcionService) {}

  ngOnInit(): void {
    this.inscripcionForm = this.fb.group({
      dni: ['', Validators.required],
      categoriaAlumno: ['', Validators.required],
      precioBase: [null, [Validators.required, Validators.min(0)]], // Nuevo campo
      fechaInscripcion: [new Date().toISOString().substring(0, 10), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
    });
    
    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  calcularPrecio() {
    const pBase = this.inscripcionForm.value.precioBase;
    const cat = this.inscripcionForm.value.categoriaAlumno;

    if (pBase !== null && cat) {
      const monto = parseFloat(pBase);
      switch (+cat) {
        case 1: this.precioFinal = monto * 0.65; break; // 35% desc
        case 2: this.precioFinal = monto * 0.50; break; // 50% desc
        case 3: this.precioFinal = monto; break;        // Sin desc
        default: this.precioFinal = monto;
      }
    } else {
      this.precioFinal = null;
    }
  }

  registrarInscripcion() {
    if (this.inscripcionForm.valid && this.precioFinal !== null) {
      const formVal = this.inscripcionForm.value;
      
      const nuevaInscripcion: Inscripcion = {
        ...formVal,
        precio: formVal.precioBase, // Guardamos el precio que ingresaste
        curso: +formVal.curso,
        categoriaAlumno: +formVal.categoriaAlumno,
        precioFinal: this.precioFinal
      };

      this.inscripcionService.addInscripcion(nuevaInscripcion);
      this.inscripciones = this.inscripcionService.getInscripciones();
      
      // Reset pero mantenemos la fecha de hoy
      this.inscripcionForm.reset({ 
        fechaInscripcion: new Date().toISOString().substring(0, 10) 
      });
      this.precioFinal = null;

      this.refreshTable();
    }
  }

  // Lógica de DataTable limpia
  initDataTable() {
    if (this.inscripciones.length > 0) {
      setTimeout(() => {
        $('#miTabla').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          destroy: true, // Permite reinicializar sin errores
          language: { url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json' }
        });
        this.dtInitialized = true;
      }, 0);
    }
  }

  refreshTable() {
    if ($.fn.DataTable.isDataTable('#miTabla')) {
      $('#miTabla').DataTable().destroy();
    }
    this.initDataTable();
  }

}
