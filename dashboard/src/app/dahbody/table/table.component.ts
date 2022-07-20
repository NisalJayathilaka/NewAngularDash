import { Component, OnInit } from '@angular/core';
import { ItemsDataInterFace } from './tableData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  productList: string = 'productList';
  showImage: boolean = false;
  buttonName: any = 'show';

  private _listFilter: string = 'Rake';

  get listFilter():string
  {
     return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter= value;
    console.log(value);
    this.filterItems = this.filteredItemMethod(value)
  }

  filterItems:ItemsDataInterFace[] =[];     // filtered Array

  products: ItemsDataInterFace[] = [
    {
      productId: 1,
      productName: 'Rake',
      productCode: 'NNJ-12',
      releaseDate: 'June 19, 2022',
      description: 'It takes to the Rake',
      price: 89.95,
      starRating: 4.2,
      imageUrl: 'src/assets/images/abc.png',
    },
    {
      productId: 2,
      productName: 'Cart',
      productCode: 'NNJ-13',
      releaseDate: 'June 19, 2022',
      description: 'it takes to the Cart',
      price: 82.99,
      starRating: 4.2,
      imageUrl: 'src/assets/images/abc.png',
    },
    {
      productId: 3,
      productName: 'Udalla',
      productCode: 'NNJ-14',
      releaseDate: 'June 19, 2022',
      description: 'It takes to the Udalla',
      price: 59.95,
      starRating: 4.2,
      imageUrl: 'src/assets/images/abc.png',
    },
    {
      productId: 4,
      productName: 'Knife',
      productCode: 'NNJ-15',
      releaseDate: 'June 19, 2022',
      description: 'it takes to the Knife',
      price: 62.99,
      starRating: 4.2,
      imageUrl: 'src/assets/images/abc.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  showtheImages() {                          //show hide Images Button 
    this.showImage = !this.showImage;
    if (this.showImage) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'show';
    }
  }

  filteredItemMethod(filterBy:string):ItemsDataInterFace[]   // filter method
  {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((item:ItemsDataInterFace)=>
    item.productName.toLocaleLowerCase().includes(filterBy));
  }
}
