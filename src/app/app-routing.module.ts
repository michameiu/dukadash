import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "shops",
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopsModule)
  },
  {
    path: "branches",
    loadChildren: () => import('./branch/branch.module').then(m => m.BranchsModule)
  },
  {
    path: "products",
    loadChildren: () => import('./product/product.module').then(m => m.ProductsModule)
  },
  {
    path: "purchases",
    loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchasesModule)
  },
  {
    path: "vendors",
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorsModule)
  },
  {
    path: "sales",
    loadChildren: () => import('./sale/sale.module').then(m => m.SalesModule)
  },
  {
    path: "**",
    redirectTo: "shops"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
