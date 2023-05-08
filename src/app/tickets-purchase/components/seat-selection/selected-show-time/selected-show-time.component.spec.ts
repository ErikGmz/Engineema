import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedShowTimeComponent } from './selected-show-time.component';

describe('SelectedShowTimeComponent', () => {
  let component: SelectedShowTimeComponent;
  let fixture: ComponentFixture<SelectedShowTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedShowTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedShowTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
