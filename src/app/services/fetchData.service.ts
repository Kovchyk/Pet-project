import {Injectable} from '@angular/core';
import {Component, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { CityDetailsService } from "./city-details.service";

@Injectable()

export class FetchDataService {

    public cities = new BehaviorSubject([]);
    private date = new Subject();
    private apiKey: string = 'e4a01aeef0993c451f22d98569c8e243';
    private subscription: Subscription;

    constructor(private http: Http, private cityDetailService: CityDetailsService) {
        this.refreshItems();
    }
    
    getDataFromServer(id: number) {
         return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=' + id + '&units=metric&APPID=' + this.apiKey)
                             .map(res => res.json());
    }

    getCitiesFromLocalStorage() {
        return JSON.parse(localStorage.getItem("storedCities"));
    }
    
    saveCitiesInLocalStorage(array: any) {
        localStorage.setItem("storedCities", JSON.stringify(array));
    }

    addCity(id: number) {
        if (id) {
            let array = this.getCitiesFromLocalStorage();
            // if localStorage is empty declare an array
            if (array === null) {
                array = [];
            }
            /*
            let isMatch = false;
            //check if id is in the array
            array.forEach((element: any) => {
                if (element.id == id) {
                    isMatch = true;
                }
            });
*/
            if (!array.some((val: any) => { val.id == id;} )) {
                this.getDataFromServer(id).subscribe(data => {
                    array.unshift(data);
                    this.saveCitiesInLocalStorage(array);
                    this.cities.next(JSON.parse(localStorage.getItem("storedCities")));
                });
            }
        }
    }

    init() {
        return JSON.parse(localStorage.getItem("storedCities"));
    }

    getCities() {
        return this.cities;
    }

    getDate() {
        return this.date;
    }

    deleteItem(id:number) {
        let array = this.getCitiesFromLocalStorage();
        // if localStorage is empty declare an array
        if (array === null) {
            array = [];
        }

        array.forEach((element: any, index: number) => {
            if (element.id == id) {
                array.splice(index, 1);
                this.saveCitiesInLocalStorage(array);
                this.cities.next(JSON.parse(localStorage.getItem("storedCities")));
                //delete detail info from Local Storage
                localStorage.removeItem(id + '');
            } 
        });

    }

    refreshItems() {

        let timer = Observable.timer(0, 600000);
        // if timer has already run than stop it before running it again
        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        this.subscription = timer.subscribe(x => {
            this.updateLastRefreshingDate();
            this.getNewDataFromServer();
        });

    }

    getNewDataFromServer() {
        let array = this.getCitiesFromLocalStorage();
        // if localStorage is empty declare an array
        if (array === null) {
            array = [];
        }

        let ids: string = "";

        if (array.length) {
            // Get ids as a string to pass it to a request
            let ids = array.map((el: any) => el.id).join(',');

            array.forEach( (element: any) => {
                this.updateCityDetails(element.id);
            });

            this.updateLastRefreshingDate();
            let groupAnswer =  this.http.get('http://api.openweathermap.org/data/2.5/group?id=' + ids + '&units=metric&APPID=' + this.apiKey).map(res => res.json());
            
            groupAnswer.subscribe(array => {
                this.saveCitiesInLocalStorage(array.list);
                this.cities.next(JSON.parse(localStorage.getItem("storedCities")));
            });
        }
        console.log("Up");
    }

    updateCityDetails(id: number) {

        let cityDetails = this.cityDetailService.getFiveDayForecast(id);
        cityDetails.subscribe(details => {
            localStorage.setItem(details.city.id, JSON.stringify(details));
        });

    }

    updateLastRefreshingDate() {
        let date = new Date().getTime();
        localStorage.setItem('lastDate', JSON.stringify(date));
        let upadatedDate = localStorage.getItem('lastDate');
        this.date.next(upadatedDate);
    }

}