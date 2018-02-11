import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  closeRegistration() {
      this.viewCtrl.dismiss();
  }

}
