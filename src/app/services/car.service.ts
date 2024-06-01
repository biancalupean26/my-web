import { Injectable } from '@angular/core';
//import { Car } from '../../Models/car'; // Add this line
import { Car } from '@models/car'; // Actualizează importul


// Rest of the code...

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private suitableList: Car[] = [];

  setSuitableList(cars: Car[]) {
    this.suitableList = cars;
  }

  getSuitableList(): Car[] {
    return this.suitableList;
  }
}
