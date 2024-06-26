// import { Component } from '@angular/core';

// import { FirebaseApp, initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs, where, query, Firestore } from 'firebase/firestore/lite'; //ATENTIE AICI S AR PUTEA SA SCHIMB 
// import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// import { Car } from '../../Models/car';
// import { Router } from '@angular/router';





// const firebaseConfig = {
//   apiKey: "AIzaSyAw51sQ4vSMAKifbJeTRNVjv6jgZsa4Tf8",
//   authDomain: "web-project-bc9cf.firebaseapp.com",
//   projectId: "web-project-bc9cf",
//   storageBucket: "web-project-bc9cf.appspot.com",
//   messagingSenderId: "693107133701",
//   appId: "1:693107133701:web:09ff01b259569ddc597b6c",
//   measurementId: "G-CLPJ3HBYTS"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); 

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// // export class HomeComponent {
// //   seats: string[]= ['2', '4', '5', '6', '7'];
// //   pricePerDay: string[] = ['30$', '35$', '40$','40$','60$','65$','75$'];
// //   selectedSeats: string = '';
// //   selectedPrice: string = '';

// //   suitableList: Car[] = [];

// //   onSearch(){
// //     const querySnapshot = getDocs(collection(db, "Cars"));
// //     querySnapshot.then((querySnapshot) => {
// //       querySnapshot.forEach((doc) => {
// //         if( this.selectedSeats===doc.data()['Seating capacity'] && this.selectedPrice===doc.data()['Price per day']){
// //         var car=new Car(doc.id, doc.data()['Manufacturing year'],doc.data()['Seating capacity'],doc.data()['Transmision'],doc.data()['Description'],doc.data() ['Image']);
// //         this.suitableList.push(car)
// //         }
// //   });
// //   console.log(this.suitableList)
// //   });
// // }
// // }
// export class HomeComponent {
//   seats: string[] = ['2', '4', '5', '6', '7'];
//   pricePerDay: string[] = ['30$', '35$', '40$', '45$', '50$', '60$', '65$', '75$'];
//   selectedSeats: string = '';
//   selectedPrice: string = '';

//   suitableList: Car[] = [];
  

//   constructor(private router: Router) {}

//   onSearch() {
//     const carsCollection = collection(db, "Cars");
//     const q = query(
//       carsCollection,
//       where("Seating capacity", "==", this.selectedSeats),
//       where("Price", "==", this.selectedPrice)
//     );

//     getDocs(q).then((querySnapshot) => {
//       this.suitableList = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         const car = new Car(
//           doc.id,
//           data['Manufacturing year'],
//           data['Seating capacity'],
//           data['Transmission'],
//           data['Description'],
//           data['Image']
//         );
//         this.suitableList.push(car);
//       });
//       console.log(this.suitableList);
//     }).catch((error) => {
//       console.error("Error getting documents: ", error);
//     });
//   }

//   navigateToResult() {
//     this.router.navigate(['/result'], { queryParams: { seats: this.selectedSeats, price: this.selectedPrice } });
//   }
// }

import { Component } from '@angular/core';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import { Car } from '../../Models/car';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { initializeApp } from 'firebase/app';

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
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  seats: string[] = ['2', '4', '5', '6', '7'];
  pricePerDay: string[] = ['40$', '60$', '70$'];
  selectedSeats: string = '';
  selectedPrice: string = '';
  selectedDays:string='';
  //errorMessage: string='';

  constructor(private router: Router, private carService: CarService) {}

  // onSearch() {
  //   const carsCollection = collection(db, "Cars");
  //   const q = query(
  //     carsCollection,
  //     where("Seating capacity", "==", this.selectedSeats),
  //     where("Price", "==", this.selectedPrice)
  //   );

  //   getDocs(q).then((querySnapshot) => {
  //     const suitableList: Car[] = [];
  //     querySnapshot.forEach((doc) => {
  //       const data = doc.data();
  //       const car = new Car(
  //         doc.id,
  //         data['Manufacturing year'],
  //         data['Seating capacity'],
  //         data['Transmission'],
  //         data['Description'],
  //         data['Image']
  //       );
  //       suitableList.push(car);
  //     });
  //     this.carService.setSuitableList(suitableList);
  //     this.router.navigate(['/result'], { queryParams: { seats: this.selectedSeats, price: this.selectedPrice } });
  //   }).catch((error) => {
  //     console.error("Error getting documents: ", error);
  //   });
  // }
//   onSearch() {
//     const carsCollection = collection(db, "Cars");
    
//     const conditions = [];
    
//     // Adaugă condiția pentru "Seating capacity" dacă este selectată
//     if (this.selectedSeats) {
//       conditions.push(where("Seating capacity", "==", this.selectedSeats));
//     }
    
//     // Adaugă condiția pentru "Price" dacă este selectată
//     if (this.selectedPrice) {
//       conditions.push(where("Price", "==", this.selectedPrice));
//     }
    
//     // Construiește interogarea cu condițiile specificate
//     const q = query(carsCollection, ...conditions);
  
//     getDocs(q).then((querySnapshot) => {
//       const suitableList: Car[] = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         const car = new Car(
//           doc.id,
//           data['Manufacturing year'],
//           data['Seating capacity'],
//           data['Transmission'],
//           data['Description'],
//           data['Image']
//         );
//         suitableList.push(car);
//       });
//       this.carService.setSuitableList(suitableList);
//       this.router.navigate(['/result'], { queryParams: { seats: this.selectedSeats, price: this.selectedPrice } });
//     }).catch((error) => {
//       console.error("Error getting documents: ", error);
//     });
//   }
  
// }
onSearch() {
  const carsCollection = collection(db, "Cars");
  
  const conditions = [];
  
  // Adaugă condiția pentru "Seating capacity" dacă este selectată
  if (this.selectedSeats) {
    conditions.push(where("Seating capacity", "==", this.selectedSeats));
  }
  
  // Adaugă condiția pentru "Price" dacă este selectată
  if (this.selectedPrice) {
    conditions.push(where("Price", "==", this.selectedPrice));
  }
  
  // Construiește interogarea cu condițiile specificate
  const q = query(carsCollection, ...conditions);

  getDocs(q).then((querySnapshot) => {
    const suitableList: Car[] = [];
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
      suitableList.push(car);
    });
    
    if (suitableList.length > 0) {
      this.carService.setSuitableList(suitableList);
      this.router.navigate(['/result'], { queryParams: { seats: this.selectedSeats, price: this.selectedPrice } });
    } else {
      // Afișează un mesaj corespunzător dacă nu există rezultate
      alert("No cars were found matching your search criteria.");
      
    }
  }).catch((error) => {
    console.error("Error getting documents: ", error);
    alert("Error getting documents.");
  });
}
}









