import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WeatherService {
  
  appid = 'fd75cd04499b87a46c0ab410b130ff4d';
    
  constructor(
    private http: Http
  ) { }

  search(query){
    return query.debounceTime(300)
      .switchMap(str => this.getCities(str))
  }

  getCities(str){
    return this.http.get('../../assets/city.list.json')
      .map(res => {
        const cities = res.json();
        let citiesReady = [];
        let strLength = str.length;
        for (const c of cities) {
  
          if( c.name.slice(0, strLength) === str ){
            citiesReady.push(c);
          }
          
        }
        if(citiesReady.length > 0){
          return citiesReady;
        }else{
          return new Error('Not found');
        }
        // throw new Error('Not found');
      })
  }


  getWeather(query){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${this.appid}`)
      .map(res => {return res.json()});
  }

  

}
