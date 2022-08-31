import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormUsuario } from './models';
import { NovoUsuarioService, UsuarioExiste } from './service';
import { minusculoValidator } from './utils/minusculo.validator';
import { usuarioSenhaIguaisValidator } from './utils/usuario-senha-iguais.validator';

@Component({
    selector: 'app-body-novo-usuario',
    templateUrl: './novo-usuario.component.html',
    styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {
    public novoUsuarioForm!: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _novoUsuarioService: NovoUsuarioService,
        private _usuarioExiste: UsuarioExiste,
        private router: Router) {
    }

    ngOnInit(): void {
        this.novoUsuarioForm = this._formBuilder.group({
            email: new FormControl<string | null>('', [Validators.required, Validators.email]),
            fullName: new FormControl<string | null>('', [Validators.required, Validators.minLength(4)]),
            userName: new FormControl<string | null>('', [minusculoValidator], [this._usuarioExiste.validate()]),
            password: new FormControl<string | null>('')
        }, {
            validators: [usuarioSenhaIguaisValidator]
        });
    }

    public cadastrar(): void {
        debugger;
        if (this.novoUsuarioForm.valid) {
            const usuario = this.novoUsuarioForm.getRawValue() as FormUsuario;

            this._novoUsuarioService.cadastraNovoUsuario(usuario)
                .subscribe({
                    next: () => {
                        this.router.navigate(['']);
                    },
                    error: (e) => {
                        console.log(e);
                    }
                });
        }
    }

}
