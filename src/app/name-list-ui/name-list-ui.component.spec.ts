import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameListUiComponent } from './name-list-ui.component';

describe('NameListUiComponent', () => {
  let component: NameListUiComponent;
  let fixture: ComponentFixture<NameListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameListUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
