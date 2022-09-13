import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AnimalService } from '../services/animal.service';

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

    constructor(
        private _animaisService: AnimalService,
        private _formBuilder: FormBuilder,
        private _router: Router) { }

    ngOnInit(): void {
        this.formularioAnimal = this._formBuilder.group({
            file: new FormControl<File | null>(this.file, [Validators.required]),
            description: new FormControl<string | null>('', [Validators.maxLength(300)]),
            allowComments: new FormControl<boolean | null>(true, [Validators.required])
        });
    }

    public upload(): void {
        const allowComments = this.formularioAnimal.get('allowComments')?.value ?? false;
        const description = this.formularioAnimal.get('description')?.value ?? '';

        this._animaisService.upload(description, allowComments, this.file)
            .pipe(finalize(() => { this._router.navigate(['animais']) }))
            .subscribe((event: HttpEvent<any>) => {
                if (event.type === HttpEventType.UploadProgress) {
                    const total = event.total ?? 1;
                    this.percentualConcluido = Math.round(100 * event.loaded / total);
                }
            });
    }

    public gravarArquivo(arquivo: any): void {
        const [file] = arquivo?.files;
        this.file = file;

        const reader = new FileReader();
        reader.onload = (event: any) => (
            this.preview = event.target.result
        )

        reader.readAsDataURL(file);
    }
}
