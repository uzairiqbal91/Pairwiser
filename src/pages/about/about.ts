import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  buttonColor: string = 'lightgrey'
  buttonColor1: string = 'lightgrey'
  alert_color: string = 'blue'
  public buttonClicked: boolean = false; 

  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
}


  public profile: string = 'stack';
  public categories: Array<string> = ['stack', 'pairs', 'reviews']

  constructor(public alertCtrl: AlertController, private menuCtrl: MenuController, public navCtrl: NavController) {

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
    this.buttonColor = '#f9c04c';
    this.buttonColor1 = 'lightgrey';
    }

    addEvent2(){
      console.log("event 2 called");
      this.buttonColor1 = '#f9c04c';
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
