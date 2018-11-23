import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  notification: string;

  constructor(private openNativeSettings: OpenNativeSettings, public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  edit()
  {
    this.navCtrl.push(EditProfilePage);
  }
  
  OnOpenMenu()
  {
    this.menuCtrl.open();
  }

  terms()
  {
    this.navCtrl.push(TermsPage);
  }

  settings()
  {
    this.openNativeSettings.open('sound'); 
  }

}
