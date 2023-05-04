import { Component, EventEmitter, Output } from '@angular/core';

export interface Section {
  name: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 folders: Section[] = [
    {
      name: 'Photos',
    },
    {
      name: 'Recipes',
    },
    {
      name: 'Work',
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
    },
    {
      name: 'Kitchen Remodel',
    },
  ];
}
