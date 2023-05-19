import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  GetActiveSubscribtion(index: number = 20): Observable<any> {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `Admin/GetActiveSubscribtion?size=${index}`)
  }
  GetNotConfirmedSubscribtion(index: number = 20): Observable<any> {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `Admin/GetNotConfirmedSubscribtion?size=${index}`)
  }
  GetSubscribtionForStudentByStudentID(StudentID: number): Observable<any> {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `Admin/GetSubscribtionForStudent/${StudentID}`)
  }
  GetSubscribtionStudentme(): Observable<any> {
    return this.http.get(environment.BaseUrl + this.baseUrlSub + `/Subscribtion/Student/me`)
  }

}
