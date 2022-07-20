import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {
  ChartModule,
  LineSeriesService,
  CategoryService,
  LegendService,
  DataLabelService,
  TooltipService,
  AccumulationChartModule,
  PieSeriesService,
  AccumulationDataLabelService,
  AccumulationLegendService,
  AccumulationTooltipService
} from '@syncfusion/ej2-angular-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DahbodyComponent } from './dahbody/dahbody.component';
import { UpperbodyComponent } from './dahbody/upperbody/upperbody.component';
import { TableComponent } from './dahbody/table/table.component';
import { LinechartComponent } from './dahbody/linechart/linechart.component';
import { PiechartComponent } from './dahbody/piechart/piechart.component';
import { AboutComponent } from './header/about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './header/signup/signup.component';




const appRoute:Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'about',component: AboutComponent    
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DahbodyComponent,
    UpperbodyComponent,
    TableComponent,
    LinechartComponent,
    PiechartComponent,
    AboutComponent,
    HomeComponent,
    SignupComponent,
  
 
  ],
  imports: [BrowserModule, FormsModule, ChartModule, AccumulationChartModule,RouterModule.forRoot(
    appRoute
  )],
  providers: [
    LineSeriesService,
    CategoryService,
    LegendService,
    DataLabelService,
    TooltipService,
    PieSeriesService,
    AccumulationDataLabelService,
    AccumulationLegendService,
    AccumulationTooltipService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
