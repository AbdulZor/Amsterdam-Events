import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app-fb.component.html',
  styleUrls: ['./app-fb.component.css']
})
export class AppFbComponent implements OnInit {
  title = 'Amsterdam-Events';
  constructor() { }

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyA5TGzvmyYQjbPVoXAI3DvmlAEkoaadmm8",
      authDomain: "web-frameworks-abdul.firebaseapp.com",
      databaseURL: "https://web-frameworks-abdul.firebaseio.com",
      projectId: "web-frameworks-abdul",
      storageBucket: "web-frameworks-abdul.appspot.com",
      messagingSenderId: "907738032255",
      appId: "1:907738032255:web:c936d26b25713eea93774a",
      measurementId: "G-N45QV1DEW2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
