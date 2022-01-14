import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { LoginService } from '../../Servicios/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  idUsuario; misProductos; infoUser; nameUsuario; cuentasUser;

  constructor(private router: Router,
    public actionSheetController: ActionSheetController,
    private loginService: LoginService) { }

  ngOnInit() {
   this.idUsuario=window.localStorage['IdUsuario'];
   
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
