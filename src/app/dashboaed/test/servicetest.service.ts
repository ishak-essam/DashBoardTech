import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicetestService {
  private baseapi: string = 'https://ishak-essam.github.io/fake-api/db.json';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.baseapi);
  }
  postData(data: any) {
    return this.http.post(this.baseapi, data);
  }
}
