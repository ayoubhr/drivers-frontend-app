import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';
import { Driver, ResponseDrivers } from '../interfaces/drivers';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() drivers!: Driver[];
  @Input() grandPrix!: string;
  @Input() gps!: string[];
  aux!: string;
  false = false;
  @Output() show = new EventEmitter<boolean>();

  constructor(private driversService: DriversService, private router: Router) { }

  ngOnInit(): void {

  }

  routeToProfile(id: number) {
    this.router.navigate([`driver/${this.grandPrix}/${id}`]).then(() => {
      this.show.emit(this.false);
    })
  }
}
