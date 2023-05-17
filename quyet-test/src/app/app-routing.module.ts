import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '' , component: AppComponent, children: [
    {path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)},
    {path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
