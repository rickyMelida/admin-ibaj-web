import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AccessWithoutLoginComponent } from './access-without-login/access-without-login.component';
import { CommentsComponent } from './comments/comments.component';
import { MenuComponent } from "./menu/menu.component";
import { TitlesComponent } from './titles/titles.component';
import { VersesComponent } from './verses/verses.component';



@NgModule({
  declarations: [
    AccessWithoutLoginComponent,
    CommentsComponent,
    MenuComponent,
    TitlesComponent,
    VersesComponent
  ],
  exports: [
    AccessWithoutLoginComponent,
    CommentsComponent,
    MenuComponent,
    TitlesComponent,
    VersesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
