import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ApiService } from '../../Servicios/api.service';

@Component({
  selector: 'app-detalle-prod-p',
  templateUrl: './detalle-prod-p.page.html',
  styleUrls: ['./detalle-prod-p.page.scss'],
})
export class DetalleProdPPage implements OnInit {

  idUsuario; idCuenta; infoCuenta;

  tipoCuenta; saldoCuenta; estadoCuenta; entidad; fechaRegistro; numero; movimientos;
  
  constructor(private params: ActivatedRoute,
    private apiService:ApiService) { }

  ngOnInit() {
    this.idUsuario=window.localStorage['IdUsuario'];
    this.idCuenta= this.params.snapshot.paramMap.get('id'); 
    
    this.detallesC();
  }

  detallesC(){
    this.apiService.detallesC(this.idUsuario,this.idCuenta).subscribe(res=>{
      this.infoCuenta=res;
        this.tipoCuenta= this.infoCuenta.tipoCuenta;
        this.saldoCuenta=this.infoCuenta.saldoCuenta;
        this.estadoCuenta=this.infoCuenta.estadoCuenta;
        this.entidad=this.infoCuenta.entidadFinanciera;
        this.fechaRegistro=this.infoCuenta.fechaRegistro;
        this.numero=this.infoCuenta.numeroCuenta;
        this.movimientos=this.infoCuenta.Movimientos;

    })
  }

}
