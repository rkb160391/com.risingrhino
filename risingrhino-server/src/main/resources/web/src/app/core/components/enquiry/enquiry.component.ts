import { Component, OnInit } from '@angular/core';

export interface Product {
  color: string;
  discription: string;
  details: string;
  name: string;
  articleNo: number;
  src: string
}
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  centered = true;
  disabled = false;
  unbounded = true;
  radius: number = 150;
  color: string = "#e4a806";
  gridColor: string = "lightblue";
  displayMaximizable: boolean;
  images: any[];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  tiles: Product[] = [
    { articleNo: 1, name: 'One', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/1.jpg' },
    { articleNo: 2, name: 'Two', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/2.jpg' },
    { articleNo: 3, name: 'Three', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/3.jpg' },
    { articleNo: 4, name: 'Four', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/4.jpg' },
    { articleNo: 5, name: 'Five', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/2.jpg' }
  ];
  constructor() {
    this.images = [
      {
        "previewImageSrc": "assets/img/products/shoes/1.jpg",
        "thumbnailImageSrc": "assets/img/products/shoes/1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "assets/img/products/shoes/2.jpg",
        "thumbnailImageSrc": "assets/img/products/shoes/2.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
      },
      {
        "previewImageSrc": "assets/img/products/shoes/3.jpg",
        "thumbnailImageSrc": "assets/img/products/shoes/3.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
      },
      {
        "previewImageSrc": "assets/img/products/shoes/4.jpg",
        "thumbnailImageSrc": "assets/img/products/shoes/4.jpg",
        "alt": "Description for Image 4",
        "title": "Title 4"
      }
    ];
  }

  ngOnInit(): void {
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
}
