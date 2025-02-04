import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports : [TasksComponent],
  imports : [SharedModule, CommonModule,FormsModule ]
})
export class TasksModule{

}
