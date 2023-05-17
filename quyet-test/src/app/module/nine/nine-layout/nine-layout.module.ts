import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NineLayoutComponent } from './nine-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NineLayoutRoutes } from './nine-layout.routing';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NineLayoutRoutes
  ],
  declarations: [NineLayoutComponent]
})
export class NineLayoutModule { }
