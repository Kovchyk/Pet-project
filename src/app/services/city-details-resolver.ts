import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { FetchDataService } from "./fetchData.service";

@Injectable()
export class CityDeteilsResolver implements Resolve<any> {

  constructor(private fetchDataService: FetchDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.fetchDataService.getFiveDayForecast(route.params['id']);
  }
}