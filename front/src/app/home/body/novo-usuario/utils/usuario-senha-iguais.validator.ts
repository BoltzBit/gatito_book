import { AbstractControl } from "@angular/forms";
import { Usuario } from "../models";

export function usuarioSenhaIguaisValidator(control: AbstractControl) {
    const novoUsuario = control.getRawValue() as Usuario;

    if (novoUsuario.userName.trim() + novoUsuario.password.trim()) {
        return novoUsuario.userName !== novoUsuario.password ? null : { senhaIgualUsuario: true }
    }

    return null;
}
