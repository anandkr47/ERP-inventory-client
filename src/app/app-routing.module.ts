import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { WLoginComponent } from './w-login/w-login.component';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'user',loadChildren:()=>import('./dashmodule/dashmodule.module').then(m=>m.DashmoduleModule)
  },
  {
    path:'wlogin',component:WLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
