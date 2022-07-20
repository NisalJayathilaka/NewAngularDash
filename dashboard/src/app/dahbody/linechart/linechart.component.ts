import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
})
export class LinechartComponent implements OnInit {
  public chartData!: Object[];
  public xAxis!: Object;
  public yAxis!: Object;
  public chartTitle:string;
  legend!:Object;
  makerSetting!:Object;
  toolTipSetting!:Object;

  constructor() {
    this.chartTitle = 'sales Analysis';
    this.chartData = [
      { month: 'Jan', sales: 35 },
      { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 },
      { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 },
      { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 },
      { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 },
      { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 },
      { month: 'Dec', sales: 32 },
    ];

    this.xAxis = {
      title:'Month',
      valueType:'Category'
    }

    this.yAxis = {
      title:'Sales',
      
    }

    this.legend = {
      visible: true
    }

    this.makerSetting ={
      visible:true,
      dataLable: {
        visible:true
      }
    }

    this.toolTipSetting ={
      enable:true
    }
  }

  ngOnInit(): void {}
}
