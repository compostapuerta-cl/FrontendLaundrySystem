import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: 'prueba',
        loadChildren: () => import('./views/pages/prueba/prueba.module').then(m => m.PruebaModule)

      },{
        path: 'login',
        loadChildren: () => import('./views/pages/login/login.module').then(m => m.LoginModule)
      },
       {
         path: 'homelaundry',
         loadChildren: () => import('./views/pages/homelaundry/homelaundry.module').then(m => m.HomelaundryModule)
       },

     
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      // {path: '**', redirectTo: '/error/404'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
