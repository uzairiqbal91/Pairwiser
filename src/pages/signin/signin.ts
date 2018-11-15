import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { ResetPage } from '../reset/reset';
//import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  buttonColor: string = "transparent";
  buttonColor2: string = "#0077c8";
  name:any;
  password:any;   
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  reset()
  {
    this.navCtrl.push(ResetPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  addEvent(){
    console.log("event 1 called");
    this.buttonColor = '#f9c04c';
    this.buttonColor2 = 'white';
    this.navCtrl.push(TabsPage);
    console.log(this.name);
    console.log(this.password);

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

  fb_login()
  {
    alert("Facebook plugin not installed");
  }

  twitter_login()
  {
    alert("Twitter Plugin not installed");
  }

}
