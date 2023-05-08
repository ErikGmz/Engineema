import { TestBed } from '@angular/core/testing';

import { TicketsAvailabilityService } from './tickets-availability.service';

describe('TicketsAvailabilityService', () => {
  let service: TicketsAvailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsAvailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
