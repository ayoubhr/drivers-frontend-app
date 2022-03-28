import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Driver, ResponseDrivers } from '../drivers/interfaces/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private api = "api";
  private ranking = 'ranking';
  private rankingGp = 'ranking-gp';
  private driver = 'driver';

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.api}/${this.ranking}`);
  }

  getDriversByRace(id: number): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.api}/${this.rankingGp}?id=${id}`);
  }

  getDriverInfo(name: string): Observable<Driver> {
    return this.http.get<Driver>(`${this.api}/${this.driver}?id=${name}`);
  }
}
