import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient){}

    guardarUsuarios(usuarios:User[]){
        this.httpClient.put('https://visitgc-e47ab-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json',usuarios).subscribe(
            response=>console.log("Se ha guardado el usuario: " + response),
            error=>console.log("Error: " + error),
        );
        
    }

}