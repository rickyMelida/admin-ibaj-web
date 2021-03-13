import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccessWithoutLoginComponent } from './access-without-login/access-without-login.component';
import { CommentsComponent } from './comments/comments.component';
import { MenuComponent } from "./menu/menu.component";
import { TitlesComponent } from './titles/titles.component';
import { VersesComponent } from './verses/verses.component';
import { AppRoutingModule } from '../app.routing';
import { LoginComponent } from './login/login.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    AccessWithoutLoginComponent,
    CommentsComponent,
    LoginComponent,
    MenuComponent,
    TitlesComponent,
    VersesComponent
  ],
  exports: [
    AccessWithoutLoginComponent,
    CommentsComponent,
    LoginComponent,
    MenuComponent,
    TitlesComponent,
    VersesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class SharedModule { }
