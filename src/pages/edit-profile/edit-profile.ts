import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  url: any;
  imageURI: any;

  constructor(public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private loadingCtrl: LoadingController, private http: Http, private transfer: FileTransfer, private camera: Camera, private nativeStorage: NativeStorage)   //private transfer: FileTransfer, private camera: Camera, private nativeStorage: NativeStorage,
   {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  back()
  {
    this.navCtrl.setRoot(SettingsPage);
  }


 // upload image
   
 public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
            //this.Alertconfirm();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
    
    }
    
    public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
     console.log("ImageURL from Source",imagePath)
      this.imageURI = imagePath;
      console.log("ImageURL ",this.imageURI)
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
    }
    
    private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    }
     
    
  //   public uploadImage() {
    
  //   // File for Upload
  //   console.log(this.imageURI)
  //   var targetPath = this.imageURI
    
  //   var temp= this.imageURI.replace(".png?","_");
  //   var temp1=temp.replace(".jpg?","_");
  //   // File name only
  //   var filename = temp1;
    
  //   var options = {
  //     fileKey: "file",
  //     fileName:filename,
  //     chunkedMode: false,
  //     mimeType: "image/jpeg",
  //     params: { 'fileName': filename }
  //   };
    
  //   const fileTransfer: FileTransferObject = this.transfer.create();
    
  //   let loadingCtrl = this.loadingCtrl.create({
  //     content: 'Uploading...',
  //   });
  //   loadingCtrl.present();
    
  //  //    this.url = "http://letslock.com/WebSamples/masjid/mobile/userimage.php?email=" + this.email; 
  
  // //    console.log(this.url)
  //     fileTransfer.upload(this.imageURI, this.url, options).then(data => {
  //       console.log("FiletransferObject URl",this.imageURI)
  //     loadingCtrl.dismissAll()
  //    // this.signup();
  //     //this.presentToast('Image succesful uploaded.');
  //     console.log("image uploaded");
  //     console.log("data",data)
  //   }, err => {
  //     loadingCtrl.dismissAll()
  //     //this.presentToast('Error while uploading file.');
  //     console.log("Failed uploading image", err);
  //   });
    
  //   }

}
