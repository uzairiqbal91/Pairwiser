import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';


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



  public pairs: string = 'discover';
  public categories: Array<string> = ['discover', 'sizes', 'brands']
  items: string[];
  myObj: { "value": string; "is_active": string; }[];
  

  constructor(public navCtrl: NavController,private menuCtrl: MenuController) {
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

 
  this.myObj = [
   
        { "value":"4", "is_active":"0" },
        { "value":"4.5", "is_active":"0" },
        { "value":"5", "is_active":"0" },
        { "value":"5.5", "is_active":"0" },
    ]
 

  }

  
  
  OnOpenMenu()
  {
    this.menuCtrl.open();
  }

  onTabChanged(tabName) {
    this.pairs = tabName;
  }

  addEvent1(){
    console.log("event 1 called");
    this.buttonColor = '#f9c04c';
    this.buttonColor1 = 'lightgrey';
    this.buttonColor2 = 'lightgrey';
    this.buttonColor3 = 'lightgrey';
    }

    addEvent2(){
      console.log("event 2 called");
      this.buttonColor1 = '#f9c04c';
      this.buttonColor = 'lightgrey';
      this.buttonColor2 = 'lightgrey';
      this.buttonColor3 = 'lightgrey';
      }

      addEvent3(){
        console.log("Called");
        this.buttonColor2 = '#f9c04c';
        this.buttonColor1 = 'lightgrey';
        this.buttonColor = 'lightgrey';
        this.buttonColor3 = 'lightgrey';
        }

        addEvent4(){
          console.log("Called");
          this.buttonColor3 = '#f9c04c';
          this.buttonColor1 = 'lightgrey';
          this.buttonColor2 = 'lightgrey';
          this.buttonColor = 'lightgrey';
          }


          //Coding for Shoe Sizes
          //Grid 1
          sized1(index:string, is_active: string)
          {
            console.log("Sized 1 Called");
            console.log("Printing index:" + index);
            console.log("Printing is_active" + is_active);
          //  this.sizes2[value] = '#f9c04c';
           // this.sizes2 = this.sizes1;
             
           
            // this.sizes2 = 'lightgrey';
            // this.sizes3 = 'lightgrey';
            // this.sizes4 = 'lightgrey';
          }

}
