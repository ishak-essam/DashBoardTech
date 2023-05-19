import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { MatTableDataSource } from '@angular/material/table';
import { IStudent } from 'src/app/iuser';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  dataSource = new MatTableDataSource<IStudent>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private servive: ServicesService) { }
  ngOnInit(): void {
    this.servive.getAll().subscribe(ele => {
      console.log(ele)
      this.dataSource = ele.items;
    // this.dataSource.paginator = this.paginator;

      console.log(this.dataSource)
    })
  }

  displayedColumns = ['image', 'name', 'phone', 'parentPhone', 'schoolName', 'city'];
}
