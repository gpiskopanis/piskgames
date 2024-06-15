import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm){
    this.EmitTaskData.emit(form.value);
    console.log(form.value);
    this.CloseForm.emit(false);
  }

}
