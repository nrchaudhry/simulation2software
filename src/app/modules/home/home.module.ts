import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({

  imports: [
    HomeRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent
  ]
})

export class HomeModule {

  constructor() {
    console.log("admin module is loaded");
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }
}
