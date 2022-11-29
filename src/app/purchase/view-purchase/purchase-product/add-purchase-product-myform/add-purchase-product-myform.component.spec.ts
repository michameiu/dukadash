import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseProductMyformComponent } from './add-purchase-product-myform.component';

describe('AddPurchaseProductMyformComponent', () => {
  let component: AddPurchaseProductMyformComponent;
  let fixture: ComponentFixture<AddPurchaseProductMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPurchaseProductMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPurchaseProductMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
