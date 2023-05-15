import { Component } from '@angular/core';
export interface PeriodicElement {
  Check: boolean;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Check: true, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { Check: false, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { Check: true, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { Check: false, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { Check: true, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { Check: false, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { Check: false, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { Check: true, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { Check: true, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { Check: false, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-reopen-lecture',
  templateUrl: './reopen-lecture.component.html',
  styleUrls: ['./reopen-lecture.component.scss'],
})
export class ReopenLectureComponent {
  dataSource = ELEMENT_DATA;
}
