import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPostsPage } from './latest-posts.page';
import { H1Module } from '@shared/typography/h1/h1.component.module';
import { PostCardComponentModule } from '@modules/home/components/post-card/post-card.component.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [LatestPostsPage],
    imports: [
        CommonModule,
        H1Module,
        PostCardComponentModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [LatestPostsPage]
})

export class LatestPostsPageModule {}
