import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component'; 
import { ContactComponent } from './pages/contact/contact.component'; 
import { ResultComponent } from './pages/result/result.component'; 

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'cars', component: CarsComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'result', component: ResultComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
