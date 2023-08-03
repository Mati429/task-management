import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input() tasks: ITask[] = [];
  @Output() completeTask = new EventEmitter();

  constructor(private taskService: TaskService) {}

  markTaskAsCompleted(id: string, completed: boolean): void {
    if(completed) return;
    this.taskService.markTaskAsCompleted(id);
    this.completeTask.emit();
  }

  enableEditTask(task: ITask): void {
    task.editing = true;
  }

  saveEditedTask(task: ITask): void {
    task.editing = false;
    this.taskService.updateTask(task);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }
}
