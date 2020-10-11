import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDNAdWq1rq4eyq93gSWKhBdUqV_j-D1XKI",
  authDomain: "research-app-62e9a.firebaseapp.com",
  databaseURL: "https://research-app-62e9a.firebaseio.com",
  projectId: "research-app-62e9a",
  storageBucket: "research-app-62e9a.appspot.com",
  messagingSenderId: "1063112511140",
  appId: "1:1063112511140:web:086a4a4273c1db7d9a6031",
  measurementId: "G-Q69TM770WM"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(firebaseConfig);
  }
}
