import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {
  productos = [
    { id: 1, nombre: 'Power Creatine Monohid Pure Wellness X 250 Gr', descripcion: 'Suplemento dietario.', img: 'https://farmacityar.vtexassets.com/arquivos/ids/254556-800-auto?v=638494949183430000&width=800&height=auto&aspect=true', precio:  17340},
    { id: 2, nombre: 'Combo Suplemento Dietario AMPK Choco x 506 g x 3 un', descripcion: 'Suplemento dietario AMPK', img: 'https://farmacityar.vtexassets.com/arquivos/ids/208112-800-auto?v=637503972188770000&width=800&height=auto&aspect=true', precio: 86625 },
    { id: 3, nombre: 'Combo Satial food en polvo 50 gr x 3 un', descripcion: 'Componente activo. Sin TACC', img: 'https://farmacityar.vtexassets.com/arquivos/ids/187553-800-auto?v=637009684106770000&width=800&height=auto&aspect=true', precio: 65251 },
    { id: 4, nombre: 'Suplemento Dietario MSMartro x 60 un', descripcion: 'MSM original. Ayuda contra el dolor e inflamación articular.', img: 'https://farmacityar.vtexassets.com/arquivos/ids/250566-800-auto?v=638385248753770000&width=800&height=auto&aspect=true', precio: 8250 },
    { id: 5, nombre: 'Barra Protéica Pure Wellness Sabor Cookies and Cream x 46 g', descripcion: 'Barritas proteicas', img: 'https://farmacityar.vtexassets.com/arquivos/ids/249565-800-auto?v=638362761999800000&width=800&height=auto&aspect=true', precio: 2500 },
    { id: 6, nombre: 'Chicles Ice Breakers Icecubes Artic Grape x 40 un', descripcion: 'Chicles sin azucar', img: 'https://farmacityar.vtexassets.com/arquivos/ids/266087-800-auto?v=638792930007170000&width=800&height=auto&aspect=true', precio: 10500 },
    { id: 7, nombre: 'Tableta Chocolate Hersheys Dark 73% Cacao x 85 g', descripcion: 'Chocolate súper cremoso con leche crujiente', img: 'https://farmacityar.vtexassets.com/arquivos/ids/212718-800-auto?v=637623891942800000&width=800&height=auto&aspect=true', precio: 5500 },
    { id: 8, nombre: 'Kit Aveno Hidratación + Protección Corporal Emulsión x 250 ml', descripcion: 'Emulsion, protege, calma y alivia', img: 'https://farmacityar.vtexassets.com/arquivos/ids/260670-800-auto?v=638629745480300000&width=800&height=auto&aspect=true', precio: 39168 },
    { id: 9, nombre: 'Leche Infantil en Polvo Nutrilon 3 Pouch x 1,2 kg', descripcion: 'Leche modificada en polvo con prebioticos', img: 'https://farmacityar.vtexassets.com/arquivos/ids/246006-800-auto?v=638283955042430000&width=800&height=auto&aspect=true', precio: 27669 },
    { id: 10, nombre: 'Pañales Huggies Ultraconfort', descripcion: 'Proteccion para bebés, trajes de baño descartable', img: 'https://farmacityar.vtexassets.com/arquivos/ids/247342-600-auto?v=638313373600930000&width=600&height=auto&aspect=true', precio: 28558 },
    { id: 11, nombre: 'Café en Cápsulas Bonafide Espresso x 10 un', descripcion: 'Tostado tipo italiano, amaderado con nota de chocolate', img: 'https://farmacityar.vtexassets.com/arquivos/ids/258106-800-auto?v=638560605569330000&width=800&height=auto&aspect=true', precio: 12805 },
    { id: 12, nombre: 'Miel Líquida Nat x 500 g', descripcion: 'Miel liquida, libre de gluten Sin TACC', img: 'https://farmacityar.vtexassets.com/arquivos/ids/246030-800-auto?v=638283977190400000&width=800&height=auto&aspect=true', precio: 4105 },
  ];

  carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    const index = this.carrito.findIndex(item => item.nombre === producto.nombre);
    if (index > -1) {
      this.carrito[index].cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 }); // Incluye la imagen automáticamente
    }
  }
  

  eliminarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  incrementarCantidad(index: number) {
    this.carrito[index].cantidad += 1;
  }

  decrementarCantidad(index: number) {
    if (this.carrito[index].cantidad > 1) {
      this.carrito[index].cantidad -= 1;
    } else {
      this.eliminarDelCarrito(index);
    }
  }

  calcularTotal(): number {
    return this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

}
