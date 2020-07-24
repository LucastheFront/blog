import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        PostCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule
    ],
    exports: [
        PostCardComponent
    ]
})
export class PostCardComponentModule { }
