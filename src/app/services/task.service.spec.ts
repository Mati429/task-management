// tests/task.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    taskService = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(taskService).toBeTruthy();
  });

  it('should add a task', () => {
    const initialTasksCount = taskService.getTasks().length;
    taskService.addTask('New Task');
    const updatedTasksCount = taskService.getTasks().length;
    expect(updatedTasksCount).toBe(initialTasksCount + 1);
  });

  it('should mark a task as completed', () => {
    taskService.addTask('Task 1');
    const incompletedTasks = taskService.filterTasks('incompleted');
    const testTask = incompletedTasks[0];
    taskService.markTaskAsCompleted(testTask.id);
    const updatedTask = taskService.getTasks().find((t) => t.id === testTask.id);
    expect(updatedTask?.completed).toBe(true);
  });

  it('should filter tasks based on completion status', () => {
    taskService.addTask('Task 1');
    taskService.addTask('Task 2');
    taskService.addTask('Task 3');
    const completedTasks = taskService.filterTasks('completed');
    const incompletedTasks = taskService.filterTasks('incompleted');
    taskService.markTaskAsCompleted(incompletedTasks[0].id);
    const updateCompletedTasks = taskService.filterTasks('completed');
    const updateIncompletedTasks = taskService.filterTasks('incompleted');
    expect(updateCompletedTasks.length).toBe(completedTasks.length + 1);
    expect(updateIncompletedTasks.length).toBe(incompletedTasks.length - 1);
  });

  it('should update a task', () => {
    taskService.addTask('Create Task');
    let updateTask = taskService.getTasks().filter((t) => t.title === 'Create Task')[0];
    updateTask.title = 'Updated Task'
    taskService.updateTask(updateTask);
    const resultTask = taskService.getTasks().find((t) => t.id === updateTask.id);
    expect(resultTask?.title).toBe('Updated Task');
  });

  it('should delete a task', () => {
    taskService.addTask('Task 1');
    const initialTasksCount = taskService.getTasks().length;
    const taskId = taskService.getTasks()[0].id;
    taskService.deleteTask(taskId);
    const updatedTasksCount = taskService.getTasks().length;
    expect(updatedTasksCount).toBe(initialTasksCount - 1);
  });
});
