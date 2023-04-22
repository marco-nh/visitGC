import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataServices } from '../data.services';
import {FormControl,FormGroup, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private dataService: DataServices){

  }
  user: User ={
    email: '',
    nombre: '',
    password: '',
    confirmPassword: '',
    language: ''
  }

  users: User[]=[];
  passwordsIguales: boolean = true;
  correoValido: boolean = true;
  tamNombre: boolean = true;
  tamContra: boolean = true;
  misContra: boolean = true;
  onSubmit(){
    /* Control de tamaño y verificación de correos con FormControl*/
    const controlEmail = new FormControl(this.user.email,Validators.email)

    const controltamNombre = new FormControl(this.user.nombre,Validators.compose([Validators.minLength(2),Validators.maxLength(20)]));
    const controltamContra = new FormControl(this.user.password,Validators.compose([Validators.minLength(8),Validators.maxLength(30)]));
    const controlmisContra = new FormControl(this.user.password,Validators.pattern(this.user.confirmPassword));

    this.correoValido = !controlEmail.hasError('email');
    this.tamNombre = !controltamNombre.hasError('minlength') && !controltamNombre.hasError('maxlength');
    this.tamContra = !controltamContra.hasError('minlength') && !controltamContra.hasError('maxlength');
    this.misContra = !controlmisContra.hasError('pattern');
    console.log(controlmisContra.errors)

    if(controlmisContra.errors != null){
      this.passwordsIguales=false;
      return;
    }
    if(controlEmail.errors != null){
      return
    }
    if(controltamNombre.errors != null){
      return;
    }
    if(controltamContra.errors != null){
      return;
    }





    this.users.push(this.user);
    this.dataService.guardarUsuarios(this.users);
    this.dataService.guardarCreedencialesUsuarios(this.user.email,this.user.password);
    console.log(this.user);
    this.user = {
      email: '',
      nombre: '',
      password: '',
      confirmPassword: '',
      language: '',
    };


  }
}

