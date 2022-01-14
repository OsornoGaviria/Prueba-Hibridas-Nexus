import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../Servicios/api.service';
import { LoginService } from '../../../Servicios/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  iconPerfil='https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg'
  idUsuario; misProductos; infoUser; nameUsuario;
 
  constructor(private apiService:ApiService,
    private router: Router, 
    private loginService: LoginService) { }

  ngOnInit() {
   this.idUsuario=window.localStorage['IdUsuario'];
  this.infoUsuario()
  }

  infoUsuario(){
    this.apiService.verUsuario(this.idUsuario).subscribe(res=>{
      this.infoUser=res;
      this.nameUsuario=this.infoUser.nombre;
    })
  }


  onProductos(){
    this.router.navigate(['/mis-productos'])   
   }
 
   onProductosTerceros(){
     this.router.navigate(['/productos-terceros'])   
   }
 
   onTranferencias(){
     this.router.navigate(['/tranferencias'])   
   }
 
   CerrarSesion(){
     this.loginService.logOut();
 }
 

}
