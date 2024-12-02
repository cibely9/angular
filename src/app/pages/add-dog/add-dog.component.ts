import { Component } from '@angular/core';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent {
  dog = {
    name: '',
    breed: '',
    age: null // Usar null é melhor para representar um número vazio
  };

  onSubmit() {
    console.log('Cachorro cadastrado:', this.dog);
    alert('Cachorro cadastrado com sucesso!');
  }
}
