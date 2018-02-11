import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-startscreen',
  templateUrl: 'startscreen.html'
})
export class StartScreenPage {
  // boolean showBack: False;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  login() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
  register() {
    let modal = this.modalCtrl.create(RegistrationPage);
    modal.present();
  }

}
