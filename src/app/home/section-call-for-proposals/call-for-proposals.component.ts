import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "call-for-proposals",
    templateUrl: "./call-for-proposals.component.html",
    styleUrls: ["./call-for-proposals.component.scss"]
})
export class CallForProposalsComponent implements OnInit {
    public limit: Date;

    constructor() {
        this.limit = new Date(2019, 7, 2, 23, 59, 0);
    }

    ngOnInit() {}
}
