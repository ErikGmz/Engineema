import { TestBed } from '@angular/core/testing';

import { PaymentSelectionGuard } from './payment-selection.guard';

describe('PaymentSelectionGuard', () => {
  let guard: PaymentSelectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentSelectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
