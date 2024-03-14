import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-label',
  standalone: true,
  imports: [],
  templateUrl: './technology-label.component.html',
  styleUrl: './technology-label.component.scss'
})
export class TechnologyLabelComponent {
  @Input() technology: string = "label";
}
