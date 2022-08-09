import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './body/login/login.component';

@NgModule({
  declarations: [
    BodyComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
