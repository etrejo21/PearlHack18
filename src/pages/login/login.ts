import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { StartScreenPage } from '../startscreen/startscreen';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController) {

  }
  backtostart() {
    let modal = this.modalCtrl.create(StartScreenPage);
    modal.present();
  }

  openTab() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(TabsPage);
  }
}
