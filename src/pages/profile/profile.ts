import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { StartScreenPage } from '../startscreen/startscreen';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  gotoStart() {
    this.navCtrl.setRoot(StartScreenPage);
  }

}
