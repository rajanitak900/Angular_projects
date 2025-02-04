import { TasksService } from './../tasks.service';
import { Component, inject, Input} from '@angular/core';
import { DatePipe } from '@angular/common';
import {type ITask} from './task.model';
import { CardComponent } from "../../shared/card/card.component";
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input({required:true}) task!: ITask;
 private tasksServive= inject(TasksService);
 onCompleteTask()
 {
   this.tasksServive.removeTask(this.task.id);
 }
}
