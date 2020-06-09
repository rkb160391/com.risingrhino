import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  mySlideImages = [{ title: 'Item 1', src: 'assets/img/products/collections/1.jpg' }, { title: 'Item 2', src: 'assets/img/products/collections/2.jpg' }, { title: 'Item 3', src: 'assets/img/products/collections/3.jpg' }];

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
