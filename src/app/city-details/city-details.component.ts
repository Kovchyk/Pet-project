import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetchData.service';
import { ActivatedRoute } from "@angular/router";
import { CityDetailsService } from "../services/city-details.service";
import { Resolver } from "../services/resolver";
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'cityDetails',
  templateUrl: 'city-details.component.html',
  styleUrls: ['city-details.component.css'],
})

export class CityDetailsComponent implements OnInit{ 
  days: any;
  id: number;
  cityName: string;
  cityDetails: any;

  constructor(private fetchDataService: FetchDataService, 
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

    ngOnInit() {
      this.activatedRoute.data.subscribe(data => {
          this.cityDetails = data['cityDetails'];
          this.id = this.cityDetails.city.id;
          this.fetchDataService.addCity(this.id);
          let storedCityInfo = localStorage.getItem(this.id + '');

          if (storedCityInfo) {
            console.log("Cashe");
            let storedCityArray = JSON.parse(storedCityInfo);
            this.days = storedCityArray.list;
            this.cityName = storedCityArray.city.name;
          } else {
            console.log("GET");
            localStorage.setItem(this.id + '', JSON.stringify(this.cityDetails));
            this.days = this.cityDetails.list;
            this.cityName = this.cityDetails.city.name;
          }
      });

    }

    backToCities() {
      this.location.back();
    }
}
