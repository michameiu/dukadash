import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductMytablesComponent } from './list-product-mytables.component';

describe('ListProductMytablesComponent', () => {
  let component: ListProductMytablesComponent;
  let fixture: ComponentFixture<ListProductMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
