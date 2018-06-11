import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'forecast/:city',
    component: ForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
