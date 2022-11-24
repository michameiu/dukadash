import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesModule, TablesService } from '@sisitech/tables'
import { MyformModule } from '@sisitech/myform'
import { AddProductMyformComponent } from './add-product-myform/add-product-myform.component';
import { ProductRoutes } from './product.routing';
import { ListProductMyTablesComponent } from './list-product-mytables/list-product-mytables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard, AuthInterceptor } from "@sisitech/ngxs-auth"
import { authConfig } from '../app.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    MyformModule.forChild(authConfig),
    TablesModule.forChild(authConfig),
  ],
  declarations: [AddProductMyformComponent, ListProductMyTablesComponent],
  providers: [TablesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class ProductsModule { }
