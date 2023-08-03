import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';
import { FormsModule } from '@angular/forms';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    const addTaskButton = fixture.nativeElement.querySelector('.task-add-form-btn');
    component.task = 'New Task';
    addTaskButton.click();
    fixture.detectChanges();
    const tasks = component['taskService'].getTasks();
    const addedTask = tasks.find(task => task.title === 'New Task');
    expect(addedTask).toBeTruthy();
    expect(component.task).toBe('');
  });
  
});
