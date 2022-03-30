import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverProfileRoutingModule } from './driver-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DriverProfileRoutingModule,
    HttpClientModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class DriverProfileModule { }
