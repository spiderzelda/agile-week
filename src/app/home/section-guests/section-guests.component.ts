import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-guests',
    templateUrl: './section-guests.component.html',
    styleUrls: ['./section-guests.component.scss'],
})
export class SectionGuestsComponent implements OnInit {
    imageIndex: number;
    guests: any;
    pageX: number;

    constructor() {}

    ngOnInit() {
        this.guests = [
            {
                image: '/assets/img/deshy-gasca.jpg',
                talk: 'El Reto - Vegetariano... y el agilismo?',
                name: 'Deshy Gasca',
                company: 'Delivery Director, Co-partner Agile Delivery / Globant',
            },
            {
                image: '/assets/img/special-guests/Jorge_Hernan_Abad_Londono.jpg',
                talk: 'Todo lo que habías querido saber sobre Historias de Usuario y no te habías atrevido a preguntar',
                name: 'Jorge Hernan Abad',
                company: 'Regional Agile Coach, Tata Consultancy Services',
            },
            {
                image: '/assets/img/special-guests/Sergio_Andres_Riveros_Gonzalez.jpg',
                talk: 'SAFe: ¿Moda o necesidad?',
                name: 'Sergio Riveros',
                company: 'Senior Test Automation Engineer at Globant, Founder of the SergioARiveros project',
            }
        ];
        this.imageIndex = 0;
    }

    public modifyImageIndex(digit: number): void {
        let index = this.imageIndex + digit;
        if (index < 0) {
            index = this.guests.length - 1;
        }
        if (index >= this.guests.length) {
            index = 0;
        }
        this.imageIndex = index;
    }

    public touchStart(e: TouchEvent) {
        const { pageX } = e.touches[0];
        this.pageX = pageX;
    }

    public touchEnd(e: TouchEvent) {
        const { pageX } = e.changedTouches[0];
        const left = this.pageX - pageX > 0;
        this.modifyImageIndex(left ? 1 : -1);
    }
}
