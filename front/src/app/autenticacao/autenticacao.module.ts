import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './interceptor/autenticacao.interceptor';



@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AutenticacaoInterceptor,
            multi: true //para posteriormente ter mais interceptors
        }
    ]
})
export class AutenticacaoModule { }
