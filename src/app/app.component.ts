import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newTask: string = '';
  tasks: { title: string; isDone: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask, isDone: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTaskStatus(index: number) {
    this.tasks[index].isDone = !this.tasks[index].isDone;
  }
}
