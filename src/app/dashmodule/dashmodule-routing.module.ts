import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';
import { AddServicesComponent } from './add-services/add-services.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
const routes: Routes = [
  {
    path:'pages',
    component:HomeComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'addProduct',
        component:AddProductComponent
      },
      {
        path:'getProduct',
        component:GetProductComponent
      },
      {
        path:'purchaseBill',
        component:PurchaseComponent
      },
      {
        path:'saleBill',
        component:SaleComponent
      },
      {
        path:'addServices',
        component:AddServicesComponent
      },
      {
        path:'addcustomer',
        component:AddcustomerComponent
      },
      {
        path:'addsuplier',
        component:AddsupplierComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashmoduleRoutingModule { }
