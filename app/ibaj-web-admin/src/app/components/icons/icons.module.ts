import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PenFill, TrashFill, EyeFill } from 'ng-bootstrap-icons/icons';

const icons = {
  PenFill,
  TrashFill,
  EyeFill
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
