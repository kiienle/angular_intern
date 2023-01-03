import { Component } from '@angular/core';
@Component({
  selector: 'class-binding',
  template: `
    <div class="flex items-center mt-4">
      <div
        [class.border-blue-500]="tab_active === tabItem.id"
        class="mx-4 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
        *ngFor="let tabItem of tabData"
        (click)="tab_active = tabItem.id"
      >
        {{ tabItem.title }}
        {{ tabItem.isTabActive }}
      </div>
    </div>
  `,
})
export class ClassBindingComponent {
  tab_active = 0;
  tabData = [
    {
      id: 1,
      title: 'Home',
      isTabActive: false,
    },
    {
      id: 2,
      title: 'Service',
      isTabActive: false,
    },
    {
      id: 3,
      title: 'Contact',
      isTabActive: false,
    },
  ];
}
