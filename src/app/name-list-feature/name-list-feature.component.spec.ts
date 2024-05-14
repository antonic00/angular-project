import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameListFeatureComponent } from './name-list-feature.component';

describe('NameListFeatureComponent', () => {
  let component: NameListFeatureComponent;
  let fixture: ComponentFixture<NameListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameListFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
