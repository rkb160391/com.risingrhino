import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private restApi: RestApiService) {

  }

  ngOnInit(): void {
    this.getHome();
  }
  public getHome() {
    this.restApi.getHome().subscribe(data => {
      // for (const d of (data as any)) {
      //   this.smartphone.push({
      //     name: d.name,
      //     price: d.price
      //   });
      // }
      console.log(data);
    });
  }

}
