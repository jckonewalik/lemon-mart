import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'manager', loadChildren: './manager/manager.module#ManagerModule'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'pos', loadChildren: './pos/pos.module#PosModule'},
  {path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule'},
  {path: 'login', component: LoginComponent },
  {path: 'login/:redirectUrl', component: LoginComponent},
  {path: '**', component: PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
