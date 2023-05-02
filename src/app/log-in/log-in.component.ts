import {Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServices } from '../data.services';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private dataService: DataServices){}
  emailusuario = new EventEmitter<string>();


  ngOnInit(): void{

  }

  login(form:NgForm){
    const email=form.value.email

    const password=form.value.password

    this.dataService.login(email, password);
    console.log("iniciado");
    this.emailusuario.emit(email);
    console.log(email);
  }


}
