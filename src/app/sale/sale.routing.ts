import { Routes } from '@angular/router';
import { AddSaleMyformComponent } from './add-sale-myform/add-sale-myform.component';
import { ListSaleMyTablesComponent } from './list-sale-mytables/list-sale-mytables.component';
import { ViewSaleComponent } from './view-sale/view-sale.component';


// Copy to app.routing
`
{
  path:"sales",
  loadChildren:()=>import('./sale/sale.module').then(m=>m.SalesModule)
}
`
export const SaleRoutes: Routes = [
  {
    path: 'add-sale',
    component: AddSaleMyformComponent
  },
  {
    path: 'list-sale',
    component: ListSaleMyTablesComponent
  },
  {
    path: 'view-sale/:id',
    component: ViewSaleComponent
  },
  {
    path: "**",
    redirectTo: "list-sale"
  }
];
