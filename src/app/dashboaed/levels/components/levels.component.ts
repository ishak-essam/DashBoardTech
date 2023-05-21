import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LevelInterface, ServicesService } from '../service/services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {
  DataLevel: any;
  constructor(public dialog: MatDialog, private service: ServicesService) {
  }
  post() {
    this.service.examplepost().subscribe({
      next: (ele) => {
        console.log(ele)
      },
      error: (err: any) => {
        console.log(err)
        console.log(err)
      },

    })
  }
  ngOnInit(): void {
    // this.service.postlevel({
    //   "id": 3,
    //   "levelName": "الثالث",
    //   "telegeramLink": "http://sssda"
    // }).subscribe({
    //   next: (ele) => {
    //     console.log(ele)
    //   },
    //   error: (err: any) => {
    //     console.log(err)
    //     console.log(err)
    //   },

    // })

    this.service.getalllevel()
    this.service.levels.subscribe((ele: any) => {
      this.DataLevel = ele;
      this.dataSource = ele;
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  dataSource = new MatTableDataSource<LevelInterface>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns = ['id', 'levelName', 'telegeramLink'];
}
@Component({
  selector: 'addlevel',
  styleUrls: ['./levels.component.scss'],
  templateUrl: './AddLevel.html',
})
export class DialogAnimationsExampleDialog implements OnInit {
  error: any;
  ngOnInit(): void {

  }
  constructor(private service: ServicesService,
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {
  }
  onSubmit(id: any, levelName: string, telegeramLink: string) {

    localStorage.setItem('submitdata', JSON.stringify({
      "id": id.value,
      "levelName": levelName,
      "telegeramLink": telegeramLink
    }))
    this.service.postlevel(({
      "id": id.value,
      "levelName": levelName,
      "telegeramLink": telegeramLink
    })).subscribe(ele => {
      console.log(ele)
      localStorage.setItem('', JSON.stringify(ele))
    })
  }
}
