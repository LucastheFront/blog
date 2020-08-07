import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostDetailComponent } from './post-detail.component';

@NgModule({
    declarations: [PostDetailComponent],
    imports: [
        CommonModule,
    ],
    exports: [PostDetailComponent]
})

export class PostDetailComponentModule {}
