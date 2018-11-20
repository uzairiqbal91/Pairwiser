import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
  selector: 'page-uploadlistings',
  templateUrl: 'uploadlistings.html',
})


export class UploadlistingsPage {
  myInput: any;
  public condition: string = 'new';
  uri: any;
  images : any = "";
  imageStatus : any = '';
  expenses: any[];
  title: any;
  price: any;
  shipping_cost: any;
  description: any;
  size: any;
  brand: any;
  fb_share: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadlistingsPage');
  }

  close()
  {
    this.navCtrl.push(EditProfilePage);
  }

  getImages()
  {
    let options = {
      maximumImagesCount: 4,
      uri: this.uri,
      folderName: 'Pairwiser',
      quality: 90,
      width: 222,
      height: 219
     }

    this.imagePicker.getPictures(options).then((results) => {

      this.expenses = [];
          for (var i = 0; i < results.length; i++) {
            this.expenses.push({ images: results[i]});
            console.log(this.expenses[i].images);
            this.imageStatus = '1';
          }

    }, (err) => { console.log(err) });
  }

  save()
  {
    console.log(this.title);
    console.log(this.price);
    console.log(this.shipping_cost);
    console.log(this.description);
    console.log(this.size);
    console.log(this.brand);
    console.log(this.condition);

    if(this.fb_share === 'true' || this.fb_share === true)
    {
       console.log("Allow Facebook Share : Yes");
    }
    else
    console.log("Allow Facebook Share : No");

  }

}
