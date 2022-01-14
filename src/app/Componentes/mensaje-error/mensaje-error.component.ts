import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-mensaje-error',
  templateUrl: './mensaje-error.component.html',
  styleUrls: ['./mensaje-error.component.scss'],
})
export class MensajeErrorComponent implements OnInit {

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
