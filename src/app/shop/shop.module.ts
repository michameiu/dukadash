import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesModule, TablesService } from '@sisitech/tables'
import { MyformModule } from '@sisitech/myform'
import { AddShopMyformComponent } from './add-shop-myform/add-shop-myform.component';
import { ShopRoutes } from './shop.routing';
import { ListShopMyTablesComponent } from './list-shop-mytables/list-shop-mytables.component';
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
    RouterModule.forChild(ShopRoutes),
    MyformModule.forChild(authConfig),
    TablesModule.forChild(authConfig),
  ],
  declarations: [AddShopMyformComponent, ListShopMyTablesComponent],
  providers: [TablesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class ShopsModule { }
