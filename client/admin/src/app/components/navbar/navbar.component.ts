import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  user = { name: 'Admin User', avatar: 'images/avatar.jpeg' };

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
