import { Component,ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';

import { OrderHistoryPage } from '../pages/order-history/order-history';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';

import { AboutPage } from '../pages/about/about';
import { InboxPage } from '../pages/inbox/inbox';
import { UploadlistingsPage } from '../pages/uploadlistings/uploadlistings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UploadlistingsPage;  //MainPage TabsPage
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
