import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { FiltersPage } from '../filters/filters';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //for onclick bg color change
  selected = "";
  selected_size = "";
  staggered = "";
  two: any = '2';
  public pairs: string = 'discover';
  public categories: Array<string> = ['discover', 'sizes', 'brands']
  items: string[];
  myObj: { "value": string; "is_active": string; }[];
  products: { "image": string; "product_name": string; "price": string; }[];
  apiUrl: string;


  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, private menuCtrl: MenuController, public alertCtrl: AlertController, private loadingCtrl: LoadingController, private http: Http) {

    //  this.getProducts();
    //  this.getSizes();

    this.products = [

      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes2.png", "product_name": "Red wing moc toe", "price": "190" },
      { "image": "imgs/shoes.png", "product_name": "Red wing moc toe", "price": "190" },

    ]

    this.items = [
      '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14', '14.5', '15', '15.5',
    ];
  }

  filter() {
    this.navCtrl.push(FiltersPage);
  }

  OnOpenMenu() {
    this.menuCtrl.open();
  }

  onTabChanged(tabName) {
    this.pairs = tabName;
  }

  addEvent1(index: string, image: string, product_name: string, price: string) {
    console.log("Image:" + image);
    console.log("Product_name: " + product_name);
    console.log("Price:" + price);
    console.log("At Index:" + index);
    this.selected = index;
    //this.pairs = 'sizes';
  }


  //Coding for Shoe Sizes
  //Grid 1
  sized1(index: string, is_active: string) {
    console.log("Sized 1 Called");
    console.log("Printing index:" + index);
    console.log("Printing is_active" + is_active);
    this.selected_size = index;
  }


  //Get all Products

  // getProducts() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Loading Products..."
  //   });
  //   loader.present();

  //   this.apiUrl = 'http://letslock.com/WebSamples/masjid/mobile/getallmasjid.php';   // Get all products
  //   console.log(this.apiUrl);

  //   this.http.get(this.apiUrl).map(res => res.json())
  //     .subscribe(data => {

  //       this.products = data;
  //       loader.dismiss();

  //     }, error => {
  //       console.log(error); // Error getting the data

  //     });
  // }


  //Get all Sizes

  // getSizes() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Loading All Sizes..."
  //   });
  //   loader.present();

  //   this.apiUrl = 'http://letslock.com/WebSamples/masjid/mobile/getallmasjid.php';
  //   console.log(this.apiUrl);

  //   this.http.get(this.apiUrl).map(res => res.json())
  //     .subscribe(data => {

  //       this.items = data;
  //       loader.dismiss();

  //     }, error => {
  //       console.log(error); // Error getting the data

  //     });
  // }


}
