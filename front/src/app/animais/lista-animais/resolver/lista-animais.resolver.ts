import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';

@Injectable({
    providedIn: 'root'
})
export class ListaAnimaisResolver implements Resolve<Animais> {
    constructor(
        private _usuarioService: UsuarioService,
        private _animaisService: AnimalService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animais> {
        return this._usuarioService.retornaUsuario().pipe(
            switchMap((usuario) => {
                const userName = usuario.name ?? '';
                return this._animaisService.listaDoUsuario(userName);
            }),
            take(1)
        );
    }
}
