import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component'; 
import { ContactComponent } from './pages/contact/contact.component'; 

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'cars', component: CarsComponent},
{ path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }