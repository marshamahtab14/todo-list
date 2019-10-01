import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { FormsModule } from '@angular/forms'
import { todoservice } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoHeaderComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [todoservice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
