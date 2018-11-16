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
  products: { "image": string; "product_name": string; "price": string; }[];
  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
}


  public profile: string = 'stack';
  public categories: Array<string> = ['stack', 'pairs', 'reviews']

  constructor(private nativeStorage: NativeStorage, public alertCtrl: AlertController, private menuCtrl: MenuController, public navCtrl: NavController) {

    
    this.products = [

      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },

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

  addEvent1(){
    console.log("event 1 called");
    this.buttonColor = '#ff7600';
    this.buttonColor1 = 'lightgrey';
    }

    addEvent2(){
      console.log("event 2 called");
      this.buttonColor1 = '#ff7600';
      this.buttonColor = 'lightgrey';
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
