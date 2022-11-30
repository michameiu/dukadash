import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleMyformComponent } from './add-sale-myform.component';

describe('AddSaleMyformComponent', () => {
  let component: AddSaleMyformComponent;
  let fixture: ComponentFixture<AddSaleMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaleMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
