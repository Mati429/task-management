import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  task = '';
  filter = 'all';

  @Output() filterChanged = new EventEmitter<string>();
  @Output() addNewTask = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask() {
    if(this.task) {
      this.taskService.addTask(this.task);
      this.addNewTask.emit();
      this.task = '';
    }
  }

  onFilterChange() {
    this.filterChanged.emit(this.filter);
  }
}
