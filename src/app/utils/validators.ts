import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const noHomeroValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  console.log(control);

  if (typeof control.value === 'string' && control.value.toLowerCase().includes('homero')) {
    
    alert('No se admiten Homeros');
    
    return {
      noHomero: true,
    };
  }

  return null;
};
