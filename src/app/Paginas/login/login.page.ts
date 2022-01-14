import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Servicios/login.service';
import { GeneralService } from '../../Servicios/generalServices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email; password; dataU;
  constructor(private loginService: LoginService,
    private router: Router,
    private generalService:GeneralService) { }


  ngOnInit() {
  }

  ClickLogin(){
    console.log("ENRO")
    if(this.email=="" || this.email==undefined){
      this.generalService.AlertaError('Ingrese su nombre de usuario')
    }else if(this.password=="" || this.password==undefined){
      this.generalService.AlertaError('Ingrese su contraseña')
    }else{
      this.loginService.LoginUsuario(this.email, this.password).then(res => {
        this.dataU=res;

        window.localStorage['IdUsuario']=this.dataU.user.uid;
        console.log(this.dataU.user.uid)
         this.router.navigate(['/dash']);
      }).catch(err =>{
        this.generalService.AlertaError('Verifique sus datos e intente nuevamente')
     })
    }
    
   }

}
