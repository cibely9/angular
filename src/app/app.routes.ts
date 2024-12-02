import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DogBreedsComponent } from './pages/dog-breeds/dog-breeds.component';
import { AddDogComponent } from './pages/add-dog/add-dog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dog-breeds', component: DogBreedsComponent },
  { path: 'add-dog', component: AddDogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
