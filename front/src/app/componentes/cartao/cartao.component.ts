import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-cartao',
    templateUrl: './cartao.component.html',
    styleUrls: ['./cartao.component.scss']
})
export class CartaoComponent implements OnInit {
    @Input() titulo!: string;

    constructor() { }

    ngOnInit(): void {
    }

}
