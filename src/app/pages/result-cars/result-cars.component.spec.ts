import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCarsComponent } from './result-cars.component';

describe('ResultCarsComponent', () => {
  let component: ResultCarsComponent;
  let fixture: ComponentFixture<ResultCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
