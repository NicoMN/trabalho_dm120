import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzzcolorPageRoutingModule } from './buzzcolor-routing.module';

import { BuzzcolorPage } from './buzzcolor.page';
import {​​ ChartModule }​​ from 'angular2-highcharts';
import * as highcharts from 'highcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzzcolorPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [BuzzcolorPage]
})
export class BuzzcolorPageModule {}
