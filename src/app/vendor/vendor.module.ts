import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesModule, TablesService } from '@sisitech/tables'
import { MyformModule } from '@sisitech/myform'
import { AddVendorMyformComponent } from './add-vendor-myform/add-vendor-myform.component';
import { VendorRoutes } from './vendor.routing';
import { ListVendorMyTablesComponent } from './list-vendor-mytables/list-vendor-mytables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthGuard,AuthInterceptor} from "@sisitech/ngxs-auth"

import { environment } from 'src/environments/environment'

const authConfig = {
  APIEndpoint: environment.APIEndpoint,
  version: "api/v1",
  clientId: environment.clientId,
  }

  
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(VendorRoutes),
        MyformModule.forChild(authConfig),
        TablesModule.forChild(authConfig),
    ],
    declarations: [AddVendorMyformComponent,ListVendorMyTablesComponent],
    providers: [TablesService, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }]
})
export class VendorsModule { }
