import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {
  delivery: { "image": string; "product_name": string; "username": string; }[];

  constructor(public alertCtrl: AlertController, private menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    
    this.delivery = [
   
      { "image":"imgs/user_image.png", "product_name":"AIR FORCE ONE 360 Shoes", "username":"mrbullardi"},
      
  ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
  }

  OnOpenMenu()
  {
    this.menuCtrl.open();
  }

  confirm()
  {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Please confirm that your item has been received?',
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
