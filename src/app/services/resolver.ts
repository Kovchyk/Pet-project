import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CityDetailsService } from "../services/city-details.service";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Resolver implements Resolve<any> {

  constructor(private cityDetailsService: CityDetailsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.cityDetailsService.getFiveDayForecast(route.params['id']);
  }
}