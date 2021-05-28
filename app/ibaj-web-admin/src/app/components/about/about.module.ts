import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { BeliefsComponent } from './beliefs/beliefs.component';
import { ConfessionOfFaithComponent } from './confession-of-faith/confession-of-faith.component';
import { ServiceHoursComponent } from './service-hours/service-hours.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { IconsModule } from 'src/app/components/icons/icons.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutUsComponent,
    MissionComponent,
    VisionComponent,
    BeliefsComponent,
    ConfessionOfFaithComponent,
    ServiceHoursComponent,
    MainAboutComponent
  ],
  exports: [
    MainAboutComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    SharedModule
  ]
})
export class AboutModule { }
