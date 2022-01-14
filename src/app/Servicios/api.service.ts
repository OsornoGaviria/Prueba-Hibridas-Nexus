import { Injectable } from '@angular/core';
import  { AngularFirestore}  from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders   } from '@angular/common/http';
import firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private BD : AngularFirestore,
  ) { }


  verUsuario(idUsuario){
    return  this.BD.collection('Usuarios').doc(idUsuario).valueChanges();
  }

  cuentasPropias(idUsuario){
    return  this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasPropias').valueChanges();
  }

  CuentasOtros(idUsuario){
    return  this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasOtros').valueChanges();
  }


  registroCP(idUsuario, idCuenta, infoCuenta)
  {
    return new Promise((resolve, reject)=>{
      this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasPropias').doc(idCuenta).set(infoCuenta).then(
       res=>{ resolve ("true");
      }).catch(err=>  reject(err))
        })
  }

  registroCT(idUsuario, idCuenta, infoCuenta)
  {
    return new Promise((resolve, reject)=>{
      this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasOtros').doc(idCuenta).set(infoCuenta).then(
       res=>{ resolve ("true");
      }).catch(err=>  reject(err))
        })
  }


  detallesC(idUsuario, idCuenta){
    return  this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasPropias').doc(idCuenta).valueChanges();
  }

  detallesO(idUsuario, idCuenta){
    return  this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasOtros').doc(idCuenta).valueChanges();
  }

  regMovimientoCP(idUsuario, IdCuenta, Saldo, Data){
    return new Promise((resolve, reject )=>{
      this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasPropias').doc(IdCuenta).ref.update({ 
        Movimientos: firebase.firestore.FieldValue.arrayUnion(Data),
        saldoCuenta:Saldo
    }).then(res=>{
      resolve("true")
    })
  })

  }


  regMovimientoOt(idUsuario, IdCuenta, Saldo, Data){
    return new Promise((resolve, reject )=>{
      this.BD.collection('Usuarios').doc(idUsuario).collection('cuentasOtros').doc(IdCuenta).ref.update({ 
        Movimientos: firebase.firestore.FieldValue.arrayUnion(Data),
        saldoCuenta:Saldo
    }).then(res=>{
      resolve("true")
    })
  })

  }
  
}



