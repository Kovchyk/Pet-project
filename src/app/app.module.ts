import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { FirstCapitalLetterPipe } from "./firstCapitalLetter.pipe";
import { RoundNumPipe } from "./round.pipe";
import { Resolver } from "./services/resolver";
import { CityDetailsService } from "./services/city-details.service";
import { DatePipe } from "./date.pipe";
import { SelectModule } from 'angular2-select';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule, SelectModule ],
  declarations: [ AppComponent, CitiesComponent, CityDetailsComponent, FirstCapitalLetterPipe, RoundNumPipe, DatePipe ],
  bootstrap:    [ AppComponent ],
  providers:    [ CityDetailsService, Resolver ]
})
export class AppModule { }
