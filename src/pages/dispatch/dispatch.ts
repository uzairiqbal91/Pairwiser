import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-dispatch',
  templateUrl: 'dispatch.html',
})
export class DispatchPage {
  dispatch: { "image": string; "product_name": string; "username": string; "address": string; }[];

  constructor(public alertCtrl: AlertController, private menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams) {

    this.dispatch = [
   
      { "image":"imgs/user_image.png", "product_name":"AIR FORCE ONE 360 Shoes", "username":"mrbullardi", "address" : "211 Varick Street 9th Floor. NewYork, NY, 10013"},
      
  ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatchPage');
  }

  OnOpenMenu()
  {
    this.menuCtrl.open();
  }

  confirm()
  {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Please confirm if you have dispatched the item',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}
