import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button class="text-white" (click)="handleDelete()">X</button>
    </div>
  `,
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit(): void {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
