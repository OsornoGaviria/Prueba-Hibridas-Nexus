import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../Servicios/api.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  idUsuario; misProductos;x=0;

  constructor(private apiService:ApiService,
    private router: Router) { }

  ngOnInit() {
   this.idUsuario=window.localStorage['IdUsuario'];
   this.cuentasPropias();
  }

  cuentasPropias(){
    this.apiService.cuentasPropias(this.idUsuario).subscribe(res=>{
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
