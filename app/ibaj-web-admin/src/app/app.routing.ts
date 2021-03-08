import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CoverPageComponent } from './pages/cover-page/cover-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { CounselingComponent } from './pages/counseling/counseling.component';
import { PrayerComponent } from './pages/prayer/prayer.component';
import { ArticlesComponent } from './pages/articles/articles.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cover-page', component: CoverPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'counseling', component: CounselingComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: 'articles', component: ArticlesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
