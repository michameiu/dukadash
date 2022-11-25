import { Routes } from '@angular/router';
import { AddPurchaseMyformComponent } from './add-purchase-myform/add-purchase-myform.component';
import { ListPurchaseMyTablesComponent } from './list-purchase-mytables/list-purchase-mytables.component';


// Copy to app.routing
`
{
  path:"purchases",
  loadChildren:()=>import('./purchase/purchase.module').then(m=>m.PurchasesModule)
}
`
export const PurchaseRoutes: Routes = [
  {
    path: 'add-purchase',
    component: AddPurchaseMyformComponent
  },
  {
    path: 'list-purchase',
    component: ListPurchaseMyTablesComponent
  },
  {
    path:"**",
    redirectTo:"list-purchase"
  }
];
