import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListMainComponent } from './my-list-main.component';

describe('MyListMainComponent', () => {
  let component: MyListMainComponent;
  let fixture: ComponentFixture<MyListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyListMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
