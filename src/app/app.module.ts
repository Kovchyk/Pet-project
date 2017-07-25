import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { SelectModule } from 'angular2-select';

import { AppComponent }  from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';

import { FirstCapitalLetterPipe } from "./pipes/firstCapitalLetter.pipe";
import { RoundNumPipe } from "./pipes/round.pipe";
import { DatePipe } from "./pipes/date.pipe";

import { CityDeteilsResolver } from "./services/city-details-resolver";
import { CityListResolver } from "./services/city-list-resolver";

import { FetchDataService } from './services/fetchData.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule, SelectModule ],
  declarations: [ AppComponent, CitiesComponent, CityDetailsComponent, FirstCapitalLetterPipe, RoundNumPipe, DatePipe ],
  bootstrap:    [ AppComponent ],
  providers:    [ FetchDataService, CityDeteilsResolver, CityListResolver ]
})
export class AppModule { }