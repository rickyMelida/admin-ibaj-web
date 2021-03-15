import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './name/name.component';
import { DescriptionComponent } from './description/description.component';
import { LocationComponent } from './location/location.component';
import { ImagesComponent } from './images/images.component';
import { MainActivitiesComponent } from './main-activities/main-activities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [
    NameComponent,
    DescriptionComponent,
    LocationComponent,
    ImagesComponent,
    MainActivitiesComponent
  ],
  exports: [
    MainActivitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IconsModule
  ]
})
export class ActivitiesModule { }
