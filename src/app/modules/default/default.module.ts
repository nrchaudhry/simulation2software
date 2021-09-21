import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';



@NgModule({

  imports: [
    DefaultRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule
    ],
    declarations: [
DefaultComponent
    ]
})
export class DefaultModule {

  constructor(){
    console.log("admin module is loaded");
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }
 }
