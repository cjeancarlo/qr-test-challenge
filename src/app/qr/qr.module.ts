import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrComponent } from './components/qr/qr.component';
import { RouterModule, Routes } from "@angular/router";
import { QrCodeModule } from 'ng-qrcode';
import { QrService } from './services/qr.service';
import {  SharedModule } from '../share/share.module';
import { QrFormComponent } from './components/qr-form/qr-form.component';

export const routes: Routes = [
  {
    path: '',
    component: QrComponent,
  },
];

@NgModule({
  providers:[QrService],
  declarations: [QrComponent, QrFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    QrCodeModule,
    CommonModule
  ]
})
export class QrModule { }
