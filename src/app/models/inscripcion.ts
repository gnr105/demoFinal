export class Inscripcion {
    dni: string = '';
    precio: number = 0;
    categoriaAlumno: number = 0; // Coincide con el nombre usado en punto4.ts
    fechaInscripcion: Date = new Date();
    email: string = '';
    curso: number = 0;
    precioFinal: number = 0;

    constructor(dni?: string, precio?: number, categoriaAlumno?: number, fechaInscripcion?: Date, email?: string, curso?: number, precioFinal?: number) {
        if (dni) this.dni = dni;
        if (precio) this.precio = precio;
        if (categoriaAlumno) this.categoriaAlumno = categoriaAlumno;
        if (fechaInscripcion) this.fechaInscripcion = fechaInscripcion;
        if (email) this.email = email;
        if (curso) this.curso = curso;
        if (precioFinal) this.precioFinal = precioFinal;
    }
}
