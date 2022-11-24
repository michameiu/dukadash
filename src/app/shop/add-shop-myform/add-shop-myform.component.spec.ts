import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopMyformComponent } from './add-shop-myform.component';

describe('AddShopMyformComponent', () => {
  let component: AddShopMyformComponent;
  let fixture: ComponentFixture<AddShopMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShopMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
