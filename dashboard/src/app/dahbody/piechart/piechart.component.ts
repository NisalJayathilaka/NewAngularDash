import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
})
export class PiechartComponent implements OnInit {

  public data!: Object[];
  public chartTitle!:string;
  public chartLable!:Object;
  public legend!:Object;
  public tooltipSetting!:Object;

  constructor() {
    this.chartTitle = 'sales Static'
    this.data = [
      { name: 'Rake', value: 12, text: '25%' },
      { name: 'Cart', value: 25, text: '25%' },
      { name: 'Udalla', value: 25, text: '25%' },
      { name: 'Knife', value: 25, text: '25%' },
    ];

    this.chartLable = {
      visible:true,
      position:'Inside',
      name:'text'
    }

    this.legend ={
      visible:true,
      position:'Bottom',
      height:'8%',
      width:'40%'
    }

    this.tooltipSetting = {
      enable:true
    }
  }

  ngOnInit(): void {}
}
