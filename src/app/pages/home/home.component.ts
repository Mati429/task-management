import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasks: ITask[] = [];
  filter = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  filterTask(filter: string) {
    this.filter = filter;
    this.tasks = this.taskService.filterTasks(filter);
  }

  completeTask() {
    this.tasks = this.taskService.filterTasks(this.filter);
  }

  addTask() {
    this.tasks = this.taskService.filterTasks(this.filter);
  }
}
