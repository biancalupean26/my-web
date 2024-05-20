import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';
import { Message } from '../../Models/message';


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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  namefrominput: string = "";
  phonefrominput: string = "";
  textfrominput: string = "";

sendMessage(){
  try{
    var newMessage = new Message(this.namefrominput, this.phonefrominput, this.textfrominput);
    const docRef = addDoc(collection(db, "Messages"), {
      name: newMessage.name,
      phone: newMessage.phone,
      text: newMessage.text
    });
    docRef.then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    });
          // Resetează câmpurile formularului după trimitere
          this.namefrominput = "";
          this.phonefrominput = "";
          this.textfrominput = "";
          alert("Message sent successfully");
  }catch(e){
    console.error("Error adding document: ", e);
}
}
}


