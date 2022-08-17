import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './body/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './body/novo-usuario/novo-usuario.component';

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
        MensagemModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
