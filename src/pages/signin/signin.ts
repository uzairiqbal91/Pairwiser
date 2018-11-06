import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  private buttonColor: string = "primary";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  someAction()
  {
    this.buttonColor = "light";
  }

  sendto()
  {
    this.navCtrl.push(SignupPage);
  }

  signin()
  {
    this.navCtrl.push(TabsPage);
  }

}
