import { Component } from '@angular/core';
import { Car } from '../../Models/car';

import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; //ATENTIE AICI S AR PUTEA SA SCHIMB 
import { getStorage, ref, getDownloadURL } from 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyAw51sQ4vSMAKifbJeTRNVjv6jgZsa4Tf8",
  authDomain: "web-project-bc9cf.firebaseapp.com",
  projectId: "web-project-bc9cf",
  storageBucket: "web-project-bc9cf.appspot.com",
  messagingSenderId: "693107133701",
  appId: "1:693107133701:web:09ff01b259569ddc597b6c",
  measurementId: "G-CLPJ3HBYTS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  carList: Car[] = [];

  constructor() {
    this.getCars();
  }

  getCars(){
    const querySnapshot = getDocs(collection(db, "Cars"));
    querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()['proba']}`);
        var car=new Car(doc.id, doc.data()['Manufacturing year'],doc.data()['Seating capacity'],doc.data()['Transmision'],doc.data()['Description'],doc.data() ['Image']);
        this.carList.push(car)
  });

  });
  }
}
