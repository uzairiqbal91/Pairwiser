import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {

  public first: string = '';

  textcolor: string = '#0073b9';
  buttonColor: string =  'white';

  textcolor2: string = '#0073b9';
  buttonColor2: string =  'white';
  posted: string;
  prices: string;
  available: string;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }

  clear()
  {

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
            this.buttonColor= 'white';
            this.textcolor2 = '#0073b9';
            this.buttonColor2 =  'white';
            this.available = '0';
          }
        }
      ]
    });
    confirm.present();
  }

  send1()
  {
    this.textcolor = 'white';
    this.buttonColor= '#0073b9';

    this.textcolor2 = '#0073b9';
    this.buttonColor2 =  'white';
  }

  send2()
  {
    this.textcolor2 = 'white';
    this.buttonColor2= '#0073b9';

    this.textcolor = '#0073b9';
    this.buttonColor= 'white';
  }

}
