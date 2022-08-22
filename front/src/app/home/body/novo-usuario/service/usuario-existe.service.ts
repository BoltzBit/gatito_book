import { Directive, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { switchMap, map, first } from 'rxjs/operators';
import { NovoUsuarioService } from './novo-usuario.service';

type UsuarioExistente = {
    usuarioExistente: boolean
}

@Injectable({
    providedIn: 'root'
})

export class UsuarioExiste {

    constructor(private _novoUsuarioService: NovoUsuarioService) { }

    public validate() {
        return (control: AbstractControl) => {
            return control.valueChanges.pipe(
                switchMap((nomeUsuario) =>
                    this._novoUsuarioService.verificaSeUsuarioExiste(nomeUsuario)
                ),
                map((usuarioExiste: boolean) => (
                    usuarioExiste ? { usuarioExistente: true } as UsuarioExistente : { usuarioExistente: false } as UsuarioExistente
                )),
                first()
            );
        }
    }
}
