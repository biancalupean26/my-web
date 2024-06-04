import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';
import { Reservation } from '../../Models/reservation';


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
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  cmodelfrominput: string = "";
  startfrominput: string = "";
  endfrominput: string = "";
  pickupfrominput: string = "";
  returnnfrominput: string = "";
  fnamefrominput: string = "";
  lnamefrominput: string = "";
  contactfrominput: string = "";
  checkboxChecked: boolean = false;


  sendReservation(){
    try{
      var newReservation = new Reservation(this.cmodelfrominput, this.startfrominput, this.endfrominput, this.pickupfrominput, this.returnnfrominput, this.fnamefrominput, this.lnamefrominput, this.contactfrominput);
      const docRef = addDoc(collection(db, "Reservations"), {
        cmodel: newReservation.cmodel,
        start: newReservation.start,
        end: newReservation.end,
        pickup: newReservation.pickup,
        returnn: newReservation.returnn,
        fname: newReservation.fname,
        lname: newReservation.lname,
        contact: newReservation.contact
      });
      docRef.then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      });
            // Resetează câmpurile formularului după trimitere
            this.cmodelfrominput = "";
            this.startfrominput = "";
            this.endfrominput = "";
            this.pickupfrominput = "";
            this.returnnfrominput = "";
            this.fnamefrominput = "";
            this.lnamefrominput = "";
            this.contactfrominput = "";
            alert("Reservation sent successfully. You will be contacted soon.");
    }catch(e){
      console.error("Error adding document: ", e);
  }
  }
}
