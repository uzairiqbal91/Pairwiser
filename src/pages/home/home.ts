import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { FiltersPage } from '../filters/filters';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttonColor: string = 'lightgrey'
  buttonColor1: string = 'lightgrey'
  buttonColor2: string = 'lightgrey'
  buttonColor3: string = 'lightgrey'

  sizes1 : string = 'lightgrey';
  sizes2 : string = 'lightgrey';
  sizes3 : string = 'lightgrey';
  sizes4 : string = 'lightgrey';

  //for onclick bg color change
  selected = "";
  selected_size = "";

  public pairs: string = 'discover';
  public categories: Array<string> = ['discover', 'sizes', 'brands']
  items: string[];
  myObj: { "value": string; "is_active": string; }[];
  products: { "image": string; "product_name": string; "price": string; }[];
  

  constructor(public navCtrl: NavController,private menuCtrl: MenuController) {
    

    this.products = [
   
      { "image":"imgs/shoes.png", "product_name": "Red wing moc toe", "price":"190"},
      { "image":"imgs/shoes.png", "product_name": "Red wing moc toe", "price":"190"},
      { "image":"imgs/shoes2.png", "product_name":"Red wing moc toe", "price":"190"},
      { "image":"imgs/shoes2.png", "product_name":"Red wing moc toe", "price":"190"},
      { "image":"imgs/shoes.png", "product_name": "Red wing moc toe", "price":"190"},
      { "image":"imgs/shoes2.png", "product_name":"Red wing moc toe", "price":"190"},
      { "image":"imgs/shoes.png", "product_name": "Red wing moc toe", "price":"190"},
      
  ]
  
    this.items = [
      '4',
      '4.5',
      '5',
      '5.5',
      '6',
      '6.5',
      '7',
      '7.5',
      '8',
      '8.5',
      '9',
      '9.5',
      '10',
      '10.5',
      '11',
      '11.5',
      '12',
      '12.5',
      '13',
      '13.5',
      '14',
      '14.5',
      '15',
      '15.5',
    ];
  }

  filter()
  {
    this.navCtrl.push(FiltersPage);
  }
  
  OnOpenMenu()
  {
    this.menuCtrl.open();
  }

  onTabChanged(tabName) {
    this.pairs = tabName;
  }

  addEvent1(index:string, image:string, product_name:string, price:string){
    console.log("Image:" + image);
    console.log("Product_name: " + product_name);
    console.log("Price:" + price);
    console.log("At Index:" + index);
    this.selected = index;
    }

  
          //Coding for Shoe Sizes
          //Grid 1
          sized1(index:string, is_active: string)
          {
            console.log("Sized 1 Called");
            console.log("Printing index:" + index);
            console.log("Printing is_active" + is_active);
            this.selected_size = index;

            //selected data from index will go forward
          }

}
