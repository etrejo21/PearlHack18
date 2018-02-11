import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { StartScreenPage } from '../startscreen/startscreen';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }
  gotoStart() {
    this.navCtrl.push(StartScreenPage);
  }

}
