import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servicios/api.service';
import { GeneralService } from '../../Servicios/generalServices.service';
import { TranferenciaSalida, TranferenciaLlegada } from '../../Modelos/modelos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tranferencia-t',
  templateUrl: './tranferencia-t.page.html',
  styleUrls: ['./tranferencia-t.page.scss'],
})
export class TranferenciaTPage implements OnInit {

  cuentas; cuentaso; origen; destino; valor;idUsuario; dtaOri; dtaDes; s=0; r=0;

  constructor(private apiService:ApiService,
    private generalServices:GeneralService,
    private router: Router) { }

  ngOnInit() {
     this.idUsuario=window.localStorage['IdUsuario'];
      this.apiService.cuentasPropias(this.idUsuario).subscribe(res=>{
        this.cuentas=res  
      })

      this.apiService.CuentasOtros(this.idUsuario).subscribe(res=>{
        this.cuentaso=res  
      })
  }

  registroCuenta(){
    if(this.origen==undefined || this.origen==''){
      this.generalServices.AlertaError("Seleccione el producto de origen")
    }else if(this.destino==undefined || this.destino==''){
      this.generalServices.AlertaError("Elija el producto de destino")
    }else if(this.valor==undefined || this.valor=='' || this.valor<=0){
      this.generalServices.AlertaError("Ingrese el valor a transferir")
    }else{

      this.apiService.detallesC(this.idUsuario, this.origen).subscribe(res=>{
        this.dtaOri=res;
        if(this.valor>this.dtaOri.saldoCuenta){
          this.generalServices.AlertaError("Fondos Insuficientes")
        }else{
          this.apiService.detallesO(this.idUsuario, this.destino).subscribe(res=>{
            this.dtaDes=res;
            if(this.s==0){
              const saldo=this.dtaOri.saldoCuenta-this.valor;
              
              const TranferenciaSalida: TranferenciaSalida={
                fecha: new Date,
                valor: this.valor,
                cuenta:this.dtaDes.aliasCuenta + " " + this.dtaDes.numeroCuenta,
                tipo: '1',
              }
              this.apiService.regMovimientoCP(this.idUsuario, this.origen, saldo, TranferenciaSalida )
                  .then(res=>{
                    if(res="true"){
                      this.generalServices.AlertExito("Tranferencia exitosa");
                      this.router.navigate(['/detalle-prod-p', this.origen])
                    }
                  })
              this.s++;
            }
          })
        }
       })
      }
    }  

}
