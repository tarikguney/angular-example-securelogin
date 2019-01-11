import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecureLoginComponent } from './secure-login.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [SecureLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialDesignModule
  ]
})

export class SecureLoginModule { }
