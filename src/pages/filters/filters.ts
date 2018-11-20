import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {

  public first: string = '';
  textcolor: string = '#0073b9';
  buttonColor: string = 'white';
  textcolor2: string = '#0073b9';
  buttonColor2: string = 'white';
  posted: string;
  prices: string;
  available: string;
  filter: string;
  buttonValue: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }


  apply() {
    console.log("Posted:"            + this.posted);
    console.log("Prices:"            + this.prices);
    console.log("Filter:"            + this.filter);
    console.log("Available:"         + this.available);
    console.log("Product Condition:" + this.buttonValue);
  }


  clear() {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure ?',
      message: 'By pressing Ok, All your settings will be sent back to deafult',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
            this.posted = '20';
            this.prices = '0';
            this.first = '';
            this.textcolor = '#0073b9';
            this.buttonColor = 'white';
            this.textcolor2 = '#0073b9';
            this.buttonColor2 = 'white';
            this.available = '0';
          }
        }
      ]
    });
    confirm.present();
  }

  send1() {
    this.textcolor = 'white';
    this.buttonColor = '#0073b9';
    this.textcolor2 = '#0073b9';
    this.buttonColor2 = 'white';
    this.buttonValue = 'new';
  }

  send2() {
    this.textcolor2 = 'white';
    this.buttonColor2 = '#0073b9';
    this.textcolor = '#0073b9';
    this.buttonColor = 'white';
    this.buttonValue = 'used';
  }

}
