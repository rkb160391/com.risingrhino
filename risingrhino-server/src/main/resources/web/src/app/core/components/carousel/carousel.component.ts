import { Component, OnInit } from '@angular/core';

export interface Product {
  color: string;
  discription: string;
  details: string;
  name: string;
  articleNo: number;
  src:string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  productList: Product[] = [
    { articleNo: 1, name: 'Item 1', discription: '', details: '', color: 'lightblue', src: 'assets/img/carousel/carousel_1.jpg' },
    { articleNo: 2, name: 'Item 2', discription: '', details: '', color: 'lightblue', src: 'assets/img/carousel/carousel_2.jpg' },
    { articleNo: 3, name: 'Item 3', discription: '', details: '', color: 'lightblue', src: 'assets/img/carousel/carousel_3.jpg' },
    { articleNo: 4, name: 'Item 4', discription: '', details: '', color: 'lightblue', src: 'assets/img/carousel/carousel_4.jpg' },
    { articleNo: 4, name: 'Item 5', discription: '', details: '', color: 'lightblue', src: 'assets/img/carousel/carousel_5.jpg' },
    { articleNo: 4, name: 'Item 6', discription: '', details: '', color: 'lightblue', src: 'assets/img/carousel/carousel_6.jpg' }
  ];
  responsiveOptions;
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  ngOnInit(): void {
  }

}
