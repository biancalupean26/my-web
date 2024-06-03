// // car-detail.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// import { Car } from '../../Models/car';
// import { initializeApp } from 'firebase/app';
// //import { firebaseConfig } from '../../app.module';

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
//   selector: 'app-car-detail',
//   templateUrl: './details.component.html',
//   styleUrls: ['./details.component.css']
// })
// export class CarDetailComponent implements OnInit {
//   car: Car | undefined;

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     const name = this.route.snapshot.paramMap.get('name');
//     if (name) {
//       this.getCarDetails(name);
//     }
//   }

//   getCarDetails(name: string) {
//     const carsCollection = collection(db, "Cars");
//     const q = query(carsCollection, where("Name", "==", name));
//     getDocs(q).then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         this.car = new Car(
//           data['Name'],
//           data['Manufacturing year'],
//           data['Seating capacity'],
//           data['Transmision'],
//           data['Description'],
//           data['Image']
//         );
//       });
//     }).catch((error) => {
//       console.error("Error getting document:", error);
//     });
//   }
// }

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
// export class CarDetailComponent implements OnInit {
//   car: Car | undefined ;

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     const name = this.route.snapshot.paramMap.get('name');
//     console.log('Car name from URL:', name); // Adaugă acest mesaj de debug
//     if (name) {
//       this.getCarDetails(name);
//     }
//   }

//   async getCarDetails(name: string) {
//     try {
//       const carsCollection = collection(db, "Cars");
//       const q = query(carsCollection, where("Name", "==", name)); ////////////////////////////////////////////////////////////////
//       const querySnapshot = await getDocs(q);

//       if (querySnapshot.empty) {
//         console.error("No matching documents found.");
//         return;
//       }

//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         console.log('Document data:', data); // Mesaj de debug
//         this.car = new Car(
//           doc.id,
//           data['Manufacturing year'],
//           data['Seating capacity'],
//           data['Transmision'],
//           data['Description'],
//           data['Image']
//         );
//         console.log('Car object:', this.car); // Mesaj de debug
//       });
//     } catch (error) {
//       console.error("Error getting document:", error);
//     }
//   }
// }

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






