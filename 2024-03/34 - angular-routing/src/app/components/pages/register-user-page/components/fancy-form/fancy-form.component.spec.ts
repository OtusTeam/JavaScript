import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyFormComponent, FancyFormModel } from './fancy-form.component';
import { FancyFormService } from './fancy-form.service';

describe('FancyFormComponent', () => {
  let component: FancyFormComponent;
  let fixture: ComponentFixture<FancyFormComponent>;
  let submitSpy: jasmine.Spy<(model: FancyFormModel) => void>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyFormComponent],
      providers: [FancyFormService],
    })
      .compileComponents();


    const fancyService = TestBed.inject(FancyFormService);

    submitSpy = spyOn(fancyService, 'send');

    // .and.callFake(model => {
    //   return;
    // });

    fixture = TestBed.createComponent(FancyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should input', () => {
    // Arrange
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#first-name');
    input.value = 'Edgar';

    // Act
    input.dispatchEvent(new Event('input'));

    // Asert
    expect(component.model.firstName).toBe('Edgar');
  });

  it('Check submit correct data', () => {

    // Arrange
    const firstNameInput: HTMLInputElement = fixture.nativeElement.querySelector('#first-name');
    firstNameInput.value = 'Edgar';
    firstNameInput.dispatchEvent(new Event('input'));

    const lastNameInput: HTMLInputElement = fixture.nativeElement.querySelector('#last-name');
    lastNameInput.value = 'Pilipson';
    lastNameInput.dispatchEvent(new Event('input'));
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('#submit-btn');

    const form: HTMLFormElement = fixture.nativeElement.querySelector('#form');


   
    // Act
    submitButton.click();

    // Assert
    expect(submitSpy).toHaveBeenCalledWith({ firstName: 'Edgar', lastName: 'Pilipson', isCompany: true });
  });
});
