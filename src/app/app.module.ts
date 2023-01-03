import { ComponentInteraction } from './component-interation.component';
import { NgForComponent } from './ng-for.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataBindingComponent } from './dataBinding.component';
import { IfElseComponent } from './if-else.component';
import { ClassBindingComponent } from './class-binding.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { EventEmitComponent } from './event-emit/event-emit.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent,
    IfElseComponent,
    NgForComponent,
    ClassBindingComponent,
    ComponentInteraction,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    ChildFormComponent,
    EventEmitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
