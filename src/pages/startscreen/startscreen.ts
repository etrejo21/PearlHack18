import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-startscreen',
  templateUrl: 'startscreen.html'
})
export class StartScreenPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  register() {
    let modal = this.modalCtrl.create(RegistrationPage);
    modal.present();
  }

}
