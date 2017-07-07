import { Component } from '@angular/core';
import { FetchDataService } from '../services/fetchData.service';
import { OnInit } from '@angular/core';
import { CitiesListService } from "../services/cities-list.service";
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'cities',
  templateUrl: 'cities.component.html',
  styleUrls: ['cities.component.css']
})

export class CitiesComponent implements OnInit { 
  private cities: any;
  private id: number;
  private date: any;
  private lists: any;
  options: Array<any> = [];
  myPlaceholderText: string = 'Select a city';
  mySelectValue: Array<string>; // Array of strings for multi select, string for single select.

  constructor(private fetchDataService: FetchDataService, private router: Router, private citiesListService: CitiesListService) { }

  ngOnInit() { 
    this.date = localStorage.getItem('lastDate');
    this.fetchDataService.refreshItems();
    this.cities = this.fetchDataService.init();
    this.getDate();
    this.getCities();
    this.lists = this.citiesListService.citiesList;
    

    this.lists.map((val: any) => {
      this.options.push({value: val.id, label: val.name})
    });
    
  }

  goToDetails() {
    
    if (this.mySelectValue) {
      this.router.navigate(['/add', this.mySelectValue]);
    }

  }

  getDate() {
    this.fetchDataService.getDate().subscribe(date => {
      this.date = date; 
    });
  }
  
  getCities() {
    this.fetchDataService.getCities().subscribe(cities => {
      this.cities = cities;
    });

  }
  
  deleteItem(id:number) {
    this.fetchDataService.deleteItem(id);
  }

  refreshAllbyButton() {
    this.fetchDataService.getNewDataFromServer(); 
  }

}