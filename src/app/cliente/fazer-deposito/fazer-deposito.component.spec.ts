import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerDepositoComponent } from './fazer-deposito.component';

describe('FazerDepositoComponent', () => {
  let component: FazerDepositoComponent;
  let fixture: ComponentFixture<FazerDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazerDepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazerDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
