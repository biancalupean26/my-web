import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component'; 
import { ContactComponent } from './pages/contact/contact.component'; 
import { ResultComponent } from './pages/result/result.component'; 
import{CarDetailComponent} from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';
import { ReservationComponent } from './pages/reservation/reservation.component';



const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'cars', component: CarsComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'result', component: ResultComponent},
{ path: 'cars/:name', component:  CarDetailComponent},
{ path: 'about', component:  AboutComponent},
{ path: 'reservation', component:  ReservationComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
