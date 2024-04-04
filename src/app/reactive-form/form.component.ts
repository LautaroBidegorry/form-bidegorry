import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { noHomeroValidator } from '../utils/validators';

@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormsComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: [''],
      lastname: ['',[noHomeroValidator]],
      email: [''],
      contraseña: [""] 
    });
  }



  get nombrecontrol (){
    return this.formulario.get("name")
  }

  get apellidocontrol (){
    return this.formulario.get("lastname")
  }

  get email (){
    return this.formulario.get("email")
  }

  get contrasenacontrol (){
    return this.formulario.get("contraseña")
  }

  onsubmit(): void {
    alert("Registro completado con éxito");
    console.log("registro completado" + JSON.stringify(this.formulario.value));
  }
}
