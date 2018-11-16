import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { ResetPage } from '../reset/reset';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  buttonColor: string = "transparent";
  buttonColor2: string = "#0077c8";
  name:any;
  password:any;   
  username: string;
  apiUrl: string;
 
  constructor(public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private loadingCtrl: LoadingController, private http: Http) {

  }

  reset()
  {
    this.navCtrl.push(ResetPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  addEvent(){
    console.log("event 1 called");
    this.buttonColor = '#f9c04c';
    this.buttonColor2 = 'white';
    this.navCtrl.push(TabsPage);
    console.log(this.name);
    console.log(this.password);

    }

  someAction()
  {
    this.buttonColor = "light";
  }

  sendto()
  {
    this.navCtrl.push(SignupPage);
  }

  signin()
  {
    this.navCtrl.push(TabsPage);
  }

  fb_login()
  {
    alert("Facebook plugin not installed");
  }

  twitter_login()
  {
    alert("Twitter Plugin not installed");
  }



  //Signin form

  
  // signIn() { 
    
  //   this.apiUrl = 'http://letslock.com/WebSamples/masjid/mobile/custlogin.php?username=' + this.username + '&password=' + this.password;
  //   console.log(this.apiUrl)
  
  //    if (this.username === undefined || this.password === undefined) {
  //      let alert = this.alertCtrl.create({
  //        title: 'Sign-in Error',
  //        subTitle: 'Username and Password Required',
  //        buttons: ['OK']
  //      });
  //      alert.present();
  //      return;
  //    }
  //    let loader = this.loadingCtrl.create({
  //      content: "Signing In..."
  //    });
  //    loader.present();
  
  //    console.log(this.apiUrl);
  
  //    this.http.get(this.apiUrl).map(res => res.json())
  //    .subscribe(data => {
  
  //      console.log(data);
  //      loader.dismissAll();
  
  //      var str = data.Status;
  
  //      if (str === 'success'){
    
  //   this.nativeStorage.setItem('email', data.email)
  //   .then(
  //     () => console.log('Email Stored!'),
  //     error => console.error('Error storing item', error)
  //   );

  //   this.nativeStorage.setItem('username', data.username)
  //   .then(
  //     () => console.log('Username Stored!'),
  //     error => console.error('Error storing item', error)
  //   );
  
  //   let alert = this.alertCtrl.create({
  //     title: 'Login Successful',
  //     subTitle: 'Welcome to Pairwisers',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  //   this.navCtrl.push(TabsPage);
  // } 
  
  //    }, error => {
  //      console.log(error); // Error getting the data
  
  //      let alert = this.alertCtrl.create({
  //        title: 'Network Failed',
  //        subTitle: 'Please try again later',
  //        buttons: ['OK']
  
  //      });
  //      alert.present();
  //      loader.dismissAll();
  //    });
  //  }
  

}
