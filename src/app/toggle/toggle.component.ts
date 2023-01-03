import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() checked: boolean | undefined;
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit(): void {}
  toggle(toggleComp?: ToggleComponent) {
    console.log(toggleComp);
    this.checkedChange.emit(!this.checked);
  }
}
