import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-shipping',
  templateUrl: 'shipping.html',
})
export class ShippingPage {
  shipping: { "area_name": string; "address": string; "number": string; }[];
  total : any = 'Rs 2232';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.shipping = [
      { "area_name": "BOLSHAKOV OLEG", "address": "Bol'shay,18 Saint Petersburg, Russia", "number": "+7 999 215 90 90" },
      { "area_name": "YUSHKENVIC KSENIA", "address": "Prospect mira 3, Saint Petersburg, Russia", "number": "+7 961 346 25 25" }

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShippingPage');
  }

}
