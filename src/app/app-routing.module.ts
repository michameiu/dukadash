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
    path: "**",
    redirectTo: "shops"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
