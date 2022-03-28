import { Component, OnInit } from '@angular/core';
import { Driver } from './drivers/interfaces/drivers';
import { DriversService } from './services/drivers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drivers-frontend-app';

  gps: string[] = [];

  grandPrix!: string;

  drivers!: Driver[];

  show: boolean = true;

  constructor(public driversService: DriversService) { }

  ngOnInit(): void {
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
  }

  getGlobal() {
    this.driversService.getDrivers().subscribe({
      next: (e) => {
        this.drivers = e;
      },
      error: (error) => console.log(error),
      complete: () => this.grandPrix = this.gps[0]
    })
  }

  getByRace(id: number) {
    this.driversService.getDriversByRace(id).subscribe({
      next: (e) => {
        this.drivers = e;
        //console.log(this.gps.length)
      },
      error: (error) => console.log(error),
      complete: () => this.grandPrix = this.gps[id + 1]
    })
  }

  showChanged(show: boolean) {
    this.show = show;
  }
}
