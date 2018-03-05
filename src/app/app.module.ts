import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from "../pages/profile/profile";
import { RandomProfileProvider } from '../providers/random-profile/random-profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RandomProfileProvider
  ]
})
export class AppModule {}
