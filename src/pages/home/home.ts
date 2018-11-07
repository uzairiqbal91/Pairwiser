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

  constructor(public navCtrl: NavController,private menuCtrl: MenuController) {

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
          sized1()
          {
            console.log("Sizes Called");
            this.sizes1 = '#f9c04c';
            this.sizes2 = 'lightgrey';
            this.sizes3 = 'lightgrey';
            this.sizes4 = 'lightgrey';
          }

          sized2()
          {
            console.log("Sizes Called");
            this.sizes2 = '#f9c04c';
            this.sizes1 = 'lightgrey';
            this.sizes3 = 'lightgrey';
            this.sizes4 = 'lightgrey';
          }

          sized3()
          {
            console.log("Sizes Called");
            this.sizes3 = '#f9c04c';
            this.sizes2 = 'lightgrey';
            this.sizes1 = 'lightgrey';
            this.sizes4 = 'lightgrey';
          }

          sized4()
          {
            console.log("Sizes Called");
            this.sizes4 = '#f9c04c';
            this.sizes2 = 'lightgrey';
            this.sizes3 = 'lightgrey';
            this.sizes1 = 'lightgrey';
          }

}
