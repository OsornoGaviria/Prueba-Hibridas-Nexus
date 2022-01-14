import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Servicios/generalServices.service';
import { ApiService } from '../../Servicios/api.service';
import { CuentaPropia } from '../../Modelos/modelos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto-propio',
  templateUrl: './nuevo-producto-propio.page.html',
  styleUrls: ['./nuevo-producto-propio.page.scss'],
})
export class NuevoProductoPropioPage implements OnInit {

  tipo; entidad;numero; idUsuario;saldo; alias; cuentas; T=0;
  constructor(private generalServices:GeneralService,
    private apiService:ApiService,
    private router: Router) { }

  ngOnInit() {
    this.idUsuario=window.localStorage['IdUsuario'];
  }

  
  


  registroCuenta(){
    if(this.tipo==undefined || this.tipo==null){
      this.generalServices.AlertaError("Seleccione tipo de cuenta");
    }else if(this.entidad==undefined || this.entidad==null){
      this.generalServices.AlertaError("Seleccione la entidad a la cual pertenece la cuenta");
    }else if(this.numero==undefined || this.numero==null){
     this.generalServices.AlertaError("Seleccione el número de la cuenta");
    }else if(this.saldo==undefined || this.saldo==null){
      this.generalServices.AlertaError("Ingrese el saldo inicial de la cuenta");
     }else{
     
      const idcuenta=  Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);

      const CuentaPropia : CuentaPropia={
        fechaRegistro: new Date,
        entidadFinanciera: this.entidad,
        estadoCuenta: '1',
        numeroCuenta:  this.numero,
        saldoCuenta: this.saldo,
        tipoCuenta: this.tipo,
        idCuenta: idcuenta
      }

      this.apiService.registroCP(this.idUsuario, idcuenta, CuentaPropia).then(res=>{
        if(res=="true"){
          this.generalServices.AlertExito('Cuenta registrada exitosamente');
          this.router.navigate(['/mis-productos'])
        }
      })

    }
}

}
