import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { mobiscroll } from '@mobiscroll/angular';

mobiscroll.settings = {
  theme: 'ios'
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // pairs: string = "discover";
  public pairs: string = 'discover';
  public categories: Array<string> = ['discover', 'sizes', 'brands']

  constructor(public navCtrl: NavController) {

  }

  onTabChanged(tabName) {
    this.pairs = tabName;
  }

}
