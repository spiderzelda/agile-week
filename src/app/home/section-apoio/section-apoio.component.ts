import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-apoio',
    templateUrl: './section-apoio.component.html',
    styleUrls: ['./section-apoio.component.scss'],
})
export class SectionApoioComponent implements OnInit {
    public voluntarios = [
        {
            name: 'Juanita Ramirez',
            picture: '/assets/img/Juanita.jpg',
        },
        {
            name: 'Sebastian Silva',
            picture: '/assets/img/sebastian-silva.jpg',
        },
        {
            name: 'Juan Camilo Rodriguez',
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
            name: 'Andres Gonzalez',
            picture: '/assets/img/andres-gonzalez.jpg',
        }
    ];

    constructor() {}

    ngOnInit() {}
}
