import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component:  LoginComponent},
      { path: '**', redirectTo: '' }
    ]),
  ]
})
export class LoginModule { }
