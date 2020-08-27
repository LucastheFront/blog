import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewPostDialogModule } from '@modules/home/components/new-post-dialog/new-post.dialog.module';
import { PostCardComponentModule } from '@modules/home/components/post-card/post-card.component.module';
import { H1Module } from '@core/components/typography/h1/h1.component.module';

import { LatestPostsPage } from './latest-posts.page';

@NgModule({
    declarations: [LatestPostsPage],
    imports: [
        CommonModule,
        H1Module,
        PostCardComponentModule,
        MatButtonModule,
        MatIconModule,
        NewPostDialogModule
    ],
    exports: [LatestPostsPage]
})

export class LatestPostsPageModule {}
