import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public borradohero: string = '';
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  borrarHeroe() {
    const hero = this.heroes.shift() || '';
    this.borradohero = hero;
  }
}
