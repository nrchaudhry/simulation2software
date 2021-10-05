import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // {path:'salesorders',loadChildren: () => import('./modules/salesorders/salesorders.module').then(m => m.SalesordersModule)},
  {path:'home',loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'main', component: MainComponent},
  {path:'',loadChildren: () => import('./modules/default/default.module').then(m => m.DefaultModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
