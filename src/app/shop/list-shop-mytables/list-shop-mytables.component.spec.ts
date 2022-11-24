import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShopMytablesComponent } from './list-shop-mytables.component';

describe('ListShopMytablesComponent', () => {
  let component: ListShopMytablesComponent;
  let fixture: ComponentFixture<ListShopMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShopMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShopMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
