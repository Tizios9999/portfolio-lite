import { PageStateService } from './../page-state.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';
import { TechnologyLabelComponent } from '../technology-label/technology-label.component';
import { ProjectData } from '../projectData';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [ HttpClientModule, CommonModule, ProjectPreviewComponent, TechnologyLabelComponent ],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent implements OnInit {
  projects: ProjectData[] = [];
  selectedProject: ProjectData | null = null;

  constructor(private portfolioDataService: PortfolioDataService, public pageStateService: PageStateService) {}

  openModal(project: ProjectData) {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }

  closeModal() {
    this.selectedProject = null;
  }

  ngOnInit() {
    this.portfolioDataService.getProjects().subscribe(data => {
      this.projects = data;
      console.log('Progetti:', this.projects);
    })
  }
}
