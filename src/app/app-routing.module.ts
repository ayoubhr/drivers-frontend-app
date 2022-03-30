import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverProfileRoutingModule } from './driver-profile/driver-profile-routing.module';
import { DriversRoutingModule } from './drivers/drivers-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ranking',
    pathMatch: 'full',
  },
  {
    path: 'ranking',
    loadChildren: () => import('./drivers/drivers.module').then((e) => e.DriversModule),
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver-profile/driver-profile.module').then((e) => e.DriverProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DriverProfileRoutingModule, DriversRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
