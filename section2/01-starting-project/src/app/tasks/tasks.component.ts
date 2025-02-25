import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';
import { type INewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required : true}) name!: string;
  isAddingTask : boolean =  false;

  constructor( private tasksService: TasksService)
  {

  }
  get selectedUserTasks()
  {
    return this.tasksService.getUserTasks(this.userId);
  }

  OnStartAddTask()
  {
    this.isAddingTask= true;
  }
  OnCloseAddTask()
  {
    this.isAddingTask= false;
  }
}
