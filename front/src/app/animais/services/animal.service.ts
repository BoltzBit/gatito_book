import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Token } from "src/app/autenticacao/token.service";
import { environment } from "src/environments/environment";
import { Animais, Animal } from "../models/animal";

const API = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class AnimalService{
    constructor(
        private _http: HttpClient,
        private _tokenService: Token){}

    public listaDoUsuario(nomeDoUsuario: string): Observable<Animais>{
        const token = this._tokenService.retornaToken();
        const headers = new HttpHeaders().append('x-access-token', token);

        return this._http.get<Animais>(`${API}/${nomeDoUsuario}/photos`,{
            headers
        });
    }

    public buscaPorId(animalId: number): Observable<Animal>{
        const token = this._tokenService.retornaToken();
        const headers = new HttpHeaders().append('x-access-token', token);

        return this._http.get<Animal>(`${API}/photos/${animalId}`, { headers });
    }
}