import { Directive, Attribute } from '@angular/core';
import { Subscription } from "rxjs";
import { Validator, NG_VALIDATORS, FormControl } from "@angular/forms";

@Directive({
  selector: '[confirmador]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: ConfirmadorDirective,
      multi: true,
    }
  ]
})
export class ConfirmadorDirective implements Validator {

  constructor(@Attribute("confirmador") public clave: string) {

  }
  validate(formulario: FormControl) {
    const contra = formulario.root.get(this.clave)
    const validador = formulario
    if (validador.value === null) {
      return null
    }
    if (contra) {
      const subs: Subscription = contra.valueChanges.subscribe(() => {
        validador.updateValueAndValidity()
        subs.unsubscribe()
      })
    }
    return contra && contra.value !== validador.value?{confirmador:true}:null

  }
}
