import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

    constructor(private _tokenService: Token) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        
        if(this._tokenService.possuiToken()){
            const token = this._tokenService.retornaToken();
            const headers = new HttpHeaders().append('x-access-token', token);

            request = request.clone({ headers });
        }

        return next.handle(request);
    }
}
