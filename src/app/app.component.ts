import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyB32HRaonCX7IO5jwLv7uuZ8RzzSNn9Kvo",
      authDomain: "bookshelves-3525d.firebaseapp.com",
      projectId: "bookshelves-3525d",
      storageBucket: "bookshelves-3525d.appspot.com",
      messagingSenderId: "775020728741",
      appId: "1:775020728741:web:e7b3a6bfbf49887abf184c",
      measurementId: "G-9NLZ5M02D0"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

  }
}
