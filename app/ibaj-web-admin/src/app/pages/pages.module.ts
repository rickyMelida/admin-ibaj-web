import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about/about.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ArticlesComponent } from "./articles/articles.component";
import { CounselingComponent } from "./counseling/counseling.component";
import { CoverPageComponent } from "./cover-page/cover-page.component";
import { PrayerComponent } from "./prayer/prayer.component";
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../components/home/home.module';




@NgModule({
  declarations: [
    AboutComponent,
    ActivitiesComponent,
    ArticlesComponent,
    CounselingComponent,
    CoverPageComponent,
    PrayerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule
  ],
  exports: [
    AboutComponent,
    ActivitiesComponent,
    ArticlesComponent,
    CounselingComponent,
    CoverPageComponent,
    PrayerComponent,
    HomeComponent
  ]
})
export class PagesModule { }
