import { Component, Input } from '@angular/core';
import { PageStateService } from '../page-state.service';

@Component({
  selector: 'app-side-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './side-nav-item.component.html',
  styleUrl: './side-nav-item.component.scss'
})
export class SideNavItemComponent {
  constructor(public pageStateService: PageStateService) {}

  @Input() label: string = "label";
  @Input() link: string = "link";
  @Input() icon: string = "icon";
}
