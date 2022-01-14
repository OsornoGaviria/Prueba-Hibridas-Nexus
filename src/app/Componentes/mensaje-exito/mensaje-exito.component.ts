import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-mensaje-exito',
  templateUrl: './mensaje-exito.component.html',
  styleUrls: ['./mensaje-exito.component.scss'],
})
export class MensajeExitoComponent implements OnInit {

  message;
  constructor(private modalController: ModalController,
    private navparams: NavParams) { }

  ngOnInit() {
    this.message=this.navparams.get('message');
  }


  Cerrar(){
    this.modalController.dismiss()
  }

}
