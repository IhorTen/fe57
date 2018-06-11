import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(
    private http: Http
  ) { }

  getCities(){
    return this.http.get('../../assets/city.list.json')
      .map(res => {
        return res.json();
      })
  }

}
