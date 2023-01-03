import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
})
export class ChildFormComponent implements OnInit {
  model = {
    name: 'Kien Le Trung',
  };
  @ViewChild('nameForm', {
    read: ElementRef,
    static: true,
  })
  form: ElementRef<HTMLElement> | undefined;
  constructor() {}
  ngOnInit(): void {
    console.log(this.form);
  }
  onClickBtn() {
    console.log(this.model.name);
  }
}
