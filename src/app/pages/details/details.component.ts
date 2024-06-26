
// car-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { Car } from '../../Models/car';
import { initializeApp } from 'firebase/app';
//import { firebaseConfig } from '../../app.module';
import { doc, getDoc } from 'firebase/firestore';

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
  selector: 'app-car-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class CarDetailComponent implements OnInit {
  car: Car | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('name'); // Presupun că 'name' este de fapt ID-ul documentului
    console.log('Car ID from URL:', id); // Adaugă acest mesaj de debug
    if (id) {
      this.getCarDetails(id);
    }
  }

  async getCarDetails(id: string) {
    try {
      const carDocRef = doc(db, "Cars", id);
      const docSnap = await getDoc(carDocRef);

      if (!docSnap.exists()) {
        console.error("No matching document found.");
        return;
      }

      const data = docSnap.data();
      console.log('Document data:', data); // Mesaj de debug
      this.car = new Car(
        docSnap.id,  // Assuming Car constructor takes ID as the first argument
        data['Manufacturing year'],
        data['Seating capacity'],
        data['Transmision'],
        data['Description'],
        data['Image']
      );
      console.log('Car object:', this.car); // Mesaj de debug
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }
}






