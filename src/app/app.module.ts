import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage } from '../pages/main/main';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { SearchPage } from '../pages/search/search';
import { SwipeSegmentDirective } from '../directives/swipe-segment/swipe-segment';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { TermsPage } from '../pages/terms/terms';
import { ResetPage } from '../pages/reset/reset';
import { NewPasswordPage } from '../pages/new-password/new-password';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    SigninPage,
    SignupPage,
    SearchPage,
    SwipeSegmentDirective,
    EditProfilePage,
    OrderHistoryPage,
    NotificationsPage,
    SettingsPage,
    TermsPage,
    ResetPage,
    NewPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    SigninPage,
    SignupPage,
    SearchPage,
    EditProfilePage,
    OrderHistoryPage,
    NotificationsPage,
    SettingsPage,
    TermsPage,
    ResetPage,
    NewPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
