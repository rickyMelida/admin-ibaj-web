import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorComponent } from "./author/author.component";
import { CoverImageComponent } from "./cover-image/cover-image.component";
import { ImageComponent } from "./image/image.component";
import { TextComponent } from "./text/text.component";
import { TitleComponent } from "./title/title.component";

import { SharedModule } from '../shared.module';
import { IconsModule } from '../../icons/icons.module';

@NgModule({
  declarations: [
    AuthorComponent,
    CoverImageComponent,
    ImageComponent,
    TextComponent,
    TitleComponent
  ],
  exports: [
    AuthorComponent,
    CoverImageComponent,
    ImageComponent,
    TextComponent,
    TitleComponent
  ],
  imports: [
    IconsModule
  ]
})

export class ArticlesModule { }
