import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarlateralComponent } from './navbarlateral/navbarlateral.component';
import { NavbarcentralizadoComponent } from './navbarcentralizado/navbarcentralizado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarlateralComponent,
    NavbarcentralizadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
