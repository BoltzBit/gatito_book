import { Injectable } from "@angular/core";

const KEY = 'token';

@Injectable({
    providedIn: 'root'
})

export class Token {
    public retornaToken(): string {
        return localStorage.getItem(KEY) ?? '';
    }

    public salvaToken(token: string): void {
        localStorage.setItem(KEY, token);
    }

    public excluiToken(): void{
        localStorage.removeItem(KEY);
    }

    public possuiToken(): boolean{
        return !!this.retornaToken();
    }
}
