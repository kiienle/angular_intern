import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-emit',
  templateUrl: './event-emit.component.html',
  styleUrls: ['./event-emit.component.scss'],
})
export class EventEmitComponent implements OnInit {
  @Output() clickChildBtn = new EventEmitter<String>();
  @Output() clickChildDiv = new EventEmitter<String>();
  @Output() clickChangeColor = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  handleClickChildBtn() {
    this.clickChildBtn.emit('Kien');
  }
  handleClickChildDiv() {
    this.clickChildDiv.emit('Trung Kien');
  }
}
