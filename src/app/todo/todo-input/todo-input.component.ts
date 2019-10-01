import { Component, OnInit } from '@angular/core'
import { todoservice } from 'src/app/todo.service';
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private to: todoservice) {}

  ngOnInit() {
  }

newItem
pushItem(){
    if(this.newItem!="")
    {
      this.to.pushItem(this.newItem)
    }
  }
}