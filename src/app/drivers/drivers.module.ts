import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
  ],
  exports: [
    MainPageComponent
  ]
})
export class DriversModule { }
