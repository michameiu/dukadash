import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesModule, TablesService } from '@sisitech/tables'
import { MyformModule } from '@sisitech/myform'
import { AddBranchMyformComponent } from './add-branch-myform/add-branch-myform.component';
import { BranchRoutes } from './branch.routing';
import { ListBranchMyTablesComponent } from './list-branch-mytables/list-branch-mytables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard, AuthInterceptor } from "@sisitech/ngxs-auth"

import { authConfig } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BranchRoutes),
    MyformModule.forChild(authConfig),
    TablesModule.forChild(authConfig),
  ],
  declarations: [AddBranchMyformComponent, ListBranchMyTablesComponent],
  providers: [TablesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class BranchsModule { }
