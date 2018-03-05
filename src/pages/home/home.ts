import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";

// This home page is used as the login page.

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //2-way data binding is used with ngModel, so the username and password string will be updated here
  //as the user fills out the input fields.
  username: string;
  password: string;

  // Harcoding the Username and Password in the object.
  hardcodedCredentials = {
    username: 'user',
    password: 'user'
  }

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  onSubmit(){
    if(this.username == this.hardcodedCredentials.username && 
      this.password == this.hardcodedCredentials.password){
      console.log("The credentials match!");
      //Code here if the username and password input matches the hardcoded ones.
      this.navCtrl.push(ProfilePage);
    } else {
      //Alert dialog showing login error.
      let alert = this.alertCtrl.create({
        title: 'Login Error!',
        subTitle: 'Incorrect Username or Password!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
