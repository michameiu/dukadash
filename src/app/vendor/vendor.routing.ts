import { Routes } from '@angular/router';
import { AddVendorMyformComponent } from './add-vendor-myform/add-vendor-myform.component';
import { ListVendorMyTablesComponent } from './list-vendor-mytables/list-vendor-mytables.component';


// Copy to app.routing
`
{
  path:"vendors",
  loadChildren:()=>import('./vendor/vendor.module').then(m=>m.VendorsModule)
}
`
export const VendorRoutes: Routes = [
  {
    path: 'add-vendor',
    component: AddVendorMyformComponent
  },
  {
    path: 'list-vendor',
    component: ListVendorMyTablesComponent
  },
  {
    path:"**",
    redirectTo:"list-vendor"
  }
];
