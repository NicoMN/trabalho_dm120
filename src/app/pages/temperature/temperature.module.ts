import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {​​ ChartModule }​​ from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { IonicModule } from '@ionic/angular';
import { TemperaturePageRoutingModule } from './temperature-routing.module';
import { TemperaturePage } from './temperature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperaturePageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [TemperaturePage]
})
export class TemperaturePageModule {}
