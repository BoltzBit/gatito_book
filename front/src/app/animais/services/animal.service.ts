import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { Token } from "src/app/autenticacao/token.service";
import { environment } from "src/environments/environment";
import { Animais, Animal } from "../models/animal";

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
    providedIn: 'root'
})

export class AnimalService {
    constructor(
        private _http: HttpClient,
        private _tokenService: Token) { }

    public listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
        return this._http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
    }

    public buscaPorId(animalId: number): Observable<Animal> {
        return this._http.get<Animal>(`${API}/photos/${animalId}`);
    }

    public excluiAnimal(animalId: number): Observable<Animal> {
        return this._http.delete<Animal>(`${API}/photos/${animalId}`);
    }

    public curtir(animalId: number): Observable<boolean> {
        return this._http.post(`${API}/photos/${animalId}/like`, {},
            { observe: 'response' }
        ).pipe(
            map(() => true),
            catchError((error) => {
                return error.status === NOT_MODIFIED ? of(false) : throwError(() => error)
            })
        );
    }
}