import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { MainCovePageComponent } from './main-cover-page/main-cover-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BackgroundsComponent, MainCovePageComponent],
  exports: [
    MainCovePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoverPageModule { }
