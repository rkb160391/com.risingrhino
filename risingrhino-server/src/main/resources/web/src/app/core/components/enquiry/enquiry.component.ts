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

  tiles: Product[] = [
    { articleNo: 1, name: 'One', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/1.jpg' },
    { articleNo: 2, name: 'Two', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/2.jpg' },
    { articleNo: 3, name: 'Three', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/3.jpg' },
    { articleNo: 4, name: 'Four', discription: '', details: '', color: 'lightblue', src: 'assets/img/products/shoes/4.jpg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
}
