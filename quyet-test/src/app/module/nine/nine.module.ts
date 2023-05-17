import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NineRoutes } from './nine.routing';
import { NineLayoutModule } from './nine-layout/nine-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NineRoutes,
    NineLayoutModule,
  ],
  declarations: [],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
})
export class NineModule { }
