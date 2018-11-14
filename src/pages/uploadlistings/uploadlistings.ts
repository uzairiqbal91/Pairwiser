import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-uploadlistings',
  templateUrl: 'uploadlistings.html',
})


export class UploadlistingsPage {
  myInput: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadlistingsPage');
  }



}
