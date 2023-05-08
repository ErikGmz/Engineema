import { TestBed } from '@angular/core/testing';

import { SeatSelectionGuard } from './seat-selection.guard';

describe('SeatSelectionGuard', () => {
  let guard: SeatSelectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeatSelectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
