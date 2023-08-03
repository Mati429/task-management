import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = [
    { id: uuidv4(), title: 'Task 1', completed: true, editing: false },
    { id: uuidv4(), title: 'Task 2', completed: false, editing: false },
    { id: uuidv4(), title: 'Task 3', completed: true, editing: false },
  ];

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({
      id: uuidv4(),
      title,
      completed: false,
      editing: false,
    });
  }

  markTaskAsCompleted(id: string): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  filterTasks(filter: string): ITask[] {
    if (filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (filter === 'incompleted') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }

  updateTask(task: ITask): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = task;
    }
  }

  deleteTask(id: string): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
