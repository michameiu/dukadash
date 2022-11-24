import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBranchMytablesComponent } from './list-branch-mytables.component';

describe('ListBranchMytablesComponent', () => {
  let component: ListBranchMytablesComponent;
  let fixture: ComponentFixture<ListBranchMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBranchMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBranchMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
