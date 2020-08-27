import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bg-h1',
    template: `<h1 class="h1"><ng-content></ng-content></h1>`,
    styleUrls: ['./h1.component.scss'],
})

export class H1Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
