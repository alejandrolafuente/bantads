import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerSaqueComponent } from './fazer-saque.component';

describe('FazerSaqueComponent', () => {
  let component: FazerSaqueComponent;
  let fixture: ComponentFixture<FazerSaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazerSaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazerSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
