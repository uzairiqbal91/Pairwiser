import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

//form validation
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  buttonColor: string = "transparent";
  buttonColor2: string = "#0077c8";

  //form validation
  signupform: FormGroup;
  userData = { "username": "", "password": "", "email": "", "name": "" };
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //form validation
  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
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
