import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
    selector: 'app-home-body-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public usuario: string = '';
    public senha: string = '';

    constructor(
        private _authService: AutenticacaoService,
        private _router: Router) { }

    ngOnInit(): void {
    }

    public login(): void {
        this._authService.autenticar(this.usuario, this.senha)
            .subscribe({
                next: () => this._router.navigate(['animais']),
                error: (err) => {
                    alert("Usuário ou senha inválidos!")
                    console.log(err);
                }
            });
    }
}
