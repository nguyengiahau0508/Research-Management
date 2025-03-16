import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.css'],
  imports: [RouterLink]
})
export class TabNavigationComponent {
  tabs = [
    { label: 'Lecturers', route: '/lecturers' },
    { label: 'Students', route: '/students' },
    { label: 'Departments', route: '/departments' },
    { label: 'Research Topics', route: '/research-topics' }
  ];
}
