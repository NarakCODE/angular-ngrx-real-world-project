import { Component, HostListener, OnInit, signal } from '@angular/core';
import { MainComponent } from './layouts/main/main.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [MainComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-3hour';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
