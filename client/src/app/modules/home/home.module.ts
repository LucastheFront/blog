import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { HomeLayoutModule } from './layout/home.layout.module';
import { PostDetailComponentModule } from './components/post-detail/post-detail.component.module';

@NgModule({
    imports: [
        RouterModule.forChild(HOME_ROUTES),
        HomeLayoutModule,
        PostDetailComponentModule
    ]
})
export class HomeModule { }
