import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { TabNavigationComponent } from '../../components/tab-navigation/tab-navigation.component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    SidebarComponent,
    NavbarComponent,
    RouterOutlet,
    TabNavigationComponent
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
