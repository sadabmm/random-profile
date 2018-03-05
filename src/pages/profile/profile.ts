import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RandomProfileProvider } from "../../providers/random-profile/random-profile";
import { LoadingController } from 'ionic-angular';

import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  // Variables that'll get updated with the data fetched from the api.
  pictureUrl: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  location = {
    street: "",
    city: "",
    state: "",
    postcode: ""
  };
  email: string;
  phone: string;
  cell: string

  // Creating the loading spinner.
  loading = this.loadingCtrl.create({
  content: 'Please wait...'
  });

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private randomProfile: RandomProfileProvider,
    public loadingCtrl: LoadingController) {

  }

  // This method just fires if the page is not cached. 
  //ionViewWillEnter or ionViewDidEnter will be fired every time the page is entered.
  ionViewDidLoad() {

    //Presenting the loading spinner.
    this.loading.present();

    this.randomProfile.getProfile().subscribe(profile => {
  
      //Subscribing to the provider as it's an observable, and putting all the fetched data in the
      //declared variables.
      this.pictureUrl = profile.results[0].picture.large;
      this.firstName = profile.results[0].name.first;
      this.lastName = profile.results[0].name.last;
      this.birthDate = profile.results[0].dob;
      this.location = profile.results[0].location;
      this.email = profile.results[0].email;
      this.phone = profile.results[0].phone;
      this.cell = profile.results[0].cell;
    },
      err => console.warn(err),
      () => {
        //Dismissing the loading spinner when the data fetch is complete.
        this.loading.dismiss()

      })
  }

  //The reload method using navControl to push the ProfilePage which fires off the provider
  //fetch the data again.
  reload(){
    this.navCtrl.push(ProfilePage);
  }

  //Logout method redirecting to the HomePage.
  logout(){
    this.navCtrl.push(HomePage);
  }

}
