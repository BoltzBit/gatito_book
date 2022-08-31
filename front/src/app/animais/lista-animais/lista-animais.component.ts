import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
    selector: 'app-lista-animais',
    templateUrl: './lista-animais.component.html',
    styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {
    public animais$!: Observable<Animais>;
    
    constructor(
        private usuarioService: UsuarioService,
        private animaisService: AnimalService
    ) { }

    ngOnInit(): void {
        this.animais$ = this.usuarioService.retornaUsuario().pipe(
            switchMap((usuario) => {
                const userName = usuario.name ?? '';
                return this.animaisService.listaDoUsuario(userName);
            }) //trocar de fluxo, de usuario para animais
        );
    }

}
