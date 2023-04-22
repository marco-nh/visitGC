import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase-config';

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    constructor(){}

    async iniciarSesion(email: string, password:string){
        const auth=getAuth(app);
        try{
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        }catch(error){
            console.log('Error en la autentificacion: ', error);
            return false
        }
    }
}