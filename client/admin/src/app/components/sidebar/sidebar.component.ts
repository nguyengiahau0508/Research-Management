import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() collapsed = false;

  menuItems = [
    { label: 'Dashboard', icon: 'fa-home', route: '/dashboard' },
    { label: 'Users', icon: 'fa-users', route: '/users' },
    { label: 'Settings', icon: 'fa-cog', route: '/settings' }
  ];
}
