import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent implements OnInit {
  
  city;

  constructor(
    private route: ActivatedRoute,
    private router: Router
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
  }



}
