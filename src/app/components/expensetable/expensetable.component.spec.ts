import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensetableComponent } from './expensetable.component';

describe('ExpensetableComponent', () => {
  let component: ExpensetableComponent;
  let fixture: ComponentFixture<ExpensetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
