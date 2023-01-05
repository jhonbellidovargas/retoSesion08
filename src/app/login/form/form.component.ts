import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  usuario = "Angular";
  contrasenia = "123456";
  resultado = false;
  mensaje="";

  Validar(user:string, contrasenia:string){
    if(user == this.usuario){
      if(contrasenia== this.contrasenia){
        this.resultado = true;
        this.mensaje ="Usuario correcto";
      }else{
        this.resultado = false;
        this.mensaje ="Credenciales incorrectas, intentelo nuevamente";
      }
    }else{
      this.resultado = false;
      this.mensaje ="Credenciales incorrectas, intentelo nuevamente";
    }
  }
}

