import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PenFill, TrashFill } from 'ng-bootstrap-icons/icons';

const icons = {
  PenFill,
  TrashFill
};


@NgModule({
  declarations: [],
  exports: [
    BootstrapIconsModule
  ],
  imports: [
    BootstrapIconsModule.pick(icons),
    CommonModule
  ]
})
export class IconsModule { }
