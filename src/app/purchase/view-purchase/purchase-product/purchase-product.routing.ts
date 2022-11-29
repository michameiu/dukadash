import { Routes } from '@angular/router';
import { AddPurchaseProductMyformComponent } from './add-purchase-product-myform/add-purchase-product-myform.component';
import { ListPurchaseProductMyTablesComponent } from './list-purchase-product-mytables/list-purchase-product-mytables.component';


// Copy to app.routing
`
{
  path:"purchase-products",
  loadChildren:()=>import('./purchase-product/purchase-product.module').then(m=>m.PurchaseProductsModule)
}
`
export const PurchaseProductRoutes: Routes = [
  {
    path: 'add-purchase-product',
    component: AddPurchaseProductMyformComponent
  },
  {
    path: 'list-purchase-product',
    component: ListPurchaseProductMyTablesComponent
  },
  {
    path:"**",
    redirectTo:"list-purchase-product"
  }
];
