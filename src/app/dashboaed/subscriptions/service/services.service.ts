import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService implements OnInit {
  baseUrlSub: string = "Subscribtion/"
  ///E-learning/Subscribtion/Admin/GetActiveSubscribtion
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  GetActiveSubscribtion(index: number = 20) {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `Admin/GetActiveSubscribtion?size=${index}`)
  }
  GetNotConfirmedSubscribtion(index: number = 20) {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `Admin/GetNotConfirmedSubscribtion?size=${index}`)
  }
  GetSubscribtionForStudentByStudentID(StudentID: number) {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `Admin/GetSubscribtionForStudent/${StudentID}`)
  }
  GetSubscribtionStudentme() {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `/Subscribtion/Student/me`)
  }
}
