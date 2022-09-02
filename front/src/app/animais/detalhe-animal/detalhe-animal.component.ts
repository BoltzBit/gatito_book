import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
    selector: 'app-detalhe-animal',
    templateUrl: './detalhe-animal.component.html',
    styleUrls: ['./detalhe-animal.component.scss']
})
export class DetalheAnimalComponent implements OnInit {
    @Input() animal$!: Observable<Animal>;

    private _animalId!: number;

    constructor(
        private _animalService: AnimalService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    ngOnInit(): void {
        this._animalId = this._activatedRoute.snapshot.params['animalId'];

        this.animal$ = this._animalService.buscaPorId(this._animalId);
    }

    public curtir(): void {
        this._animalService.curtir(this._animalId)
            .subscribe({
                next: (curtida) => {
                    this.animal$ = this._animalService.buscaPorId(this._animalId);
                }
            });
    }

    public excluir(): void {
        this._animalService.excluiAnimal(this._animalId)
            .subscribe({
                next: () => {
                    this._router.navigate(['/animais/'])
                }
                ,
                error: (error) => {
                    console.log(error);
                }
            })
    }

}
