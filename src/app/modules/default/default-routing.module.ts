import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from 'src/app/Pages/notfound/notfound.component';
import { DefaultComponent } from './default.component';
import { LoginComponent } from 'src/app/Pages/login/login.component';

const routes: Routes =
[
  {path:'',component:DefaultComponent,
   children:[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent}
            ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
