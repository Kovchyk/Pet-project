import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CityDetailsComponent } from './city-details/city-details.component';
import { CitiesComponent } from "./cities/cities.component";
import { CityDeteilsResolver } from "./services/city-details-resolver";
import { CityListResolver } from "./services/city-list-resolver";

const AppRoutes: Routes = [
    {
        path: '',
        component: CitiesComponent,
        
    },
    {
        path: 'city/:id',
        component: CityDetailsComponent,
        resolve: {
            cityDetails: CityDeteilsResolver
        }
    },
    {
        path: 'add/:id',
        redirectTo: '/city/:id', pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/', pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);