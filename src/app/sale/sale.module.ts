import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesModule, TablesService } from '@sisitech/tables'
import { MyformModule } from '@sisitech/myform'
import { AddSaleMyformComponent } from './add-sale-myform/add-sale-myform.component';
import { SaleRoutes } from './sale.routing';
import { ListSaleMyTablesComponent } from './list-sale-mytables/list-sale-mytables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard, AuthInterceptor } from "@sisitech/ngxs-auth"

import { environment } from 'src/environments/environment';
import { ViewSaleComponent } from './view-sale/view-sale.component'
import { AddSaleProductMyformComponent } from './view-sale/sale-product/add-sale-product-myform/add-sale-product-myform.component';
import { ListSaleProductMyTablesComponent } from './view-sale/sale-product/list-sale-product-mytables/list-sale-product-mytables.component';

const authConfig = {
  APIEndpoint: environment.APIEndpoint,
  version: "api/v1",
  clientId: environment.clientId,
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SaleRoutes),
    MyformModule.forChild(authConfig),
    TablesModule.forChild(authConfig),
  ],
  declarations: [AddSaleMyformComponent,
    ViewSaleComponent,
    AddSaleProductMyformComponent, ListSaleProductMyTablesComponent,
    ListSaleMyTablesComponent, ViewSaleComponent],
  providers: [TablesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class SalesModule { }
