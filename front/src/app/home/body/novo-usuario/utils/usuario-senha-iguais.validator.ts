import { AbstractControl } from "@angular/forms";
import { FormUsuario } from "../models";

export function usuarioSenhaIguaisValidator(control: AbstractControl) {
    const novoUsuario = control.getRawValue() as FormUsuario;

    if (novoUsuario.userName.trim() + novoUsuario.password.trim()) {
        return novoUsuario.userName !== novoUsuario.password ? null : { senhaIgualUsuario: true }
    }

    return null;
}
