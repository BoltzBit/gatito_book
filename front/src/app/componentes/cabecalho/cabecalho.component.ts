import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
    selector: 'app-cabecalho',
    templateUrl: './cabecalho.component.html',
    styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {
    public user$ = this._usuarioService.retornaUsuario();

    constructor(
        private _usuarioService: UsuarioService,
        private router: Router) { }

    public logout(): void{
        this._usuarioService.logout();
        this.router.navigate(['']);
    }
}
