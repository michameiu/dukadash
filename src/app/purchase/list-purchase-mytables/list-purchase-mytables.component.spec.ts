import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseMytablesComponent } from './list-purchase-mytables.component';

describe('ListPurchaseMytablesComponent', () => {
  let component: ListPurchaseMytablesComponent;
  let fixture: ComponentFixture<ListPurchaseMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPurchaseMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPurchaseMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
