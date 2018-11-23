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
import { DeliveryPage } from '../pages/delivery/delivery';
import { CheckoutPage } from '../pages/checkout/checkout';
import { DispatchPage } from '../pages/dispatch/dispatch';
import { FiltersPage } from '../pages/filters/filters';
import { InboxPage } from '../pages/inbox/inbox';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HttpModule } from '@angular/http';
import { StripecheckoutPage } from '../pages/stripecheckout/stripecheckout';
import { Stripe } from '@ionic-native/stripe';
import { UploadlistingsPage } from '../pages/uploadlistings/uploadlistings';
import { SlidesPage } from '../pages/slides/slides';
import { OneSignal } from '@ionic-native/onesignal';
import { ImagePicker } from '@ionic-native/image-picker';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { ShippingPage } from '../pages/shipping/shipping';

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
    NewPasswordPage,
    DeliveryPage,
    CheckoutPage,
    DispatchPage,
    FiltersPage,
    InboxPage,
    StripecheckoutPage,
    UploadlistingsPage,
    SlidesPage,
    ShippingPage

  ],
  // imports: [
  //   BrowserModule,
  //   HttpModule,
  //   IonicModule.forRoot(MyApp)
  // ],
imports: [
  BrowserModule,
  HttpModule,
  IonicModule.forRoot(MyApp, {
    // Tabs config
    tabsHideOnSubPages: false,
})
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
    NewPasswordPage,
    DeliveryPage,
    CheckoutPage,
    DispatchPage,
    FiltersPage,
    InboxPage,
    StripecheckoutPage,
    UploadlistingsPage,
    SlidesPage,
    ShippingPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileTransfer,
    FileTransferObject,
    NativeStorage,
    Stripe,
    OneSignal,
    ImagePicker,
    AndroidPermissions,
    OpenNativeSettings,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
