import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleMytablesComponent } from './list-sale-mytables.component';

describe('ListSaleMytablesComponent', () => {
  let component: ListSaleMytablesComponent;
  let fixture: ComponentFixture<ListSaleMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSaleMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaleMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
