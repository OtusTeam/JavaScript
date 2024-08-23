import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService tests', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('check  Geom Avg', () => {
    // Arrange
    const source=[1,2,3];
    const target= Math.pow(6, 1.0/3);

    // Act 
    const res=service.geomAvg(...source);

    // Assert
    expect(res).toBe(target);
  });
});
