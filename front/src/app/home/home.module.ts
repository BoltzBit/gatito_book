import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './body/login/login.component';
import { FormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './body/novo-usuario/novo-usuario.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BodyComponent,
        LoginComponent,
        NovoUsuarioComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class HomeModule { }
