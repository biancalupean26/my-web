// import { Component } from '@angular/core';
// import { Car } from '../../Models/car';
// import { HomeComponent } from '../home/home.component';


// @Component({
//   selector: 'app-result',
//   templateUrl: './result.component.html',
//   styleUrl: './result.component.css'
// })
// export class ResultComponent {
//   suitableList1: Car[] = [];

//   constructor(homeComponent: HomeComponent) {
//     this.suitableList1 = homeComponent.suitableList;
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { Car } from '../../Models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  suitableList1: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.suitableList1 = this.carService.getSuitableList();
  }
}

