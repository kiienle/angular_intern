import { Component } from '@angular/core';
@Component({
  selector: 'if-else',
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your age: {{ user.age }}</p>
    <input type="number" [(ngModel)]="user.age" />
    <div *ngIf="user.age >= 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
    <ng-template #noPG13>
      <div>Bạn không thể xem nội dung PG-13</div>
    </ng-template>
  `,
})
export class IfElseComponent {
  user = {
    name: '100-days-angular',
    age: 30,
  };
}
