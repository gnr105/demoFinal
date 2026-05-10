import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CardData {
  imageUrl: string;
  title: string;
  description: string;
  redirectUrl: string;
  buttonText?: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  cards: CardData[] = [
    {
      imageUrl: 'https://www.infobae.com/resizer/v2/YTHTXLZVN5CT5K2PX6UREH5SCM.jpg?auth=8ce06fe634702ed25c3ba96fac8d53cae1cf07c119b01576a625433566fe5446&smart=true&width=577&height=325&quality=85',
      title: 'NOTICIAS DEPORTIVAS',
      description: 'Todas las noticias actualizadas de Deportes a nivel Mundial',
      redirectUrl: '/punto1',
      buttonText: 'Ir a Noticias'
    },
    {
      imageUrl: 'https://cdn.forbes.com.mx/2023/11/7-eleven-640x360.webp',
      title: 'TIENDA EN LINEA',
      description: 'Descrubrí nuestra Tienda online, con las mejores promociones para todo el mundo.',
      redirectUrl: '/punto2',
      buttonText: 'Ir a la Tienda'
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1430264812/es/foto/grupo-de-personas-mayores-felices-divirti%C3%A9ndose-mientras-juegan-a-las-cartas-en-casa.jpg?s=1024x1024&w=is&k=20&c=_T1h7Np4yzq2XXtqU_oCoMhKGNUA8G9OKN8AkIIyB6A=',
      title: 'LA MEMORIA',
      description: 'Jugá y divertite con el mejor juego de la historia',
      redirectUrl: '/punto3',
      buttonText: 'Ir al juego'
    },
    {
      imageUrl: 'https://cdn.prod.website-files.com/63b4671ba9a3410b46ee0c05/67be020916dc4f5a1d11436c_curso-ciberseguridad-online-gratis-eccouncil.jpeg',
      title: 'CURSOS ONLINE',
      description: 'Inscribir a nuestros cursos exclusivos para residentes Argentinos ¡Sé el primero en conocerla!',
      redirectUrl: '/punto4',
      buttonText: 'Ir a Cursos'
    }
  ];

  constructor() { }

}
