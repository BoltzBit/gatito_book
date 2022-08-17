import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models';
import { NovoUsuarioService } from './service';

@Component({
    selector: 'app-novo-usuario',
    templateUrl: './novo-usuario.component.html',
    styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {
    public novoUsuarioForm!: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _novoUsuarioService: NovoUsuarioService) {
    }

    ngOnInit(): void {
        this.novoUsuarioForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            fullName: ['', [Validators.required, Validators.minLength(4)]],
            userName: [''],
            password:['']
        });
    }

    public cadastrar(): void{
        const usuario = this.novoUsuarioForm.getRawValue() as Usuario;

        console.log(usuario);
    }

}
