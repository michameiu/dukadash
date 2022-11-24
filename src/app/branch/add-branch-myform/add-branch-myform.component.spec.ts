import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBranchMyformComponent } from './add-branch-myform.component';

describe('AddBranchMyformComponent', () => {
  let component: AddBranchMyformComponent;
  let fixture: ComponentFixture<AddBranchMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBranchMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBranchMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
