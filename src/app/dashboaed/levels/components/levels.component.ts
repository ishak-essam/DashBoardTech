import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {
  constructor(private auth: AuthService) {
  }
  ngOnInit(): void {
    console.log(this.auth.userValue)
  }
}
