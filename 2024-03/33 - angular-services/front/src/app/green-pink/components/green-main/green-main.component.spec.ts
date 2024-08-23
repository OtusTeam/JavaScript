import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenMainComponent } from './green-main.component';

describe('GreenMainComponent', () => {
  let component: GreenMainComponent;
  let fixture: ComponentFixture<GreenMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
