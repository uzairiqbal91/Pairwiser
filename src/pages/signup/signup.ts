import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//form validation
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  buttonColor: string = "transparent";
  buttonColor2: string = "#0077c8";
    //form validation
    signupform: FormGroup;
    userData = { "username": "", "password": "", "conpassword": "", "email": ""};
  conpassword: any;
  apiUrl: any;
  uuid: any;
  password: any;

  constructor(public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private loadingCtrl: LoadingController, private http: Http) {

    // this.nativeStorage.getItem('uuid')
    // .then(
    //   data => {
    //     console.log("Checking for Email:" + data);
    //     this.uuid = data;
    //   },
    //   error => console.error(error)
    // );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      conpassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }

  matchingPasswords(password:string, conpassword:string)
  {
   
    
  }
  
  signup()
  {
    this.navCtrl.push(TabsPage);
  }


  //Signup form:

  // signup() {

  //  console.log(this.userData.username);
  //  console.log(this.userData.password);
  //  console.log(this.userData.email);
  //   if (this.userData.password != this.userData.password) {  //condition to check passwords
  //       let alert = this.alertCtrl.create({
  //           title: 'Passwords do not match !',
  //           buttons: ['OK']
  //         });
  //         alert.present();
  //   }
  //   else
  //   {

  //        let loader = this.loadingCtrl.create({
  //           content: "User Registeration in Progress..."
  //       });
  //       loader.present();
  
  //       this.apiUrl = 'http://letslock.com/WebSamples/masjid/mobile/signupform.php?username=' + this.userData.username + '&passowrd=' + this.userData.password +'&email=' + this.userData.email + '&uuid_code=' + this.uuid;
  //       this.http.get(this.apiUrl).map(res => res.json())
  //         .subscribe(data => {
  //          loader.dismiss();
  //               console.log(data);
  
  //               this.nativeStorage.setItem('email', this.userData.email)
  //               .then(
  //                 () => console.log('Email Stored!'),
  //                 error => console.error('Error storing item', error)
  //               );
  
  //               this.nativeStorage.setItem('username', this.userData.username)
  //               .then(
  //                 () => console.log('user name Stored!'),
  //                 error => console.error('Error storing item', error)
  //               );

  //               var status = data.Status;
  
  //               if (status === 'exist') {
  
  //                   let alert = this.alertCtrl.create({
  //                       title: 'User already exists !',
  //                       buttons: ['OK']
  //                     });
  //                     alert.present();
  //               }
  
  //               else if(status === 'failed')
  //               {
  //                 let alert = this.alertCtrl.create({
  //                   title: 'Registeration Failed ! Server Problem',
  //                   buttons: ['OK']
  //                 });
  //                 alert.present();
  //               }
  //               else {
                  
  //                 let alert = this.alertCtrl.create({
  //                   title: 'Registeration Successful',
  //                   buttons: ['OK']
  //                 });
  //                 alert.present();
  
  //                  loader.present();
              
  //                 //  this.navCtrl.setRoot(MosqueconfirmPage, { send: this.m_confirm_code});     
  //               }
  //           }, error => {
  //               console.log(error);// Error getting the data
  //           });
  //         }
  // }

}
