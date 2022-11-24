import { Routes } from '@angular/router';
import { AddBranchMyformComponent } from './add-branch-myform/add-branch-myform.component';
import { ListBranchMyTablesComponent } from './list-branch-mytables/list-branch-mytables.component';

export const BranchRoutes: Routes = [
  {
    path: 'add-branch',
    component: AddBranchMyformComponent
  },
  {
    path: 'list-branch',
    component: ListBranchMyTablesComponent
  },
  {
    path:"**",
    redirectTo:"list-branch"
  }
];
