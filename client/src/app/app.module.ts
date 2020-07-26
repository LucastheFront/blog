import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app.routes';
import { BaseHttpService } from '@core/api/base-http.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    /*
     * Keep RouterModule the last of imports
     * to make sure the routes are well handled.
     */
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [BaseHttpService],
  bootstrap: [AppComponent],
})

export class AppModule { }
