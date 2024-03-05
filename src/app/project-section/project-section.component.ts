import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';
import { ProjectData } from '../projectData';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [ HttpClientModule, CommonModule ],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent implements OnInit {
  projects: ProjectData[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.portfolioDataService.getProjects().subscribe(data => {
      this.projects = data;
      console.log('Progetti:', this.projects);
    })

  }
}
