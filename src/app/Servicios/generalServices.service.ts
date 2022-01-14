import { Injectable } from '@angular/core';
import { IonSlides, ToastController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import{ MensajeErrorComponent } from '../Componentes/mensaje-error/mensaje-error.component';
import{ MensajeExitoComponent } from '../Componentes/mensaje-exito/mensaje-exito.component';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    public loadinController: LoadingController)
     { }

  

     async AlertaError(message) {
      const modal = await this.modalController.create({
        component: MensajeErrorComponent,
        cssClass: 'my-custom-modal-css-alert',
        componentProps: {
          message: message
        },
        showBackdrop: true,
        backdropDismiss: false,
      })
  
      modal.onDidDismiss()
      .then((data) => {
      })

      return await modal.present();
    }

    
    async AlertExito(message) {
      const modal = await this.modalController.create({
        component: MensajeExitoComponent,
        cssClass: 'my-custom-modal-css-alert',
        componentProps: {
          message: message
        },
        showBackdrop: true,
        backdropDismiss: false,
      })
  
      modal.onDidDismiss()
      .then((data) => {
      })

      return await modal.present();
    }

}
