import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
    selector: 'app-animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.scss']
})

export class AnimalComponent implements OnInit {
    @Input() descricao!: string;

    @Input() set url(url: string){
        if(url.startsWith('data')){
            this._urlOriginal = url;
        }else{
            this._urlOriginal = `${API}/imgs/${url}`;
        }
    }

    public get url(): string{
        return this._urlOriginal;
    }

    private _urlOriginal: string = "";

    constructor() { }

    ngOnInit(): void {
    }

}
