import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { ITask } from '../../interfaces/task';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.tasks = [
      { id: '1', title: 'Task 1', completed: false, editing: false },
      { id: '2', title: 'Task 2', completed: true, editing: false },
      { id: '3', title: 'Task 3', completed: false, editing: false },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark task as completed', () => {
    const taskServiceSpy = spyOn(component['taskService'], 'markTaskAsCompleted');
    const taskId = '1';
    component.markTaskAsCompleted(taskId, false);
    expect(taskServiceSpy).toHaveBeenCalledWith(taskId);
  });
  

  it('should enable editing for a task', () => {
    const task: ITask = { id: '1', title: 'Test Task', completed: false, editing: false };
    component.enableEditTask(task);
    expect(task.editing).toBe(true);
  });

  it('should save the edited task', () => {
    const task: ITask = { id: '1', title: 'Test Task', completed: false, editing: true };
    component.saveEditedTask(task);
    expect(task.editing).toBe(false);
  });

  it('should delete a task', () => {
    const taskServiceSpy = spyOn(component['taskService'], 'deleteTask');
    component.deleteTask('1');
    expect(taskServiceSpy).toHaveBeenCalledWith('1');
  });
});
