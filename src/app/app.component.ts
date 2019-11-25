import { Component } from '@angular/core';
import { Loscarros } from './modelos.producto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desarrollando-Angular';
  carros = ['Abarth 124 Spider', 'Audi A1', 'Bentley Continental GT'];
  imgCarros: Loscarros [] = [ {
    id: '1', image: 'assets/imagenes/Abarth.jfif',
    title: 'auto de Abarth',
    price: 30000,
    description: 'Modelo color blanco'
   },
   {
     id: '2',
     image: 'assets/imagenes/audi.jfif',
     title: 'auto de audi',
     price: 10000,
     description: 'Modelo color amarillo'
   },
   {
     id: '3',
     image: 'assets/imagenes/Bentley.jfif',
     title: 'auto de Bentley',
     price: 120000,
     description: 'Modelo color gris'
   }
 ];
  addCarros() {
    this.carros.push('Nuevo carro'); }

  deleteCarros(index: number) {
    this.carros.splice(index, 1);
  }

}
