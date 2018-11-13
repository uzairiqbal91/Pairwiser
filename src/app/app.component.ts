import { Component,ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
//import { SigninPage } from '../pages/signin/signin';
//import { SignupPage } from '../pages/signup/signup';
//import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
//import { ResetPage } from '../pages/reset/reset';
//import { NewPasswordPage } from '../pages/new-password/new-password';
//import { DeliveryPage } from '../pages/delivery/delivery';
//import { CheckoutPage } from '../pages/checkout/checkout';
//import { DispatchPage } from '../pages/dispatch/dispatch';
//import { FiltersPage } from '../pages/filters/filters';
import { AboutPage } from '../pages/about/about';
import { InboxPage } from '../pages/inbox/inbox';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainPage;  //MainPage TabsPage
  @ViewChild('nav') nav: NavController;

  order = OrderHistoryPage;
  notification = NotificationsPage;
  home = TabsPage;
  profile = AboutPage;
  inbox = InboxPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();  
      splashScreen.hide();
    });
  }

  openPage(page) {
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

  settings()
  {
    this.nav.setRoot(SettingsPage);
    this.menuCtrl.close();
  }
}
