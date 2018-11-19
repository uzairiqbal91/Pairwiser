import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  buttonColor: string = 'lightgrey'
  buttonColor1: string = 'lightgrey'
  alert_color: string = 'blue'
  public buttonClicked: boolean = false; 
  username : any;
  email : any;
  selected = "";
  selectedreview = "";
  selected_pairs = "";
  products: { "image": string; "product_name": string; "price": string; }[];
  pairs: { "image": string; "product_name": string; "price": string; }[];
  user_reviews: { "image": string; "user_name": string; "review": string; }[];
  public profile: string = 'stack';
  public categories: Array<string> = ['stack', 'pairs', 'reviews']

  constructor(private nativeStorage: NativeStorage, public alertCtrl: AlertController, private menuCtrl: MenuController, public navCtrl: NavController) {

    
    this.products = [

      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
    ]

    this.pairs = [

      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
    ]

    this.user_reviews = [
      {"image":"imgs/user_image.png", "user_name":"butterfly" , "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {"image":"imgs/user_image.png", "user_name":"joeyhac" , "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {"image":"imgs/user_image.png", "user_name":"jadassy" , "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {"image":"imgs/user_image.png", "user_name":"greg" , "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ]
    //   this.nativeStorage.getItem('username')
    // .then(
    //   data => {
    //     console.log("Checking for username:" + data);
    //     this.username = data;
    //   },
    //   error => console.error(error)
    // );

    //   this.nativeStorage.getItem('email')
    // .then(
    //   data => {
    //     console.log("Checking for email:" + data);
    //     this.email = data;
    //   },
    //   error => console.error(error)
    // );

  }

  OnOpenMenu()
  {
    this.menuCtrl.open();
  }

  onTabChanged(tabName) {
    this.profile = tabName;
  }

  addEvent1(index: string, image: string, product_name: string, price: string) {
    console.log("Stack");
    console.log("Image:" + image);
    console.log("Product_name: " + product_name);
    console.log("Price:" + price);
    console.log("At Index:" + index);
    this.selected = index;
    //this.pairs = 'sizes';
  }

  addEventPairs(index: string, image: string, product_name: string, price: string) {
    console.log("Pairs");
    console.log("Image:" + image);
    console.log("Product_name: " + product_name);
    console.log("Price:" + price);
    console.log("At Index:" + index);
    this.selected_pairs = index;
    //this.pairs = 'sizes';
  }

   onButtonClick(index:string) {
    console.log("Index:" + index);
    this.selectedreview = index;
}

      refresh_alert() {
        const confirm = this.alertCtrl.create({
          title: '<b style="color:blue">2 of 3</b> RESTACK CREDIT',
          message: '<p>1 more left<p> <p><b>Re-stack</b> after the pair has been sold,</p> <p>5% commission will be given to you of the sale price.</p>',
          buttons: [
            {
              text: 'Re-stack',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Cancel',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
          
        });
        confirm.present();
      }
      
      settings()
      {
        this.navCtrl.setRoot(SettingsPage);
      }


}
