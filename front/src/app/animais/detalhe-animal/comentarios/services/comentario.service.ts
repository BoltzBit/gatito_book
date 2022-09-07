import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from '../models/comentario.model';

const API = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class ComentarioService {

    constructor(private _http: HttpClient) { }

    public buscaComentario(animalId: number): Observable<Comentarios> {
        return this._http.get<Comentarios>(`${API}/photos/${animalId}/comments`);
    }

    public incluiComentario(animalId: number, commentText: string): Observable<Comentario> {
        return this._http.post<Comentario>(`${API}/photos/${animalId}/comments`, { commentText });
    }
}
