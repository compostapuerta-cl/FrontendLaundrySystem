import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentePruebaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'componente-prueba', component:  ComponentePruebaComponent},
      { path: '**', redirectTo: '' }
    ]),
  ]
})
export class PruebaModule { }
