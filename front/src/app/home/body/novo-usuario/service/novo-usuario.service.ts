import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormUsuario } from '../models';

@Injectable({
    providedIn: 'root'
})
export class NovoUsuarioService {

    constructor(private _http: HttpClient) { }

    public cadastraNovoUsuario(usuario: FormUsuario): Observable<FormUsuario>{
        return this._http.post<FormUsuario>('http://localhost:3000/user/signup', usuario);
    }

    public verificaSeUsuarioExiste(nomeUsuario: string): Observable<boolean>{
        return this._http.get<boolean>(`http://localhost:3000/user/exists/${nomeUsuario}`);
    }
}
