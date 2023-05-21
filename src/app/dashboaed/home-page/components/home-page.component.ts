import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private http: HttpClient, private service: AuthService) { }
  ngOnInit(): void {
  }
  logout() {
    this.service.logout()
    localStorage.setItem("x", 'X');
  }
}
