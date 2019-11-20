import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
    speakers = [];
    selectedSpeaker;

    ngOnInit() {
        this.speakers = [
            {
                name: 'Juan Camilo Rodríguez',
                picture: '../../../../assets/img/juan-camilo-rodriguez.png',
                bio: `Ingeniero de Sistemas y Computación egresado de la universidad del Quindío
                Msc. en Software Libre. Amante de la buena mesa, deportes y ex jugador de Bolos.`,
            },
            {
                name: 'Leidy Gómez',
                picture: '../../../../assets/img/speakers/leidy-gomez.jpg',
                bio: `Ingeniera Informática certificada en Agile Testing, Testing Level Foundation ISTQB y Scrum Master Certified. Me gusta pasar tiempo con mi familia, bailar y ver Formula 1`,
            },
            {
                name: 'Gustavo Peña',
                picture: '../../../../assets/img/speakers/gustavo-pena.jpg',
                bio: `Business Analyst, MSc en Ingeniería de la Información.  CSM Certificado. Me gusta viajar a festivales de música y conocer el mundo. Me encantan los perros, el cine y hacer cocteles.`,
            },
            {
                name: 'Luz Rozo',
                picture: '../../../../assets/img/speakers/luz-rozo.jpg',
                bio: `Business Analyst,Ing en Telecomunicaciones, esp. Admin Financiera, PO and Scrum Master certified, CRM, CBS certified. Conocimientos en requerimientos y pruebas. Disfruto los viajes y deportes extremos`,
            },
            {
                name: 'Jeid Vásquez',
                picture: '../../../../assets/img/speakers/jeid-vasquez.png',
                bio: `Agile Coah, Ingeniero Industrial y músico, con 11 años de experiencia en la coordinación de equipos de trabajo y ejecución de proyectos en diferentes sectores de la industria. Me interesa llevar la experiencia adquirida a charlas, talleres y conferencias.`,
            },
            {
                name: 'Juan José Molina',
                picture: '../../../../assets/img/speakers/juan-jose-molina.jpg',
                bio: `Scrum Master y Agilista apasionado con 4 años de experiencia en proyectos tipo banca, seguros, mercado eléctrico y comercio. Aplicación de Agilismo con Scrum, Scrumban, SAFe y Kanban.`,
            },
            {
                name: 'Paula Mazo',
                picture: '../../../../assets/img/speakers/paula-mazo.jpg',
                bio: `Conocida como "Mazo" desde el colegio. Ha trabajado en las áreas de Infraestructura, DevOps y en los últimos dos años en desarrollo .
                Web UI Developer en Globant, amante de Javascript y el clean code... Si le queda tiempo en el sprint.`,
            },
            {
                name: 'Juan José Muñoz',
                picture: '../../../../assets/img/speakers/juan-jose-munoz.png',
                bio: `Ingeniero de Electrónico egresado de la Universidad del Quindío Msc. en Gestión de proyectos de software. Generalista, Agilista y de vez en cuando desarrollador, pero sobre todo: un Gamer.`,
            },
            {
                name: 'Gabriel Martínez',
                picture: '../../../../assets/img/speakers/gabriel-martinez.jpg',
                bio: `Technical Director con experiencia en la industria del turismo, accesibilidad y pre-sales. Amplio conocimiento en desarrollos basados en componentes y mentalidad ágil.`,
            },
            {
                name: 'Ricardo Alfonso Samudio',
                picture: '../../../../assets/img/speakers/ricardo-alfonso-samudio.jpg',
                bio: `Certificaciones Scrum Master Certified, ISTQB y Agile Testing. Cuento con más de 7 años de experiencia en calidad de software, líder de los procesos de calidad para Southwest Airlines por 4 años y focal point del área de mantenimiento.`,
            },
            {
                name: 'Luis Miguel Gonzáles',
                picture: '../../../../assets/img/speakers/luis-miguel-gonzales.jpg',
                bio: `Ingeniero electrónico, consultor, instructor ágil. Llevo cinco años recorriendo la agilidad desde varias visiones como desarrollador, scrum master o apoyando organizaciones.`,
            },
            {
                name: 'Luis Alveart',
                picture: '../../../../assets/img/speakers/luis-alveart.jpg',
                bio: `Diseñador de UX con experiencia en arquitectura de la información y usabilidad. Me apasiona el Design Thinking y el Diseño centrado en el usuario.`,
            },
            {
                name: 'Mario Monsalve',
                picture: '../../../../assets/img/speakers/mario-monsalve.jpg',
                bio: `En la comunidad Agile soy Scrum Master de la Scrum Alliance, y SAFe Practitioner. Creo que el mindset es el corazón de cualquier framework y que mantener una mente abierta es una de las claves para adaptarse.`,
            },
            {
                name: 'Sonia Viviana Luna',
                picture: '../../../../assets/img/speakers/sonia-luna.jpg',
                bio: `Business Analyst, Ingeniería de Sistemas.Especialista en Project Management. CSM Certificada. SAFe practitioner certified. Me gusta ir a conciertos y viajar.`,
            },
            {
                name: 'Claudia Toscano',
                picture: '../../../../assets/img/speakers/claudia-toscano.jpg',
                bio: `5 años como mamá, 5 años como Agilista, 5 años de ver el mundo laboral como un lugar que necesita evolucionar y que podemos impactar positivamente si nos mantenemos en guardia`,
            },
            {
                name: 'Diana Jimenez',
                picture: '../../../../assets/img/speakers/diana-jimenez.jpg',
                bio: `Ingeniera de sistemas con especialización en gerencia de proyectos. Vibro con la agilidad y la posibilidad de apoyar a otras personas a encontrar ese ritmo y sincronía que los lleve a lograr grandes resultados.`,
            },
            {
                name: 'Carlos Andrés Serna',
                picture: '../../../../assets/img/speakers/carlos-andres-serna.jpg',
                bio: `Llevo 5 años incursionando en la agilidad tanto dentro de la organización como en las comunidades. Soy un apasionado por lo que hago, pero a su vez crítico y con ganas de mejorar cada día.`,
            },
            {
                name: 'Rose Restrepo',
                picture: '../../../../assets/img/speakers/rose-restrepo.jpg',
                bio: `Agile Coach, Trainer and Change Agent | EPM | Chaos Monkey`,
            },
            {
                name: 'Juan David Barrera',
                picture: '../../../../assets/img/speakers/juan-david-barrera.jpg',
                bio: `Ing. Informático, Agile Coach y Facilitador de equipos en Pragma SA. Me apasiona aprender, enseñar y compartir conocimientos.`,
            },
            {
                name: 'Juan Felipe Cubillos',
                picture: '../../../../assets/img/speakers/juan-felipe-cubillos.jpg',
                bio: `Psicólogo con maestría en Psicología organizacional y del marketing de la Universitá Cattolica del Sacro Cuore (Milán). Trabajo en acompañamiento de Change Management en implementaciones de tecnologías Cloud.`,
            },
            {
                name: 'Juan Sebastián Urbina',
                picture: '../../../../assets/img/speakers/sebastian-urbina.jpg',
                bio: `Psicólogo con énfasis en investigación de mercado. Apasionado por la innovación y la generación de conocimiento a través de procesos de prototipado a partir de metodologías como Design Thinking, Scrum y Kanban.`,
            }
        ];
    }
}
