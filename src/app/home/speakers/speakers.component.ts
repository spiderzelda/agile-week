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
                name: 'John Doe',
                picture: '../../../../assets/img/Avatar.png',
                bio: `Ingeniero de Sistemas y de Computación, Master en Sistemas y de Computación y Doctor en Sistemas y de Computación.
                    Le gustan los gatos.`,
            },
            {
                name: 'John Doe',
                picture: '../../../../assets/img/Avatar.png',
                bio: `Ingeniero de Sistemas y de Computación, Master en Sistemas y de Computación y Doctor en Sistemas y de Computación.
                    Le gustan los gatos.`,
            },
            {
                name: 'John Doe',
                picture: '../../../../assets/img/Avatar.png',
                bio: `Ingeniero de Sistemas y de Computación, Master en Sistemas y de Computación y Doctor en Sistemas y de Computación.
                    Le gustan los gatos.`,
            },
            {
                name: 'John Doe',
                picture: '../../../../assets/img/Avatar.png',
                bio: `Ingeniero de Sistemas y de Computación, Master en Sistemas y de Computación y Doctor en Sistemas y de Computación.
                    Le gustan los gatos.`,
            },
            {
                name: 'John Doe',
                picture: '../../../../assets/img/Avatar.png',
                bio: `Ingeniero de Sistemas y de Computación, Master en Sistemas y de Computación y Doctor en Sistemas y de Computación.
                    Le gustan los gatos.`,
            },
            {
                name: 'John Doe',
                picture: '../../../../assets/img/Avatar.png',
                bio: `Ingeniero de Sistemas y de Computación, Master en Sistemas y de Computación y Doctor en Sistemas y de Computación.
                    Le gustan los gatos.`,
            },
        ];
    }
}
