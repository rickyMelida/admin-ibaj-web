import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CounselingComponent } from './components/counseling/counseling.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MenuComponent } from './components/menu/menu.component';
import { CoverPrayerComponent } from './pages/cover-prayer/cover-prayer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CoverPageComponent,
    AboutComponent,
    ActivitiesComponent,
    CounselingComponent,
    PrayerComponent,
    ArticlesComponent,
    MenuComponent,
    CoverPrayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
