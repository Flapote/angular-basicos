import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;



    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
        //lo de arriba y lo de abajo es lo mismo
        // return this.nombre + ' - ' + this.edad.toString();
    }

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 30;
    }
}