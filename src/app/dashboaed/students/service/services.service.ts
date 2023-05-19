import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrlSub: string = "/Students/Admin/"
  constructor(private http: HttpClient, private authservice: AuthService) { }
  ngOnInit(): void {
  }
  // /Students/Admin/getAll?size=20
  getAll(index: number = 20): Observable<any> {
    return this.http.get('http://hossamfathi-001-site1.atempurl.com/E-learning/Students/Admin/getAll?size=20')
  }
}
