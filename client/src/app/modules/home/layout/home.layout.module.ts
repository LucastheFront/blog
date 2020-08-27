import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@core/components/header/header.component.module';
import { HomeLayout } from './home.layout';
import { LatestPostsPageModule } from '@modules/home/pages/latest-posts/latest-posts.page.module';

@NgModule({
    declarations: [
        HomeLayout
    ],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        LatestPostsPageModule
    ],
    exports: []
})

export class HomeLayoutModule { }
