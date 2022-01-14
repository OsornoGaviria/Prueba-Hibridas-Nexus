import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Servicios/generalServices.service';
import { ApiService } from '../../Servicios/api.service';
import { CuentaTercero } from '../../Modelos/modelos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto-tercero',
  templateUrl: './nuevo-producto-tercero.page.html',
  styleUrls: ['./nuevo-producto-tercero.page.scss'],
})
export class NuevoProductoTerceroPage implements OnInit {

  tipo; entidad;numero; idUsuario;saldo; nombre; alias; cuentas;T=0
  constructor(private generalServices:GeneralService,
    private apiService:ApiService,
    private router: Router) { }

  ngOnInit() {
    this.idUsuario=window.localStorage['IdUsuario'];
  }

  validaCuenta(){
  console.log("Entro")
    this.apiService.CuentasOtros(this.idUsuario).subscribe(res=>{

      this.cuentas=res; 
      console.log(res)
      for(var i=0; i< this.cuentas.length; i++){
      
       if(this.cuentas[i]['numeroCuenta']==this.numero ){
         console.log(this.cuentas[i]['numeroCuenta'])
         console.log(this.numero)
         this.generalServices.AlertaError("Ya tienes una cuenta registrada con este numero");
          this.T=1;
       }
      }
    })
  }


  registroCuenta(){
    if(this.nombre==undefined || this.nombre==null){
      this.generalServices.AlertaError("Ingrese el nombre dle titular de la cuenta");
    }else if(this.alias==undefined || this.alias==null){
      this.generalServices.AlertaError("Alias para la cuenta");
    }else if(this.tipo==undefined || this.tipo==null){
      this.generalServices.AlertaError("Seleccione tipo de cuenta");
    }else if(this.entidad==undefined || this.entidad==null){
      this.generalServices.AlertaError("Seleccione la entidad a la cual pertenece la cuenta");
    }else if(this.numero==undefined || this.numero==null){
     this.generalServices.AlertaError("Ingrese el número de la cuenta");
    }else {
     
      const idcuenta=  Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);

      const CuentaTercero : CuentaTercero={
        fechaRegistro: new Date,
        entidadFinanciera: this.entidad,
        estadoCuenta: '1',
        numeroCuenta:  this.numero,
        tipoCuenta: this.tipo,
        idCuenta: idcuenta,
        nombreTitular: this.nombre,
        aliasCuenta: this.alias
      }

      this.apiService.registroCT(this.idUsuario, idcuenta, CuentaTercero).then(res=>{
        if(res=="true"){
          this.generalServices.AlertExito('Cuenta registrada exitosamente');
          this.router.navigate(['/productos-terceros'])
        }
      })

    }
}
}
