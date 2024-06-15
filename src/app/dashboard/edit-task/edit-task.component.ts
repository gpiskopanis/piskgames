import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Model/Task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  @Input() task!: Task;
  @Output() closeForm = new EventEmitter<void>();
  @Output() updateTask = new EventEmitter<Task>();

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.put(
      `https://piskmabase-default-rtdb.firebaseio.com/tasks/${this.task.id}.json`,
      this.task
    ).subscribe(response => {
      console.log('Task updated successfully', response);
      this.updateTask.emit(this.task); // Emit the updated task
      this.closeEditForm();
    });
  }

  closeEditForm() {
    this.closeForm.emit();
  }
}
