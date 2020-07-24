import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '@shared/header/header.component.module';
import { H1Module } from '@shared/typography/h1/h1.component.module';
import { HomeLayout } from './home.layout';
import { PostCardComponentModule } from '../components/post-card/post-card.component.module';

@NgModule({
    declarations: [
        HomeLayout
    ],
    imports: [
        CommonModule,
        HeaderModule,
        H1Module,
        PostCardComponentModule
    ],
    exports: []
})

export class HomeLayoutModule { }
