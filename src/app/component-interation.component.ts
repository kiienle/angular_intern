import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'component-interaction',
  template: `
    <div class="h-5" [style.backgroundColor]="backgroundColor">
      <div
        class="w-full h-5"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
})
export class ComponentInteraction implements OnInit, OnChanges {
  @Input() backgroundColor: string = '';
  @Input() progressColor: string = '';
  @Input() progress = 0;
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if ('progress' in changes) {
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }
}
