import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  buttonColor: string = "transparent";
  buttonColor2: string = "#0077c8";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  addEvent(){
    console.log("event 1 called");
    this.buttonColor = '#f9c04c';
    this.buttonColor2 = 'white';
    this.navCtrl.push(TabsPage);
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
