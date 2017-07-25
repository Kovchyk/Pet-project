import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CityListResolver } from "../services/city-list-resolver";

@Injectable()

export class CitiesListService {

    constructor(private http: Http) { }

    fetchCitiesList() {
        return this.http.get('app/list.json').map(res => res.json());
    }

    citiesList = [
    {
        "id": 384848,
        "name": "Qarah Gawl al ‘Ulyā",
        "country": "IQ",
        "coord": {
        "lon": 45.6325,
        "lat": 35.353889
        }
    },
    {
        "id": 569143,
        "name": "Cherkizovo",
        "country": "RU",
        "coord": {
        "lon": 37.728889,
        "lat": 55.800835
        }
    },
    {
        "id": 713514,
        "name": "Alupka",
        "country": "UA",
        "coord": {
        "lon": 34.049999,
        "lat": 44.416668
        }
    },
    {
        "id": 2878044,
        "name": "Lichtenrade",
        "country": "DE",
        "coord": {
        "lon": 13.40637,
        "lat": 52.398441
        }
    },
    {
        "id": 464176,
        "name": "Zavety Il’icha",
        "country": "RU",
        "coord": {
        "lon": 37.849998,
        "lat": 56.049999
        }
    },
    {
        "id": 295582,
        "name": "‘Azriqam",
        "country": "IL",
        "coord": {
        "lon": 34.700001,
        "lat": 31.75
        }
    },
    {
        "id": 1271231,
        "name": "Ghūra",
        "country": "IN",
        "coord": {
        "lon": 79.883331,
        "lat": 24.766666
        }
    },
    {
        "id": 690856,
        "name": "Tyuzler",
        "country": "UA",
        "coord": {
        "lon": 34.083332,
        "lat": 44.466667
        }
    },
    {
        "id": 464737,
        "name": "Zaponor’ye",
        "country": "RU",
        "coord": {
        "lon": 38.861942,
        "lat": 55.639999
        }
    },
    {
        "id": 707716,
        "name": "Il’ichëvka",
        "country": "UA",
        "coord": {
        "lon": 34.383331,
        "lat": 44.666668
        }
    },
    {
        "id": 697959,
        "name": "Partyzans’ke",
        "country": "UA",
        "coord": {
        "lon": 34.083332,
        "lat": 44.833332
        }
    },
    {
        "id": 803611,
        "name": "Yurevichi",
        "country": "RU",
        "coord": {
        "lon": 39.934444,
        "lat": 43.600555
        }
    },
    {
        "id": 614371,
        "name": "Gumist’a",
        "country": "GE",
        "coord": {
        "lon": 40.973888,
        "lat": 43.026943
        }
  }];
}