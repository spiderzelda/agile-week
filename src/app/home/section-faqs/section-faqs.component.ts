import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-section-faqs',
    templateUrl: './section-faqs.component.html',
    styleUrls: ['./section-faqs.component.scss'],
})
export class SectionFaqsComponent implements OnInit {
    imageIndex: number;
    guests: any;
    pageX: number;
    panelOpenState = false;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {}

    trust(url: string): any {
        return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
    }
}
