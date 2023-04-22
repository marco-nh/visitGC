import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email: string;
  password:string;

  constructor(private authService: AuthService){}

  ngOnInit(): void{

  }

  onSubmit(){
    
    this.authService.iniciarSesion(this.email, this.password).then((result) =>{
      if(result){
        console.log('Se ha iniciado sesion');
      }else{
        console.log('Gol del Tenerife');
      }
    });
  }


}
