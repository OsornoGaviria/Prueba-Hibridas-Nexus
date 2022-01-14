import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicios/api.service';

@Component({
  selector: 'app-productos-terceros',
  templateUrl: './productos-terceros.page.html',
  styleUrls: ['./productos-terceros.page.scss'],
})
export class ProductosTercerosPage implements OnInit {

  idUsuario; misProductos;x=0;

  constructor(private apiService:ApiService,
    private router: Router) { }

  ngOnInit() {
   this.idUsuario=window.localStorage['IdUsuario'];
   this.cuentasOtros();
  }

  cuentasOtros(){
    this.apiService.CuentasOtros(this.idUsuario).subscribe(res=>{
     this.misProductos=res;
     if( this.misProductos.length>0)
      this.x=1;
    })
  }


  nuevoProducto(){
    this.router.navigate(['/nuevo-producto-propio']);
  }

  verDetalles(id){
    this.router.navigate(['/detalle-prod-p', id])
  }

}
