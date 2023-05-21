import { BehaviorSubject, map } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { CookieService } from 'ngx-cookie-service';

export interface LevelInterface {
  "id": number,
  "levelName": string,
  "telegeramLink": string
}
@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  levels: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  baseUrlLevel = environment.BaseUrl + "Levels";
  //http://hossamfathi-001-site1.atempurl.com/E-learning/Levels
  // levelFunc() {
  //   this.getalllevel().subscribe((ele: any) => {
  //     this.levels.next(ele.items);
  //   })

  // }
  constructor(private http: HttpClient, private cookies: CookieService) { }
  getalllevel() {
    return this.http.get(this.baseUrlLevel).subscribe((ele: any) => {
      this.levels.next(ele.items);
    })
  }
  postlevel(level: any) {
    return this.http.post(this.baseUrlLevel, level)
    // .pipe(
    //   map((token) => {
    //     console.log(token)
    //     let user: User = {
    //       email: this.cookies.get("email")
    //       ,
    //       token: this.cookies.get("token"),
    //     };
    //     return user;
    //   }))
  }
  examplepost() {
    return this.http.post(this.baseUrlLevel, {
      "id": 3,
      "levelName": "الصف الثالث",
      "telegeramLink": "http://asdcz"
    })
  }
}
