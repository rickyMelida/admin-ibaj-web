import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverImagesComponent } from './cover-images/cover-images.component';
import { MainPrayerComponent } from './main-prayer/main-prayer.component';
import { PrincipalVerseComponent } from './principal-verse/principal-verse.component';
import { PrincipalTextComponent } from './principal-text/principal-text.component';
import { PrayerMotivesComponent } from './prayer-motives/prayer-motives.component';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CoverImagesComponent,
    MainPrayerComponent,
    PrincipalVerseComponent,
    PrincipalTextComponent,
    PrayerMotivesComponent
  ],
  exports: [
    MainPrayerComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    SharedModule
  ]
})
export class PrayerModule { }
