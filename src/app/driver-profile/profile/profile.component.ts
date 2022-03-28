import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/drivers/interfaces/drivers';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Output() show = new EventEmitter<boolean>();
  grandPrix!: any;
  gps: string[] = [];
  true = true;
  driver!: Driver[];
  drivers!: Driver[];
  loop: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private driversService: DriversService, private router: Router, private route: ActivatedRoute) { }

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

    const id = +this.route.snapshot.params['id'];
    this.route.paramMap.subscribe(params => {
      let route = params.get('route');
      this.grandPrix = route;
    })

    //console.log(this.grandPrix);

    try {
      if (this.grandPrix === "Global") {
        this.driversService.getDrivers().subscribe({
          next: (ds) => this.drivers = ds,
          error: e => console.log(e),
          complete: async () => {
            this.driversService.getDriverInfo(this.drivers[id].name).subscribe({
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
              complete: async () => {
                this.driversService.getDriverInfo(this.drivers[id].name).subscribe({
                  next: (d) => this.driver = Object.values(d),
                  error: (e) => console.log(e),
                  complete: () => console.log(this.driver)
                })
              }
            })
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  goBack() {
    this.router.navigate(['ranking']).then(() => {
      this.show.emit(this.true);
      window.location.reload();
    })
  }
}
