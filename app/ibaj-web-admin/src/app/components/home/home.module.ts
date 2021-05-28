import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'src/app/app.routing';



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
