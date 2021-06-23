import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() label!: string;

  @Output() todoChanged = new EventEmitter<string>();
  @Output() deleteRequested = new EventEmitter<void>();

  onChange_inputField(event: any) {
    const value = event.target.value;
    console.log('onChange_inputField', value);

    this.todoChanged.emit(value);
  }

  onClick_deleteButton() {
    console.log('onClick_deleteButton');
    this.deleteRequested.emit();
  }
}
