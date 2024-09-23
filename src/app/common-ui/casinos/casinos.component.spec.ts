import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinosComponent } from './casinos.component';

describe('CasinosComponent', () => {
  let component: CasinosComponent;
  let fixture: ComponentFixture<CasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
