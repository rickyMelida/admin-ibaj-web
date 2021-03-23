import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverImageComponent } from './cover-image/cover-image.component';
import { PrincipalVerseComponent } from './principal-verse/principal-verse.component';
import { TitleComponent } from './title/title.component';
import { AuthorComponent } from './author/author.component';
import { TextComponent } from './text/text.component';
import { ImageComponent } from './image/image.component';
import { IconsModule } from '../../icons/icons.module';
import { MainCounselingComponent } from './main-counseling/main-counseling.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CoverImageComponent,
    PrincipalVerseComponent,
    TitleComponent,
    AuthorComponent,
    TextComponent,
    ImageComponent,
    MainCounselingComponent
  ],
  exports: [
    MainCounselingComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    SharedModule
  ]
})
export class CounselingModule { }
