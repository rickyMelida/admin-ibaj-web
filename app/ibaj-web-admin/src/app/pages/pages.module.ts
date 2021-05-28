import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { AboutComponent } from "./about/about.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ArticlesComponent } from "./articles/articles.component";
import { CounselingComponent } from "./counseling/counseling.component";
import { CoverPageComponent } from "./cover-page/cover-page.component";
import { PrayerComponent } from "./prayer/prayer.component";
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../components/shared/shared.module';

// Components
import { HomeModule } from '../components/home/home.module';
import { AppRoutingModule } from '../app.routing';
import { CoverPageModule } from '../components/cover-page/cover-page.module';
import { AboutModule } from '../components/about/about.module';
import { ActivitiesModule } from '../components/activities/activities.module';
import { CounselingModule } from '../components/counseling/counseling.module';
import { PrayerModule } from '../components/prayer/prayer.module';
import { ArticlesModule } from '../components/articles/articles.module';

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
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CoverPageModule,
    AboutModule,
    ActivitiesModule,
    CounselingModule,
    PrayerModule,
    ArticlesModule
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
