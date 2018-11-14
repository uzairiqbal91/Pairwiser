import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {

  public first: string = 'lowest';

  textcolor: string = '#0073b9';
  buttonColor: string =  'white';

  textcolor2: string = '#0073b9';
  buttonColor2: string =  'white';
    


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }

  send1()
  {
    this.textcolor = 'white';
    this.buttonColor= '#0073b9';

    this.textcolor2 = '#0073b9';
    this.buttonColor2 =  'white';
  }

  send2()
  {
    this.textcolor2 = 'white';
    this.buttonColor2= '#0073b9';

    this.textcolor = '#0073b9';
    this.buttonColor= 'white';
  }

}
