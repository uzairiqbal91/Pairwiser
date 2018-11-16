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
import { OneSignal } from '@ionic-native/onesignal';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;  //MainPage TabsPage
  @ViewChild('nav') nav: NavController;
  order = OrderHistoryPage;
  notification = NotificationsPage;
  home = TabsPage;
  profile = AboutPage;
  inbox = InboxPage;

  constructor(private nativeStorage: NativeStorage, private oneSignal: OneSignal, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();  
      splashScreen.hide();

      
      //For push notifications , One Signal
      // this.oneSignal.startInit('0f358ae2-c7c7-4ebb-9cc8-bc4fe4256f4b','615540045142');   //App ids
      // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      // this.oneSignal.handleNotificationReceived().subscribe(() => {
      //  // do something when notification is received
      // });
      // this.oneSignal.handleNotificationOpened().subscribe(() => {
      //   // do something when a notification is opened
      //  // this.nav.push(LatestPage);
      // });
      // this.oneSignal.endInit();
   
      this.oneSignal.getIds().then(identity => {
       console.log(identity.userId + 'its USERID');   
       this.nativeStorage.setItem('uuid', identity.userId)
         .then(
           () => console.log('UUI Stored!'),
           error => console.error('Error storing item', error)
         );
     });
  
     
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
