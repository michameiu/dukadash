import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductMyformComponent } from './add-product-myform.component';

describe('AddProductMyformComponent', () => {
  let component: AddProductMyformComponent;
  let fixture: ComponentFixture<AddProductMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
