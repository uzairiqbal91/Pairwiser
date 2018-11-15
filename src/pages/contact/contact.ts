import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public pairwisers: string = 'pair';
  buttonColor : string = '#ff7600';
  public categories: Array<string> = ['pair', 'wisers']
  products: { "image": string; "product_name": string; "price": string; }[];
  wisers: { "image": string; "user_name": string; "country": string; "followers": string; "location": string; "verified": string; }[];
  
  selected = "";
  selwisers = "";
  

  constructor(private menuCtrl: MenuController, public navCtrl: NavController) {
    this.products = [
   
      { "image":"imgs/shoes.png", "product_name":"Red wing moc toe", "price":"190"},
      { "image":"imgs/shoe1.png", "product_name":"Red wing moc toe", "price":"190"},
      
  ]

  this.wisers = [
   
    { "image":"imgs/user_image.png", "user_name":"ladysneaker", "country":"Newzealand", "followers":"76.5", "location":"PARIS", "verified":"0" },
    { "image":"imgs/user_image2.png", "user_name":"lordofaddi", "country":"London", "followers":"62.4", "location":"PARIS" , "verified":"0"  },
    
]
  }

  addEvent1(index:string){
    this.selected = index;
    }

    addwisers(index:string){
      this.selwisers = index;
      }


  OnOpenMenu()
  {
    this.menuCtrl.open();
  }


  onTabChanged(tabName) {
    this.pairwisers = tabName;
  }

}
