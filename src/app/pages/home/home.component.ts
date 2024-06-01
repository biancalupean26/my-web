import { Component } from '@angular/core';

import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore/lite'; //ATENTIE AICI S AR PUTEA SA SCHIMB 
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Car } from '../../Models/car';
import { Router } from 'express';




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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// export class HomeComponent {
//   seats: string[]= ['2', '4', '5', '6', '7'];
//   pricePerDay: string[] = ['30$', '35$', '40$','40$','60$','65$','75$'];
//   selectedSeats: string = '';
//   selectedPrice: string = '';

//   suitableList: Car[] = [];

//   onSearch(){
//     const querySnapshot = getDocs(collection(db, "Cars"));
//     querySnapshot.then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         if( this.selectedSeats===doc.data()['Seating capacity'] && this.selectedPrice===doc.data()['Price per day']){
//         var car=new Car(doc.id, doc.data()['Manufacturing year'],doc.data()['Seating capacity'],doc.data()['Transmision'],doc.data()['Description'],doc.data() ['Image']);
//         this.suitableList.push(car)
//         }
//   });
//   console.log(this.suitableList)
//   });
// }
// }
export class HomeComponent {
  seats: string[] = ['2', '4', '5', '6', '7'];
  pricePerDay: string[] = ['30$', '35$', '40$', '45$', '50$', '60$', '65$', '75$'];
  selectedSeats: string = '';
  selectedPrice: string = '';

  suitableList: Car[] = [];

  // constructor(private router: Router) {}

  onSearch() {
    const carsCollection = collection(db, "Cars");
    const q = query(
      carsCollection,
      where("Seating capacity", "==", this.selectedSeats),
      where("Price", "==", this.selectedPrice)
    );

    getDocs(q).then((querySnapshot) => {
      this.suitableList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const car = new Car(
          doc.id,
          data['Manufacturing year'],
          data['Seating capacity'],
          data['Transmission'],
          data['Description'],
          data['Image']
        );
        this.suitableList.push(car);
      });
      console.log(this.suitableList);
      // this.router.navigate(['/results'], { queryParams: { seats: this.selectedSeats, price: this.selectedPrice } });
    }).catch((error) => {
      console.error("Error getting documents: ", error);
    });
  }
}


