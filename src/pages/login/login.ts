import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { StartScreenPage } from '../startscreen/startscreen';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  backtostart() {
    let modal = this.modalCtrl.create(StartScreenPage);
    modal.present();
  }
}
