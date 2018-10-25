import { AbstractControl } from "@angular/forms";

export function ValidateConfirmPassword(control: AbstractControl){

if (!control.root.value){
    return null;
}
    if(control.root.value == control.root.value.senha){
        return null;
    }else{
        return {ValidateConfirmPassword: true}

    }
}
