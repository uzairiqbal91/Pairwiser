import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';


@Component({
  selector: 'page-stripecheckout',
  templateUrl: 'stripecheckout.html',
})
export class StripecheckoutPage {

  // cardNumber: string;
  // cardMonth: number;
  // cardYear: number;
  // cardCVV: string;
  public type = 'password';
  public showPass = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public stripe: Stripe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StripecheckoutPage');
    this.stripe.setPublishableKey('pk_test_B1s9g8Zf7GAHsfooa8cVj154');
  }

  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  
  // validateCard(){
  //   let card = {
  //     number: this.cardNumber,
  //     expMonth: this.cardMonth,
  //     expYear: this.cardYear,
  //     cvc: this.cardCVV
  //    };
 
  //    // Run card validation here and then attempt to tokenise
     
  //    this.stripe.createCardToken(card)
  //       .then(token => console.log(token))
  //       .catch(error => console.error(error));
  // }

}
