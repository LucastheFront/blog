import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { H1Module } from '@core/components/typography/h1/h1.component.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { NewPostDialog } from './new-post.dialog';

@NgModule({
    declarations: [NewPostDialog],
    imports: [
        CommonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        H1Module,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    exports: [NewPostDialog],
    entryComponents: [NewPostDialog]
})

export class NewPostDialogModule {}
