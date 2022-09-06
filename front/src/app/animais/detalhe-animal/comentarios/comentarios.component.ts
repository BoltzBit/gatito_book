import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comentarios } from './models/comentario.model';
import { ComentarioService } from './services/comentario.service';

@Component({
    selector: 'app-comentarios',
    templateUrl: './comentarios.component.html',
    styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
    @Input() animalId!: number;

    public comentarios$!: Observable<Comentarios>;
    public comentarioForm!: FormGroup;

    constructor(
        private _comentarioService: ComentarioService,
        private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.comentarios$ = this._comentarioService.buscaComentario(this.animalId);

        this.comentarioForm = this._formBuilder.group({
            comentario: new FormGroup<string | null>('', [Validators.maxLength(300)])
        });
    }

    public gravar(): void {
        const comentario = this.comentarioForm.get('comentario')?.value;

        this.comentarios$ = this._comentarioService.incluiComentario(this.animalId, comentario)
            .pipe(
                switchMap(() => {
                    return this._comentarioService.buscaComentario(this.animalId)
                }),
                tap(() => {
                    this.comentarioForm.reset(),
                        alert('Comentario Salvo com sucesso!')
                })
            );
    }
}
