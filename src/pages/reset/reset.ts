import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//form validation
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  buttonColor: string = "transparent";
  buttonColor2: string = "#0077c8";
    //form validation
    signupform: FormGroup;
    userData = { "email": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }

}
