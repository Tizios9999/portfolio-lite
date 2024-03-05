import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { PageStateService } from './page-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, MenuComponent, SkillsListComponent, ProjectPreviewComponent, ProjectSectionComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public pageStateService: PageStateService) {}

  title = 'portfolio-lite';
}
