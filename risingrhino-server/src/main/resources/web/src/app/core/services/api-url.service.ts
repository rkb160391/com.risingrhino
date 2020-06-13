import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  apiUrl: string;
  constructor() { 
    this.apiUrl = environment.api;
  }
  public getHome() {
    return `${this.apiUrl}welcome`;
  }
  
}
