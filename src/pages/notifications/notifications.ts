import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  notifications: { "user_image": string; "user_name": string; "notification": string; "time": string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {

    this.notifications = [
   
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Sent you an offer" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"Congrats your store got sold" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Sent you an offer" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"Congrats your store got sold" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Sent you an offer" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"Congrats your store got sold" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Sent you an offer" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"Congrats your store got sold" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Sent you an offer" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"Congrats your store got sold" , "time":"1h"},
  ]


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

  OnOpenMenu()
  {
    this.menuCtrl.open();
  }
}
