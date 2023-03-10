import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Modules
import { PagesModule } from './pages/pages.module';
import { RouterLink, RouterModule } from '@angular/router';

//Components

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterLink,
    PagesModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
