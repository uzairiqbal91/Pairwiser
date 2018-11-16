import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {

  public order: string = 'active';
  public categories: Array<string> = ['active', 'history']
  order_history: { "order_no": string; "date": string; "item": string; "status": string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {

    this.order_history = [
   
      { "order_no":"71827836", "date":"22.11.2015", "item":"Air force one red" , "status":"1"},
      { "order_no":"71827846", "date":"02.12.2015", "item":"Addison Yezzy 2015", "status":"0"},
      { "order_no":"71827856", "date":"18.12.2015", "item":"Air max 360 bubble" , "status":"1"},
      { "order_no":"71827866", "date":"30.01.2016", "item":"Nike Climax 3rd" , "status":"0"},
  ]

  }

  OnOpenMenu()
  {
    this.menuCtrl.open();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderHistoryPage');
  }

  onTabChanged(tabName) {
    this.order = tabName;
  }

}
