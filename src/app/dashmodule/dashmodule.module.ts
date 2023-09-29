import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashmoduleRoutingModule } from './dashmodule-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { AddProductComponent } from './add-product/add-product.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { GetProductComponent } from './get-product/get-product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component'


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    AddProductComponent,
    GetProductComponent,
    PurchaseComponent,
    SaleComponent,
    AddServicesComponent,
    AddcustomerComponent,
    AddsupplierComponent
  ],
  imports: [
    CommonModule,
    DashmoduleRoutingModule,
    MatIconModule,ReactiveFormsModule,
    FormsModule,HttpClientModule
  ]
})
export class DashmoduleModule { }
