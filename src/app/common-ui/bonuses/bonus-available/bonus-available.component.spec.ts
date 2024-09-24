import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusAvailableComponent } from './bonus-available.component';

describe('BonusAvailableComponent', () => {
  let component: BonusAvailableComponent;
  let fixture: ComponentFixture<BonusAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusAvailableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonusAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
