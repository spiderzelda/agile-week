import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-apoio',
    templateUrl: './section-apoio.component.html',
    styleUrls: ['./section-apoio.component.scss'],
})
export class SectionApoioComponent implements OnInit {
    public voluntarios = [
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        },
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        },
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        },
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        },
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        },
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        },
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        },
        {
            name: 'John Doe',
            picture: '/assets/img/Avatar.png',
        }
    ];

    constructor() {}

    ngOnInit() {}
}
