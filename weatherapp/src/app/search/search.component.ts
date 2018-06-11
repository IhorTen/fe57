import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../-services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [WeatherService]
})
export class SearchComponent implements OnInit {
  
  city = '';

  constructor(
    private router: Router,
    private ws: WeatherService
  ) { }

  ngOnInit() {
  }

  searchCity(){
    if(this.city.length > 0){
      // console.log(this.city);
      // this.router.navigate([`forecast/${this.city}`])
      this.ws.getCities()
        .subscribe(cities => {
          console.log(cities);
        }, error => {
          console.log(error);
        })
    }
  }

}
