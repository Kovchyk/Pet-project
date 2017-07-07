import {Injectable} from '@angular/core';
import {Component} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()

export class CityDetailsService {
    
    apiKey: string = 'e4a01aeef0993c451f22d98569c8e243';

    constructor(private http: Http) { }

    getFiveDayForecast(id: number) {
       return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=' + id + '&cnt=5&units=metric&APPID=' + this.apiKey).map(res => res.json());
    }
    
}