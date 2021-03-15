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
import { SeparateSeccionWhithTitleComponent } from './separate-seccion-whith-title/separate-seccion-whith-title.component';
import { ServicesOfMinistryComponent } from './services-of-ministry/services-of-ministry.component';
import { DateComponent } from './date/date.component';



@NgModule({
  declarations: [
    AccessWithoutLoginComponent,
    CommentsComponent,
    LoginComponent,
    MenuComponent,
    TitlesComponent,
    VersesComponent,
    SeparateSeccionWhithTitleComponent,
    ServicesOfMinistryComponent,
    DateComponent
  ],
  exports: [
    AccessWithoutLoginComponent,
    CommentsComponent,
    LoginComponent,
    MenuComponent,
    TitlesComponent,
    VersesComponent,
    SeparateSeccionWhithTitleComponent,
    DateComponent
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
