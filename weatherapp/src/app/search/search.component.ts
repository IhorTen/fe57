import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../-services/weather.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [WeatherService]
})
export class SearchComponent implements OnInit {
  
  formInp = new Subject<string>();
  cities = [];
  error;

  constructor(
    private router: Router,
    private ws: WeatherService
  ) { }

  ngOnInit() {
  }

  searchCities(e){
    if((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 8 || e.keyCode === 46){
      this.formInp.next(e.target.value);
      this.ws.search(this.formInp)
        .subscribe(res => {
          if(res instanceof Error){
            this.error = 'error';
          }else{
            this.cities = res;
            
          }
        })
    }

    // if(this.formInp.length > 0){
      // this.router.navigate([`forecast/${this.city}`])
      // this.ws.getCities()
      //   .subscribe(cities => {
      //     let lettersNum = this.formInp.length;
      //     let citiesRes = [];
      //     // console.log(lettersNum);
      //     // // console.log(cities);
      //     // for (const c of cities) {
      //     //   if(this.city === c.name){
      //     //     // console.log(c);
      //     //     this.router.navigate([`forecast/${c.name}`])
      //     //     return c;
      //     //   }
      //     // }
      //     // // console.log('Not found');
      //     // alert('Not Found');
      //     for (const c of cities) {
      //       if( c.name.slice(0, lettersNum) === this.formInp ){
      //         citiesRes.push(c);
      //       }
      //     }
      //     this.cities = citiesRes;
      //     console.log(this.cities);
      //   }, error => {
      //     console.log(error);
      //   })
    // }
  }

  sendCity(city){
    this.router.navigate([`forecast/${city}`]);
    this.cities = [];
  }

}
