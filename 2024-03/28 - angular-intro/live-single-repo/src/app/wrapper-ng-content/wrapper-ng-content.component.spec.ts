import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperNgContentComponent } from './wrapper-ng-content.component';

describe('WrapperNgContentComponent', () => {
  let component: WrapperNgContentComponent;
  let fixture: ComponentFixture<WrapperNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperNgContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
