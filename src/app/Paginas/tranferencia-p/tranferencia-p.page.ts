import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servicios/api.service';
import { GeneralService } from '../../Servicios/generalServices.service';
import { TranferenciaSalida, TranferenciaLlegada } from '../../Modelos/modelos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tranferencia-p',
  templateUrl: './tranferencia-p.page.html',
  styleUrls: ['./tranferencia-p.page.scss'],
})
export class TranferenciaPPage implements OnInit {

  cuentas; origen; destino; valor;idUsuario; dtaOri; dtaDes; s=0; r=0;

  constructor(private apiService:ApiService,
    private generalServices:GeneralService,
    private router: Router) { }

  ngOnInit() {
     this.idUsuario=window.localStorage['IdUsuario'];
      this.apiService.cuentasPropias(this.idUsuario).subscribe(res=>{
        this.cuentas=res  
      })
  }

  registroCuenta(){
    if(this.origen==undefined || this.origen==''){
      this.generalServices.AlertaError("Seleccione el producto de origen")
    }else if(this.destino==undefined || this.destino==''){
      this.generalServices.AlertaError("Elija el producto de destino")
    }else if(this.destino===this.origen){
      this.generalServices.AlertaError("Cuenta origen y destino no pueden ser iguales")
    }else if(this.valor==undefined || this.valor=='' || this.valor<=0){
      this.generalServices.AlertaError("Ingrese el valor a transferir")
    }else{

      this.apiService.detallesC(this.idUsuario, this.origen).subscribe(res=>{
          this.dtaOri=res;
          if(this.valor>this.dtaOri.saldoCuenta){
            this.generalServices.AlertaError("Fondos Insuficientes")
          }else {
               
            this.apiService.detallesC(this.idUsuario, this.destino).subscribe(res=>{
              this.dtaDes=res;
              //Registrar movimiento cuenta origen
              if(this.s==0){
               
                const saldo=this.dtaOri.saldoCuenta-this.valor;
                const TranferenciaSalida: TranferenciaSalida={
                  fecha: new Date,
                  valor: this.valor,
                  cuenta: this.dtaDes.aliasCuenta +" "+ this.dtaDes.numeroCuenta,
                  tipo: '1'
                }
                this.apiService.regMovimientoCP(this.idUsuario, this.destino, saldo, TranferenciaSalida )
               .then(res=>{
                  if(this.r==0){

                const saldo1= this.dtaDes.saldoCuenta +this.valor
                const TranferenciaLlegada: TranferenciaLlegada={
                    fecha: new Date,
                    valor: this.valor,
                    cuenta: this.dtaDes.aliasCuenta +" "+this.dtaOri.numeroCuenta,
                    tipo: '2'
                  }
                  this.apiService.regMovimientoCP(this.idUsuario, this.destino, saldo1, TranferenciaLlegada )
                  .then(res=>{
                    if(res="true"){
                      this.generalServices.AlertExito("Tranferencia exitosa");
                      this.router.navigate(['/detalle-prod-p', this.origen])
                    }
                    this.r++
                  })
                
                  } 
                })

              //Movimeinto cuenta salida

                this.s++;
              }
              


            })
          }
      })




    }
  }


  

}
