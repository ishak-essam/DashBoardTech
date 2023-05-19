import { IStudent, IStudentSubscriptions } from './../../../iuser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';




export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  constructor(private serviceSub: ServicesService) { }

  ngOnInit(): void {
    this.serviceSub.GetActiveSubscribtion().subscribe(ele => {
      this.dataSource.data = ele.items;
      console.log(ele.items)
    });

  }
  displayedColumns = [ 'isActive', 'phone', 'studentName', 'subjectName', 'subscribtionDate'];
  dataSource = new MatTableDataSource<IStudentSubscriptions>();
}




