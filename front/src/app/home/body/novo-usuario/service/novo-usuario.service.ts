import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models';

@Injectable({
    providedIn: 'root'
})
export class NovoUsuarioService {

    constructor(private _http: HttpClient) { }

    public cadastraNovoUsuario(usuario: Usuario): Observable<Usuario>{
        return this._http.post<Usuario>('http://localhost:3000/user/signup', usuario);
    }
}