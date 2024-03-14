import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyLabelComponent } from './technology-label.component';

describe('TechnologyLabelComponent', () => {
  let component: TechnologyLabelComponent;
  let fixture: ComponentFixture<TechnologyLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
