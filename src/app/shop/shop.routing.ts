import { Routes } from '@angular/router';
import { AddShopMyformComponent } from './add-shop-myform/add-shop-myform.component';
import { ListShopMyTablesComponent } from './list-shop-mytables/list-shop-mytables.component';

export const ShopRoutes: Routes = [
  {
    path: 'add-shop',
    component: AddShopMyformComponent
  },
  {
    path: 'list-shop',
    component: ListShopMyTablesComponent
  },
  {
    path:"**",
    redirectTo:"list-shop"
  }
];
