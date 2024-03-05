import { Component, Input } from '@angular/core';
import { ProjectData } from '../projectData';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {
  @Input() project: ProjectData = {
    id: -1,
    name: "test",
    imageLink: "",
    alt: "",
    description: "test description",
    technologies: ["HTML"],
    links: {
      youtube: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
      live: "www.davidesantonocito.com",
      blog: "www.davidesantonocito.com",
      github: "www.davidesantonocito.com",
    }
  };
}
