import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add2listComponent } from './add2list.component';

describe('Add2listComponent', () => {
  let component: Add2listComponent;
  let fixture: ComponentFixture<Add2listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Add2listComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Add2listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
