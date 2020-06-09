import { Component, OnInit } from '@angular/core';

export interface Product {
  color: string;
  discription: string;
  details: string;
  name: string;
  articleNo: number
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
    { articleNo: 1, name: 'One', discription: '', details: '', color: 'lightblue' },
    { articleNo: 2, name: 'Two', discription: '', details: '', color: 'lightblue' },
    { articleNo: 3, name: 'Three', discription: '', details: '', color: 'lightblue' },
    { articleNo: 4, name: 'Four', discription: '', details: '', color: 'lightblue' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
}
}
