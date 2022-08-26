import { Injectable } from '@angular/core';
import { Token } from '../token.service';
import jwt_decode from 'jwt-decode';
import { Usuario } from '../model/usuario';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private _usuarioSubject = new BehaviorSubject<Usuario>({});

    constructor(private _tokenService: Token) {
        if(this._tokenService.possuiToken()){
            this.decodificaJWT();
        }
    }

    private decodificaJWT(): void {
        const token = this._tokenService.retornaToken();

        const usuario = jwt_decode(token) as Usuario;

        this._usuarioSubject.next(usuario);
    }

    public retornaUsuario(): Observable<Usuario> {
        return this._usuarioSubject.asObservable();
    }

    public salvaToken(token: string): void {
        this._tokenService.salvaToken(token);

        this.decodificaJWT();
    }

    public logout(): void{
        this._tokenService.excluiToken();
        this._usuarioSubject.next({});
    }

    public estaLogado(): boolean{
        return this._tokenService.possuiToken();
    }
}
