import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalVerseComponent } from './principal-verse/principal-verse.component';
import { IconsModule } from '../icons/icons.module';
import { MainCounselingComponent } from './main-counseling/main-counseling.component';
import { SharedModule } from '../shared/shared.module';
import { ArticlesModule } from '../shared/articles/articles.module';



@NgModule({
  declarations: [
    PrincipalVerseComponent,
    MainCounselingComponent
  ],
  exports: [
    MainCounselingComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    SharedModule,
    ArticlesModule
  ]
})
export class CounselingModule { }
