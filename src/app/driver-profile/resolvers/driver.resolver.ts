import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { Driver, Races } from 'src/app/drivers/interfaces/drivers';
import { DriversService } from 'src/app/services/drivers.service';

@Injectable({
  providedIn: 'root'
})
export class DriverResolver implements Resolve<Driver> {

  grandPrix!: any;
  gps: string[] = [];
  driver!: Driver[];
  drivers!: Driver[];

  constructor(private rt: ActivatedRoute, private driversService: DriversService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Driver> {
    this.gps.push("Global");
    this.gps.push("GP Barein");
    this.gps.push("GP Portugal");
    this.gps.push("GP Spain");
    this.gps.push("GP Monaco");
    this.gps.push("GP Italy");
    this.gps.push("GP Singapore");
    this.gps.push("GP Japan");
    this.gps.push("GP USA");
    this.gps.push("GP Australia");
    this.gps.push("GP Abu dabi");
    const id = +route.params['id'];
    this.rt.paramMap.subscribe(params => {
      let route = params.get('route');
      this.grandPrix = route;
    })
    if (this.grandPrix === "Global") {
      this.driversService.getDrivers().subscribe({
        next: (ds) => this.drivers = ds,
        error: e => console.log(e),
        complete: () => {
          return this.driversService.getDriverInfo(this.drivers[id].name).subscribe({
            next: (d) => this.driver = Object.values(d),
            error: (e) => console.log(e),
            complete: () => console.log(this.driver)
          })
        }
      })
    } else {
      for (let i = 1; i < 12; i++) {
        if (this.gps[i] === this.grandPrix) {
          this.driversService.getDriversByRace(i - 1).subscribe({
            next: (ds) => this.drivers = ds,
            error: e => console.log(e),
            complete: () => {
              return this.driversService.getDriverInfo(this.drivers[id].name).subscribe({
                next: (d) => this.driver = Object.values(d),
                error: (e) => console.log(e),
                complete: () => console.log(this.driver)
              })
            }
          })
        }
      }
    }
    return EMPTY;
  }
}
