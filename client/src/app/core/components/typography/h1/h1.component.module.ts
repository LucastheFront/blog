import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H1Component } from './h1.component';

@NgModule({
    declarations: [
        H1Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        H1Component
    ]
})
export class H1Module { }
