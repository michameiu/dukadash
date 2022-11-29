import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseProductMytablesComponent } from './list-purchase-product-mytables.component';

describe('ListPurchaseProductMytablesComponent', () => {
  let component: ListPurchaseProductMytablesComponent;
  let fixture: ComponentFixture<ListPurchaseProductMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPurchaseProductMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPurchaseProductMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
