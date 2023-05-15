import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicetestService } from './servicetest.service';
import { environment } from 'src/environments/environment.development';

export interface UserData {
  id: string;
  userId: string;
  title: any;
  body: any;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  SelectALl!: boolean;
  displayedColumns: string[] = ['check', 'id', 'userId', 'title', 'body'];
  dataSource!: MatTableDataSource<UserData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: ServicetestService) {
    this.service.getData().subscribe((data) => {
      this.posts = data;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.posts);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  url: string = environment.BaseUrl;
  ngOnInit(): void {
    console.log(this.url)
  }
  changed(che: boolean, item: any) {
    item.check = !item.check;
  }
  SelectAll() {
    for (let i = 0; i < Object.keys(this.posts).length; i++)
      this.posts[i].check = this.SelectALl;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  savechange() {
    const btn = document.querySelector('.save button');
    const spt = document.querySelector('mat-spinner');
    (btn as HTMLElement).style.display = 'none';
    (spt as HTMLElement).style.display = 'flex';

    console.log(this.posts);
    setTimeout(() => {
      this.service.postData(this.posts);
      // try to put in api by httpclient in angular ?
      this.service.postData(JSON.stringify(this.posts)).subscribe((response: any) => {
        console.log('Data posted:', response);
      }
        , (error: any) => {
          console.error('Error posting data:', error);
        }
      );
      (spt as HTMLElement).style.display = 'none';
      (btn as HTMLElement).style.display = 'flex';
    }, 3000);
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    userId: name,
    title: Math.round(Math.random() * 100).toString(),
    body: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
