import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorMyformComponent } from './add-vendor-myform.component';

describe('AddVendorMyformComponent', () => {
  let component: AddVendorMyformComponent;
  let fixture: ComponentFixture<AddVendorMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
