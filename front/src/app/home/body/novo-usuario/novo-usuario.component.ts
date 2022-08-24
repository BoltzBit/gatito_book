import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from './models';
import { NovoUsuarioService, UsuarioExiste } from './service';
import { minusculoValidator } from './utils/minusculo.validator';
import { usuarioSenhaIguaisValidator } from './utils/usuario-senha-iguais.validator';

@Component({
    selector: 'app-novo-usuario',
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
        // this.novoUsuarioForm = new FormGroup(
        //     {
        //         email: new FormControl<string | null>(null),
        //         fullName: new FormControl<string | null>(null),
        //         password: new FormControl<string | null>(null),
        //         userName: new FormControl<string | null>(null)
        //     }
        // );


        // this.novoUsuarioForm = this._formBuilder.group({
        //     email: ['', [Validators.required, Validators.email]],
        //     fullName: ['', [Validators.required, Validators.minLength(
                
        //         4)]],
        //     userName: ['', [minusculoValidator]],
        //     password: ['']
        // },
        // {
        //     validators: [usuarioSenhaIguaisValidator]
        // });

        this.novoUsuarioForm = this._formBuilder.group({
            email: new FormControl<string | null>('', [Validators.required, Validators.email]),
            fullName: new FormControl<string | null>('', [Validators.required, Validators.minLength(4)]),
            userName: new FormControl<string | null>('', [minusculoValidator], [this._usuarioExiste.validate()]),
            password: ['']
        },{
            validators: [usuarioSenhaIguaisValidator]
        });
    }

    public cadastrar(): void {
        debugger;
        if (this.novoUsuarioForm.valid) {
            const usuario = this.novoUsuarioForm.getRawValue() as Usuario;

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
