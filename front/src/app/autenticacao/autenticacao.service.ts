import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {
    constructor(
        private httpClient: HttpClient,
        private _usuarioService: UsuarioService) { }

    public autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
        return this.httpClient
            .post('http://localhost:3000/user/login', {
                userName: usuario,
                password: senha
            }, { observe: 'response' })
            .pipe(
                tap<any>((res) => {
                    const authToken = res.headers.get('x-access-token') ?? '';
                    this._usuarioService.salvaToken(authToken);
                })
            );
    }
}
