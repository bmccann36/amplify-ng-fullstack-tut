import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplifystartComponent } from './amplifystart.component';

describe('AmplifystartComponent', () => {
  let component: AmplifystartComponent;
  let fixture: ComponentFixture<AmplifystartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmplifystartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmplifystartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
