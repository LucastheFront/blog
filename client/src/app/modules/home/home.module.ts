import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { HomeLayoutModule } from './layout/home.layout.module';

@NgModule({
    imports: [
        RouterModule.forChild(HOME_ROUTES),
        HomeLayoutModule
    ]
})
export class HomeModule { }
