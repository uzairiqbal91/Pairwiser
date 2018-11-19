import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { AndroidPermissions } from '@ionic-native/android-permissions';

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

  
  constructor(private androidPermissions: AndroidPermissions, public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadlistingsPage');
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
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.images = results[i];
          this.images = Array.of(this.images);
          this.imageStatus = '1';
      }
    }, (err) => { });
  }


}
