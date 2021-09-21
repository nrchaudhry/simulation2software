import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from 'src/app/Pages/notfound/notfound.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =
[
  {path:'',component:HomeComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'',component:DashboardComponent},
    {path:'**',component:NotfoundComponent}
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
