import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NineLayoutComponent } from './view/nine-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NineLayoutRoutes } from './nine-layout.routing';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { I18nModule } from 'src/app/i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NineLayoutRoutes,
    I18nModule
  ],
  declarations: [NineLayoutComponent]
})
export class NineLayoutModule { }
