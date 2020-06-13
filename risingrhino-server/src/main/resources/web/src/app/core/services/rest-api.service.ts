import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient, private apiUrl: ApiUrlService) {
  }

  public getHome() {
    return this.httpClient.get(this.apiUrl.getHome());
  }

}
