import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Inscripcion } from '../../../models/inscripcion';
import { InscripcionService } from '../../../services/inscripcion-service';

declare var $: any;


@Component({
  selector: 'app-punto4',
  imports: [CommonModule, ReactiveFormsModule, NgbCarouselModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css',
})
export class Punto4 implements OnInit, AfterViewInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
	inscripcionForm!: FormGroup;
  precioFinal: number | null = null;
  inscripciones: Inscripcion[] = [];
  dtInitialized = false;

  // En tu archivo punto4.ts
images = [
  { 
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop', 
    title: 'Programación Avanzada', 
    desc: 'Domina los lenguajes más demandados.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', 
    title: 'Ciberseguridad', 
    desc: 'Protege la infraestructura digital.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', 
    title: 'Hardware y Redes', 
    desc: 'Infraestructura de alto rendimiento.' 
  }
];

  // Definición de precios por ID de curso
  preciosCursos: any = {
    '1': 300000, // Data Science
    '2': 300000, // Ciberseguridad
    '3': 600000,  // Marketing Digital
    '4': 200000, // Cloud
    '5': 450000, // Programación
    '6': 500000  // IA
  };

  constructor(private fb: FormBuilder, private inscripcionService: InscripcionService, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.inscripcionForm = this.fb.group({
      dni: ['', Validators.required],
      categoriaAlumno: ['', Validators.required],
      fechaInscripcion: [new Date(), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  initDataTable() {
    if (!this.dtInitialized && this.inscripciones.length > 0) {
      setTimeout(() => {
        $('#miTabla').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          responsive: true,
          language: {
            url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
          }
        });
        this.dtInitialized = true;
      }, 0);
    }
  }

  calcularPrecio() {
    const cursoId = this.inscripcionForm.value.curso;
    const categoria = this.inscripcionForm.value.categoriaAlumno;

    if (cursoId && categoria) {
      const precioBase = this.preciosCursos[cursoId];
      switch (+categoria) {
        case 1: this.precioFinal = precioBase - (precioBase * 0.35); break;
        case 2: this.precioFinal = precioBase - (precioBase * 0.5); break;
        case 3: this.precioFinal = precioBase; break;
        default: this.precioFinal = precioBase; break;
      }
    } else {
      this.precioFinal = null;
    }
  }

  registrarInscripcion() {
    if (this.inscripcionForm.valid && this.precioFinal !== null) {
      const cursoId = this.inscripcionForm.value.curso;
      const inscripcion: Inscripcion = {
        ...this.inscripcionForm.value,
        precio: this.preciosCursos[cursoId],
        curso: +cursoId,
        categoriaAlumno: +this.inscripcionForm.value.categoriaAlumno,
        precioFinal: this.precioFinal
      };
      this.inscripcionService.addInscripcion(inscripcion);
      this.inscripciones = this.inscripcionService.getInscripciones();
      this.inscripcionForm.reset({ fechaInscripcion: new Date() });
      this.precioFinal = null;

      // 🔁 Reinicializamos la DataTable
      if (this.dtInitialized) {
        $('#miTabla').DataTable().destroy();
        this.dtInitialized = false;
      }
      this.initDataTable();
    }
  }
}
