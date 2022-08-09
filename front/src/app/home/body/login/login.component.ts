import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-body-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public usuario: string = '';
    public senha: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    public login(): void {
        console.log(this.usuario);
        console.log(this.senha);
    }
}
