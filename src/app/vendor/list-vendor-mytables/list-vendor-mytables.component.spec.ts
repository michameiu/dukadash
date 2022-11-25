import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVendorMytablesComponent } from './list-vendor-mytables.component';

describe('ListVendorMytablesComponent', () => {
  let component: ListVendorMytablesComponent;
  let fixture: ComponentFixture<ListVendorMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVendorMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVendorMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
