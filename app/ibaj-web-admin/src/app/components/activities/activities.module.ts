import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './name/name.component';
import { DescriptionComponent } from './description/description.component';
import { LocationComponent } from './location/location.component';
import { ImagesComponent } from './images/images.component';
import { MainActivitiesComponent } from './main-activities/main-activities.component';
import { IconsModule } from '../icons/icons.module';
import { DateTimeComponent } from './date-time/date-time.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    NameComponent,
    DescriptionComponent,
    LocationComponent,
    ImagesComponent,
    MainActivitiesComponent,
    DateTimeComponent,
    AddressComponent
  ],
  exports: [
    MainActivitiesComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class ActivitiesModule { }
