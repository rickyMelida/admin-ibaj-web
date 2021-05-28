import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainArticlesComponent } from './main-articles/main-articles.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainArticlesComponent,
  ],
  exports: [
    MainArticlesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ArticlesModule { }
