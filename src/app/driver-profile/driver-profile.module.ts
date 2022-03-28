import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverProfileRoutingModule } from './driver-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AppModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { DriverResolver } from './resolvers/driver.resolver';


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
