import { Author, authors } from './../authors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (deleteAuthor)="handleDelete($event)"
    >
    </app-author-detail>
  `,
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() {}
  ngOnInit(): void {}
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}
