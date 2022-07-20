import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upperbody',
  templateUrl: './upperbody.component.html',
  styleUrls: ['./upperbody.component.css']
})
export class UpperbodyComponent implements OnInit {

  header1Title:string = "Sales On May";
  header2Title:string = "Sales On April";
  header3Title:string = "Sales On March";
  header4Title:string = "Sales On February";


  sales: any[] =[
    {
      totalsales: 25000,
      month:'June'
    },
    {
      totalsales: 55000,
      month:'May'
    },
    {
      totalsales: 65000,
      month:'April'
    },
    {
      totalsales: 75000,
      month:'March'
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
