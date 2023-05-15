import { IStudent } from './../../../iuser';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  constructor(private serviceSub: ServicesService) { }
  ngOnInit(): void {
    this.serviceSub.GetActiveSubscribtion().subscribe(ele => console.log(ele));
    this.serviceSub.GetNotConfirmedSubscribtion().subscribe(ele => console.log(ele));
    this.serviceSub.GetSubscribtionForStudentByStudentID(6).subscribe(ele => console.log(ele));
  }
}
