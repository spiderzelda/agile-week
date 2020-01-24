import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
    schedule: any = {};
    scheduleBog: any = {};
    selectedDay = 'miercoles';
    objectKeys = Object.keys;
    constructor() {}

    ngOnInit() {
        this.schedule =this.scheduleBog = {
            miercoles: {
                day: 'miercoles',
                date: 'Miércoles 19 de Febrero',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '5:00 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Flash talk 1',
                        subtitle: '',
                        date: '5:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Flash talk 2',
                        subtitle: '',
                        date: '5:50 PM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '6:10 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Charla invitado',
                        subtitle: '',
                        date: '6:30 PM',
                    }
                ],
            },
            jueves: {
                day: 'jueves',
                date: 'Jueves 20 de Febrero',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '5:00 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Flash talk 3',
                        subtitle: '',
                        date: '5:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Flash talk 4',
                        subtitle: '',
                        date: '5:50 PM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '6:10 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Charla invitado',
                        subtitle: '',
                        date: '6:30 PM',
                    }
                ],
            },
            viernes: {
                day: 'viernes',
                date: 'Viernes 21 de Febrero',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '5:00 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Flash talk 5',
                        subtitle: '',
                        date: '5:30 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Flash talk 6',
                        subtitle: '',
                        date: '5:50 PM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '6:10 PM',
                    },
                    {
                        type: 'talk',
                        title: 'Charla invitado',
                        subtitle: '',
                        date: '6:30 PM',
                    },
                    {
                        type: 'break',
                        title: 'After y 🍻',
                        subtitle: '',
                        date: '7:30 PM',
                    }
                ],
            },
            sabado: {
                day: 'sabado',
                date: 'Sábado 22 de Febrero',
                events: [
                    {
                        type: 'talk',
                        title: 'Registro de asistentes',
                        subtitle: '',
                        date: '8:00 AM',
                    },
                    {
                        type: 'talk',
                        title: 'Workshop: Track A',
                        subtitle: '',
                        date: '8:30 AM',
                    },
                    {
                        type: 'talk',
                        title: 'Workshop: Track B',
                        subtitle: '',
                        date: '8:30 AM',
                    },
                    {
                        type: 'break',
                        title:'Cierre',
                        subtitle: '',
                        date: '12:30 PM',
                    },
                ],
            },
        };
    }
}
