import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleProductMytablesComponent } from './list-sale-product-mytables.component';

describe('ListSaleProductMytablesComponent', () => {
  let component: ListSaleProductMytablesComponent;
  let fixture: ComponentFixture<ListSaleProductMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSaleProductMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaleProductMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
