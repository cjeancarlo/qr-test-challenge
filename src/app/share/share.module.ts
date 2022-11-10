import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
const MATERIAL: any[] = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...MATERIAL],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...MATERIAL]


})
export class SharedModule { }
