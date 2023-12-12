import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: '', component: HomeComponent, pathMatch: 'full' },
      // { path: 'homelaundry', component:  NavbarComponent},
      { path: '**', redirectTo: '' }
    ]),
  ]
})
export class HomelaundryModule { }
