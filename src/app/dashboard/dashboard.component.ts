import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  showEditTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  selectedTaskUrl!: string;
  selectedTask: Task | null = null;
  isLoading: boolean = false;


  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit() {
    this.fetchAllTasks();
  }

  openCreateTaskForm() {
    this.showCreateTaskForm = true;
    console.log('Form popped up');
  }

  closeCreateTaskForm() {
    this.showCreateTaskForm = false;
    this.selectedTask = null;
  }

  createTask(data: Task) {
    console.log(data);
    this.http.post(
      'https://piskmabase-default-rtdb.firebaseio.com/tasks.json', data)
      .pipe(
        catchError(error => {
          console.error('Error creating task', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Task created successfully', response);
          this.fetchAllTasks(); // Refresh tasks list after creation
        }
      });
  }

  fetchAllTasks() {
    this.isLoading = true;
    this.http.get<{ [key: string]: Task }>(
      'https://piskmabase-default-rtdb.firebaseio.com/tasks.json'
    ).pipe(
      map(response => {
        console.log(response);
        let tasks: Task[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            tasks.push({ ...response[key], id: key });
          }
        }
        return tasks;
      }),
      catchError(error => {
        console.error('Error fetching tasks', error);
        return of([]); // Return an empty array on error
      })
    ).subscribe(tasks => {
      this.allTasks = tasks;
      this.isLoading = false;
      console.log(tasks);
    });
  }

  clearTasks() {
    this.allTasks = [];
    console.log('Tasks cleared');
  }

  viewTaskDetail(task: Task) {
    // Logic to view task details
    console.log('Viewing details for task:', task);
  }

  editTask(task: Task) {
    this.selectedTask = { ...task }; // Create a copy of the task to be edited
    this.showEditTaskForm = true;
  }

  closeEditTaskForm() {
    this.showEditTaskForm = false;
    this.selectedTask = null;
  }

  updateTask(updatedTask: Task) {
    const index = this.allTasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.allTasks[index] = updatedTask;
    }
  }

 


  deleteTask(taskId: string) {
    this.http.delete(`https://piskmabase-default-rtdb.firebaseio.com/tasks/${taskId}.json`)
      .pipe(
        catchError(error => {
          console.error('Error deleting task', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response === null) {
          console.error('Task deletion failed, but it is handled gracefully');

        } else {
          console.log('Task deleted successfully', response);
          this.fetchAllTasks(); // Refresh tasks list after deletion
        }
        this.fetchAllTasks();
      });
  }

  selectTask(task: Task) {
    this.selectedTaskUrl = task.url;
  }



}
