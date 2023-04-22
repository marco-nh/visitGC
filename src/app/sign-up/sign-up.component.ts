import { Component } from '@angular/core';
import { User } from '../user.model';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private dataServide: DataServices){

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

  onSubmit(){
    if(this.user.password !== this.user.confirmPassword){
      this.passwordsIguales=false;
      return;
    }
    this.passwordsIguales=true;

    this.users.push(this.user);
    this.dataServide.guardarUsuarios(this.users);
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

