import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamochkaComponent } from './ramochka.component';

describe('RamochkaComponent', () => {
  let component: RamochkaComponent;
  let fixture: ComponentFixture<RamochkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamochkaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamochkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
