import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from '../side-nav-item/side-nav-item.component';
import { PageStateService } from '../page-state.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ CommonModule, SideNavItemComponent ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(public pageStateService: PageStateService) {}
}
