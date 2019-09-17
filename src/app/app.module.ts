import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { AddProviderComponent } from './Providers/add-provider/add-provider.component';
import { AddProductComponent } from './Products/add-product/add-product.component';
import { SearchProductComponent } from './Products/search-product/search-product.component';
import { DeleteProductComponent } from './Products/delete-product/delete-product.component';
import { ModifyProductComponent } from './Products/modify-product/modify-product.component';

import { DataService } from './data.service';

const Rutas: Routes = [
  {
    path: '', redirectTo: '/user-login', pathMatch: 'full'
  },
  {
    path: 'user-login', component:UserLoginComponent
  },
  {
    path: 'admin-login', component:AdminLoginComponent
  },
  {
    path: 'user-module', component:UserModuleComponent,
    children:[
      {
        path: 'list-products', component:ProductListComponent
      },
      {
        path: 'search-product', component: SearchProductComponent
      },
    ]
  },
  {
    path: 'admin-module', component:AdminModuleComponent,
    children:[
      {
        path: 'list-products', component:ProductListComponent
      },
      {
        path: 'add-product', component:AddProductComponent
      },
      {
        path: 'delete-product', component:DeleteProductComponent
      },
      {
        path: 'modify-product', component: ModifyProductComponent
      },
      {
        path: 'search-product', component: SearchProductComponent
      },
      {
        path: 'add-provider', component: AddProviderComponent
      },
    ]
  },

]


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DeleteProductComponent,
    AdminLoginComponent,
    ModifyProductComponent,
    ProductListComponent,
    AdminModuleComponent,
    UserModuleComponent,
    AddProviderComponent,
    AddProductComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Rutas),
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
