import { AbstractControl } from "@angular/forms";

type Minusculo = {
    minusculo: boolean
}

export function minusculoValidator(control: AbstractControl): Minusculo {
    const valor = control.value as string;

    if (valor !== valor.toLowerCase()) {
        return { minusculo: true };
    } else {
        return { minusculo: false };
    }
}
