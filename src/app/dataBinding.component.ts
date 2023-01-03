import { Component } from '@angular/core';
@Component({
  selector: 'data-binding',
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <input [(ngModel)]="name" #ctrl="ngModel" required />
    <p>Value: {{ name }}</p>
    <button (click)="updateUsername()">Click me!</button>
  `,
})
export class DataBindingComponent {
  name: String = '';
  user = {
    name: '100-days-angular',
    age: 30,
  };
  updateUsername() {
    alert('Inside Angular Component method');
    console.log(this.name);
    this.name = 'Nancy';
  }
}
