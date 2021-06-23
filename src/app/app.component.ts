import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos = ['clean kitchen', 'make dinner', 'go to sleep'];

  newTodo!: string;

  onTodoChanged_todoItem(index: number, changedTodo: string) {
    console.log('onTodoChanged_todoItem', index, changedTodo);
    this.todos[index] = changedTodo;
  }

  onDeleteRequested_todoItem(index: number) {
    console.log('onDeleteRequested_todoItem', index);
    this.todos.splice(index, 1);
  }

  onClick_addButton() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
  }
}
