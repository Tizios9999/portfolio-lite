import { Component, OnInit, Input } from '@angular/core';
import { PortfolioDataService } from '../portfolio-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SkillData } from '../skillData';

@Component({
  selector: 'app-skills-list',
  standalone: true,
  imports: [ HttpClientModule, CommonModule ],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent implements OnInit {
  @Input() specialized: string = "true"; // Imposta il valore predefinito su true
  skills: SkillData[] = [];
  specializedSkills: SkillData[] = [];
  notSpecializedSkills: SkillData[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.portfolioDataService.getSkills().subscribe(data => {
      this.skills = data;
      this.specializedSkills = [];
      this.notSpecializedSkills = [];
      this.skills.forEach(skill => {
        if(skill.specialized == 'true') {
          this.specializedSkills.push(skill);
        } else {
          this.notSpecializedSkills.push(skill);
        }
      })
      console.log('Dati caricati:', this.skills);
    });
  }


  }
