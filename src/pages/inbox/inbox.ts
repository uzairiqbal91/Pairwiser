import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  notifications: { "user_image": string; "user_name": string; "notification": string; "time": string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.notifications = [
   
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"omnis iste natus error sit voluptatem accusantium doloremque laudantium" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"omnis iste natus error sit voluptatem accusantium doloremque laudantium" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"omnis iste natus error sit voluptatem accusantium doloremque laudantium" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"omnis iste natus error sit voluptatem accusantium doloremque laudantium" , "time":"1h"},
      { "user_image":"imgs/user_image.png", "user_name":"Gemma", "notification":"Lorem ipsum dolor sit amet, consectetur adipiscing elit" , "time":"now"},
      { "user_image":"imgs/user_image2.png", "user_name":"Allan", "notification":"omnis iste natus error sit voluptatem accusantium doloremque laudantium" , "time":"1h"},
  ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  OnOpenMenu()
  {
    this.menuCtrl.open();
  }


}
