import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { WeatherService } from '../-services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
  providers: [WeatherService]
})
export class ForecastComponent implements OnInit {
  
  city;
  error;
  weather;
  pod;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ws: WeatherService
  ) { }

  ngOnInit() {
    this.getForecast();
    this.router.events.subscribe( event => {
      if(event instanceof NavigationEnd){
        this.getForecast();
      }
    })
  }

  getForecast(){
    this.city = this.route.snapshot.paramMap.get('city');
    this.ws.getWeather(this.city)
      .subscribe(res => {
        this.error = '';
        console.log(res);
        this.weather = res;
        this.getPod(res.weather[0].icon);
      }, error => {
        this.weather = '';
        this.error = error.json().message;
      })
  }

  getPod(icon){
    this.pod = icon.slice(icon.length-1);
  }



}
