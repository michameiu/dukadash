import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesModule, TablesService } from '@sisitech/tables'
import { MyformModule } from '@sisitech/myform'
import { PurchaseProductRoutes } from './purchase-product.routing';
import { ListPurchaseProductMyTablesComponent } from './list-purchase-product-mytables/list-purchase-product-mytables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard, AuthInterceptor } from "@sisitech/ngxs-auth"

import { environment } from 'src/environments/environment'

const authConfig = {
  APIEndpoint: environment.APIEndpoint,
  version: "api/v1",
  clientId: environment.clientId,
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PurchaseProductRoutes),
    MyformModule.forChild(authConfig),
    TablesModule.forChild(authConfig),
  ],
  declarations: [],
  providers: [TablesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class PurchaseProductsModule { }
