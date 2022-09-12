import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-novo-animal',
    templateUrl: './novo-animal.component.html',
    styleUrls: ['./novo-animal.component.scss']
})
export class NovoAnimalComponent implements OnInit {
    public formularioAnimal!: FormGroup;
    public file!: File;
    public preview!: string;
    public percentualConcluido: number = 0;

    constructor() { }

    ngOnInit(): void {
    }

    public upload(): void{

    }

    public gravarArquivo(arquivo: any): void{

    }
}
