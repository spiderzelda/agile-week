import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-apoio',
    templateUrl: './section-apoio.component.html',
    styleUrls: ['./section-apoio.component.scss'],
})
export class SectionApoioComponent implements OnInit {
    public voluntarios = [
        {
            name: 'Juanita Ramírez',
            picture: '/assets/img/Juanita.jpg',
        },
        {
            name: 'Sebastián Silva',
            picture: '/assets/img/sebastian-silva.jpg',
        },
        {
            name: 'Juan Camilo Rodríguez',
            picture: '/assets/img/juan-camilo-rodriguez.png',
        },
        {
            name: 'Ana López',
            picture: '/assets/img/ana-lopez.png',
        },
        {
            name: 'Camilo Cubaque',
            picture: '/assets/img/camilo-cubaque.png',
        },
        {
            name: 'Andrés Gonzalez',
            picture: '/assets/img/andres-gonzalez.jpg',
        },
        {
            name: 'Angélica Rengifo',
            picture: '/assets/img/angelica-rengifo.png',
        },
        {
            name: 'Claudia Huertas',
            picture: '/assets/img/claudia-huertas.jpg',
        },
        {
            name: 'Deshy Gasca',
            picture: '/assets/img/deshy-gasca.jpg',
        },
        {
            name: 'Didier Valencia',
            picture: '/assets/img/didier-valencia.jpg',
        },
        {
            name: 'Diego Palacios',
            picture: '/assets/img/diego-palacios.jpg',
        },
        {
            name: 'Fernando Ardila',
            picture: '/assets/img/fernando-ardila.png',
        },
        {
            name: 'Frederick Gutiérrez',
            picture: '/assets/img/frederick-gutierrez.jpg',
        },
        {
            name: 'Jose Contreras',
            picture: '/assets/img/jose-contreras.jpg',
        },
        {
            name: 'Juan Córdoba',
            picture: '/assets/img/juan-cordoba.jpg',
        },
        {
            name: 'Marcela Vergara',
            picture: '/assets/img/marcela-vergara.jpeg',
        },
        {
            name: 'Nohora Mondragón',
            picture: '/assets/img/nohora-mondragon.JPG',
        },
        {
            name: 'Oscar Chavarría',
            picture: '/assets/img/oscar-chavarria.JPG',
        },
        {
            name: 'César Romero',
            picture: '/assets/img/cesar_romero.png',
        },
        {
            name: 'Denise Villamil',
            picture: '/assets/img/denise_villamil.png',
        },
        {
            name: 'Jorge Teyssandier',
            picture: '/assets/img/jorge_teyssandier.png',
        },
        {
            name: 'Pablo Bumaschny',
            picture: '/assets/img/pablo_bumaschny.jpg',
        },
        {
            name: 'Rodrigo Alvarez',
            picture: '/assets/img/rodrigo_alvarez.jpg',
        },
        {
            name: 'Sebastián Gomez',
            picture: '/assets/img/sebastian_gomez.jpg',
        }
    ];

    constructor() {}

    ngOnInit() {}
}
