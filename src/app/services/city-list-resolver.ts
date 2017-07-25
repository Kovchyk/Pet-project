import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CitiesListService } from "../services/cities-list.service";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CityListResolver implements Resolve<any> {

  constructor(private citiesListService: CitiesListService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.citiesListService.fetchCitiesList();
  }
}