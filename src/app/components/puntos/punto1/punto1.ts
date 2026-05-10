import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-punto1',
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
   noticias = [
    {
      titulo: 'River Plate gana el Mundial de Clubes ante Boca',
      descripcion: 'El Millonario se consagra Super Campeon del Mundo luego de ganar EL CLASICO. Vapuleo a Boca desde el primer minuto con Goles de Mastantuono y Messi',
      imagen: 'https://media.puntal.com.ar/p/6eb98d99c03d564141b575ab77b9021f/adjuntos/270/imagenes/001/586/0001586442/1200x0/smart/river-1jpg.jpg'
    },
    {
      titulo: 'Un Lobo que pica en punta por Jujuy',
      descripcion: 'Gimnasia de Jujuy unico puntero del campeonato, le ganó el clasico de Lobos al Mendocino con suma categoria de Local. Despues de 11 años logró la cima del campeonato.',
      imagen: 'https://media.jujuyalmomento.com/p/2874025c4357c54a08005201bc28f426/adjuntos/260/imagenes/002/239/0002239701/1200x0/smart/fotojet-76jpg.jpg'
    },
    {
      titulo: 'Una Estrella más para Argentina',
      descripcion: 'Por segundo año consecutivo el Mejor Jugador del Mundo, Lionel Andres Messi se corono Bicampeon del Mundo y es el Dios de Dioses en el Futbol y deporte Moderno',
      imagen: 'https://nuevaregion.com/wp-content/uploads/2022/12/20221218-ARGENTINA-CAMPEON-DEL-MUNDO-MUNDIAL-2022-QATAR.jpg'
    }
  ];

}
