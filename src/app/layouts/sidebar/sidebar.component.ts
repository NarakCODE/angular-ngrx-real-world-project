import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    MatButton,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'dashboard',
      label: 'Dashboard',
    },
    {
      routeLink: 'menu',
      icon: 'menu',
      label: 'Menu',
    },
    {
      routeLink: 'delivery',
      icon: 'local_shipping',
      label: 'Delivery',
    },
    {
      routeLink: 'settings',
      icon: 'settings',
      label: 'Settings',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
