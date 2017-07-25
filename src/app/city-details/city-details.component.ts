import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetchData.service';
import { ActivatedRoute } from "@angular/router";
import { CityDeteilsResolver } from "../services/city-details-resolver";
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'city-details',
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
              private router: Router) { }

    ngOnInit() {
      this.activatedRoute.data.subscribe(data => {
          this.cityDetails = data['cityDetails'];
          this.id = this.cityDetails.city.id;
          this.addCity(this.id);
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

    addCity(id: number) {
      return this.fetchDataService.addCity(id);
    }

    backToCities() {
      this.router.navigate(['/']);
    }
}