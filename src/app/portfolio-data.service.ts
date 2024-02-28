import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Interfaces
import { SkillData } from './skillData';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private skillsUrl = 'assets/data/skills.json';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<SkillData[]> {
    return this.http.get<SkillData[]>(this.skillsUrl);
  }
}
