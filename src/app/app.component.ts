import { Component,ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainPage;  //MainPage TabsPage
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();  
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  OnLoad(page: any)
  {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  close()
  {
    this.menuCtrl.close();
  }

  logout()
  {
    this.nav.setRoot(MainPage);
    this.menuCtrl.close();
  }
}
