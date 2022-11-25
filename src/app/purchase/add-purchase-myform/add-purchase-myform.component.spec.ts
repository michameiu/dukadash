import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseMyformComponent } from './add-purchase-myform.component';

describe('AddPurchaseMyformComponent', () => {
  let component: AddPurchaseMyformComponent;
  let fixture: ComponentFixture<AddPurchaseMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPurchaseMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPurchaseMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
