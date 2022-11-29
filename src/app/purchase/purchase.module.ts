import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesModule, TablesService } from '@sisitech/tables'
import { MyformModule } from '@sisitech/myform'
import { AddPurchaseMyformComponent } from './add-purchase-myform/add-purchase-myform.component';
import { PurchaseRoutes } from './purchase.routing';
import { ListPurchaseMyTablesComponent } from './list-purchase-mytables/list-purchase-mytables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard, AuthInterceptor } from "@sisitech/ngxs-auth"

import { environment } from 'src/environments/environment';
import { ViewPurchaseComponent } from "./view-purchase/ViewPurchaseComponent";
import { AddPurchaseProductMyformComponent } from './view-purchase/purchase-product/add-purchase-product-myform/add-purchase-product-myform.component';
import { ListPurchaseProductMyTablesComponent } from './view-purchase/purchase-product/list-purchase-product-mytables/list-purchase-product-mytables.component';

const authConfig = {
  APIEndpoint: environment.APIEndpoint,
  version: "api/v1",
  clientId: environment.clientId,
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PurchaseRoutes),
    MyformModule.forChild(authConfig),
    TablesModule.forChild(authConfig),
  ],
  declarations: [AddPurchaseMyformComponent,
    AddPurchaseProductMyformComponent,
    ListPurchaseProductMyTablesComponent,
    ListPurchaseMyTablesComponent, ViewPurchaseComponent],
  providers: [TablesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class PurchasesModule { }
