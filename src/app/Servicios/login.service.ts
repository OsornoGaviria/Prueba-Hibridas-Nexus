import { Injectable } from '@angular/core';
import  {AngularFireAuth } from '@angular/fire/auth'
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import  { AngularFirestore}  from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private AFauth: AngularFireAuth, 
    public router : Router, private Conexion : AngularFirestore) { }


  LoginUsuario(email:string , password:string)
    {
      console.log(email)
      return new Promise((resolve, rejected) =>{
        this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logOut(){
    this.AFauth.signOut().then(
      ()=>{
        this.router.navigate(['/login']);
      }
    )
  }



}
