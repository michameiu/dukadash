import { Routes } from '@angular/router';
import { AddProductMyformComponent } from './add-product-myform/add-product-myform.component';
import { ListProductMyTablesComponent } from './list-product-mytables/list-product-mytables.component';

export const ProductRoutes: Routes = [
  {
    path: 'add-product',
    component: AddProductMyformComponent
  },
  {
    path: 'list-product',
    component: ListProductMyTablesComponent
  },
  {
    path:"**",
    redirectTo:"list-product"
  }
];
