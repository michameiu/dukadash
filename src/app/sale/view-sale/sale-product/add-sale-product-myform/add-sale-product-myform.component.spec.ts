import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleProductMyformComponent } from './add-sale-product-myform.component';

describe('AddSaleProductMyformComponent', () => {
  let component: AddSaleProductMyformComponent;
  let fixture: ComponentFixture<AddSaleProductMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleProductMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleProductMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
