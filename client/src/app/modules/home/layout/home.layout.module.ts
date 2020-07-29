import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '@shared/header/header.component.module';
import { HomeLayout } from './home.layout';
import { LatestPostsPageModule } from '@modules/home/pages/latest-posts/latest-posts.page.module';

@NgModule({
    declarations: [
        HomeLayout
    ],
    imports: [
        CommonModule,
        HeaderModule,
        LatestPostsPageModule
    ],
    exports: []
})

export class HomeLayoutModule { }
