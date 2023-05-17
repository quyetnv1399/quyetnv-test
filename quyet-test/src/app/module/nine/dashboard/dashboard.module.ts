import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './view/dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
