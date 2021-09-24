import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSingupModalComponent } from './confirm-singup-modal.component';

describe('ConfirmSingupModalComponent', () => {
  let component: ConfirmSingupModalComponent;
  let fixture: ComponentFixture<ConfirmSingupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSingupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSingupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
