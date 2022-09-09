import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animais } from '../models/animal';

@Component({
    selector: 'app-lista-animais',
    templateUrl: './lista-animais.component.html',
    styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {
    public animais!: Animais;

    constructor(
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(param => {
            this.animais = this._activatedRoute.snapshot.data['animais'];
        });
    }

}
