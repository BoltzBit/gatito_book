import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormUsuario } from '../models';

const API = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class NovoUsuarioService {

    constructor(private _http: HttpClient) { }

    public cadastraNovoUsuario(usuario: FormUsuario): Observable<FormUsuario>{
        return this._http.post<FormUsuario>(`${API}/user/signup`, usuario);
    }

    public verificaSeUsuarioExiste(nomeUsuario: string): Observable<boolean>{
        return this._http.get<boolean>(`${API}/user/exists/${nomeUsuario}`);
    }
}
