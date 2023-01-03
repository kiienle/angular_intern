import { EventEmitComponent } from './event-emit/event-emit.component';
import { ToggleComponent } from './toggle/toggle.component';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'ng-for',
  template: `
    <div *ngFor="let author of authors; index as idx; count as total">
      ({{ idx }}) / ({{ total }}) {{ author.id }} - {{ author.firstName }}
      {{ author.lastName }}
      <ng-container *ngIf="total >= 2; else noTotal"
        ><div>Bạn co' thể xem nội dung Total</div></ng-container
      >
      <ng-template #noTotal>Bạn không thể xem nội dung Total</ng-template>
    </div>
    <button (click)="toggleInside(this.toggleComp)">Toggle</button>
    <button (click)="eventEmitComp.handleClickChildDiv()">
      Click Me!! by Ref
    </button>
    <button (click)="clickInside()">Click Me!! by Ref Inside</button>
    <app-toggle #toggleComp [(checked)]="checked"></app-toggle>
    <app-event-emit
      #eventEmitComp
      (clickChildBtn)="onClickChildBtn($event)"
      (clickChildDiv)="onClickChildDiv($event)"
      (clickChangeColor)="onClickChangeColor()"
    ></app-event-emit>
  `,
})
export class NgForComponent implements OnInit {
  checked = false;
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];

  @ViewChild('toggleComp') toggleComp: ToggleComponent | undefined;
  @ViewChild('eventEmitComp') eventEmitComp: EventEmitComponent | undefined;
  constructor() {}
  ngOnInit(): void {
    console.log('hello Kien');
  }
  toggleInside(toggleComp: ToggleComponent) {
    console.log(toggleComp);
    this.toggleComp?.toggle(toggleComp);
  }
  clickInside() {
    this.eventEmitComp?.handleClickChildBtn();
    console.log(this.eventEmitComp);
  }
  onClickChildBtn(value: String) {
    console.log('hello', value);
  }
  onClickChildDiv(value: String) {
    console.log('Div', value);
  }
  onClickChangeColor() {
    this.checked = !this.checked;
  }
}
